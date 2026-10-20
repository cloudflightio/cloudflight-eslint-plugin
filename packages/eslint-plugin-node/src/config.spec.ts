import {type ESLint} from 'eslint';
import {mkdtempSync, rmSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';

import {cloudflightNodeConfig, cloudflightNodeFormatConfig} from './index';
import {
    appliedRules,
    createEslint,
    fixFile,
    formatCases,
    javascriptFiles,
    lintMessages,
    readWithUnixLineEndings,
    ruleIds,
    typescriptFiles,
} from '../../../test/eslint-helpers';

const fixtureDir = join(__dirname, '..', 'fixtures');
const inputDir = join(fixtureDir, 'format', 'input');
const expectedDir = join(fixtureDir, 'format', 'expected');

function lintConfig(): ESLint {
    return createEslint(fixtureDir, cloudflightNodeConfig({rootDirectory: fixtureDir}));
}

function formatConfig(fix = false): ESLint {
    return createEslint(fixtureDir, cloudflightNodeFormatConfig({rootDirectory: fixtureDir}), fix);
}

describe('cloudflightNodeConfig', () => {
    it('applies the expected rules to each file type', async () => {
        expect(await appliedRules(lintConfig(), fixtureDir, [...typescriptFiles, ...javascriptFiles])).toMatchSnapshot();
    });

    it.each([
        'valid/typescript.ts',
        'valid/commonjs.js',
        'valid/module.mjs',
        'valid/commonjs.cjs',
        'valid/cli.ts',
    ])('reports nothing for %s', async (file) => {
        expect(await lintMessages(lintConfig(), file)).toEqual([]);
    });

    it.each([
        ['node rules', 'invalid/typescript.ts', 'n/no-sync'],
        ['typescript-eslint rules with type information', 'invalid/typescript.ts', '@typescript-eslint/no-floating-promises'],
    ])('applies the %s', async (_layer, file, rule) => {
        expect(await ruleIds(lintConfig(), file)).toContain(rule);
    });

    describe('package type', () => {
        it.each([
            ['module', 'module'],
            ['commonjs', 'commonjs'],
        ])('follows the package type %s for .js files and the extension for .cjs and .mjs', async (type, sourceType) => {
            const project = mkdtempSync(join(tmpdir(), 'cloudflight-node-'));

            writeFileSync(join(project, 'package.json'), JSON.stringify({type}));
            try {
                const eslint = createEslint(project, cloudflightNodeConfig({rootDirectory: project}));
                const expectations: [string, string][] = [['tool.js', sourceType], ['tool.cjs', 'commonjs'], ['tool.mjs', 'module']];

                for (const [file, expected] of expectations) {
                    const config: unknown = await eslint.calculateConfigForFile(join(project, file));

                    expect(config).toMatchObject({languageOptions: {sourceType: expected}});
                }
                // commonjs globals stay available in .cjs files of a module project
                const [result] = await eslint.lintText('module.exports = 1;\n', {filePath: join(project, 'tool.cjs')});

                expect(result?.messages.map((message) => message.ruleId)).not.toContain('no-undef');
            }
            finally {
                rmSync(project, {recursive: true, force: true});
            }
        });
    });

    describe('disable comments', () => {
        it('knows the format rules', async () => {
            const messages = await lintMessages(lintConfig(), 'disable/format-rules.ts');

            // neither unknown nor reported as unused, lint --fix would delete an unused directive
            expect(messages).toEqual([]);
        });
    });
});

describe('cloudflightNodeFormatConfig', () => {
    it('applies the expected rules to each file type', async () => {
        expect(await appliedRules(formatConfig(), fixtureDir, [...typescriptFiles, ...javascriptFiles])).toMatchSnapshot();
    });

    it.each(formatCases(inputDir))('formats %s', async (file) => {
        const result = await fixFile(formatConfig(true), join(inputDir, file));

        expect(result.output).toBe(readWithUnixLineEndings(join(expectedDir, file)));
        expect(result.messages).toEqual([]);
    });

    it.each(formatCases(inputDir))('changes nothing in the formatted %s', async (file) => {
        const result = await fixFile(formatConfig(true), join(expectedDir, file));

        expect(result.output).toBe(readWithUnixLineEndings(join(expectedDir, file)));
        expect(result.messages).toEqual([]);
    });

    it.each(formatCases(inputDir))('leaves no lint findings in the formatted %s', async (file) => {
        expect(await lintMessages(lintConfig(), join(expectedDir, file))).toEqual([]);
    });

    describe('disable comments', () => {
        it('knows the lint rules', async () => {
            const result = await fixFile(formatConfig(true), join(fixtureDir, 'disable/lint-rules.ts'));

            expect(result.output).toBe(readWithUnixLineEndings(join(fixtureDir, 'disable/lint-rules.ts')));
            expect(result.messages).toEqual([]);
        });
    });
});

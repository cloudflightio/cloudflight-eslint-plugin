import {type ESLint} from 'eslint';
import {defineConfig} from 'eslint/config';
import {readFileSync} from 'node:fs';
import {join} from 'node:path';

import {cloudflightTypescriptConfig, cloudflightTypescriptFormatConfig} from './index';
import {cloudflightTypescriptPlugin} from './rules';
import {NoOnEventAssign} from './rules/typescript/no-on-event-assign';
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

function lintConfig(tsConfigFiles?: string[]): ESLint {
    return createEslint(fixtureDir, cloudflightTypescriptConfig({rootDirectory: fixtureDir, tsConfigFiles}));
}

function formatConfig(fix = false): ESLint {
    return createEslint(fixtureDir, cloudflightTypescriptFormatConfig({rootDirectory: fixtureDir}), fix);
}

describe('cloudflightTypescriptPlugin', () => {
    it('carries the package version and links the rule documentation', () => {
        const manifest: unknown = JSON.parse(readFileSync(join(__dirname, '..', 'package.json'), 'utf8'));

        expect(manifest).toMatchObject({version: cloudflightTypescriptPlugin.meta?.version});
        expect(NoOnEventAssign.meta.docs?.url).toContain('/src/rules/typescript/no-on-event-assign.ts');
    });
});

describe('cloudflightTypescriptConfig', () => {
    it('applies the expected rules to each file type', async () => {
        expect(await appliedRules(lintConfig(), fixtureDir, [...typescriptFiles, ...javascriptFiles])).toMatchSnapshot();
    });

    it.each([
        'valid/typescript.ts',
        'valid/javascript.js',
        'valid/jsx.jsx',
        'valid/commonjs.cjs',
        'valid/magic-numbers.ts',
    ])('reports nothing for %s', async (file) => {
        expect(await lintMessages(lintConfig(), file)).toEqual([]);
    });

    it.each([
        ['core rules', 'invalid/typescript.ts', 'no-var'],
        ['typescript-eslint rules with type information', 'invalid/typescript.ts', '@typescript-eslint/no-floating-promises'],
        ['import rules', 'invalid/typescript.ts', 'import-x/no-mutable-exports'],
        ['security rules', 'invalid/typescript.ts', 'no-unsanitized/property'],
        ['custom rules', 'invalid/typescript.ts', '@cloudflight/typescript/no-on-event-assign'],
    ])('applies the %s', async (_layer, file, rule) => {
        expect(await ruleIds(lintConfig(), file)).toContain(rule);
    });

    describe('typed linting', () => {
        it('reports a typescript file that no tsconfig.json includes instead of linting it without types', async () => {
            const messages = await lintMessages(lintConfig(), 'orphan/orphan.ts');

            expect(messages).toHaveLength(1);
            expect(messages[0]?.fatal).toBe(true);
            expect(messages[0]?.message).toContain('was not found by the project service');
        });

        it('provides type information with an explicit tsConfigFiles configuration', async () => {
            expect(await ruleIds(lintConfig(['tsconfig.json']), 'invalid/typescript.ts')).toContain('@typescript-eslint/no-floating-promises');
        });

        it('resolves the aliases of nested tsconfig files with the default configuration', async () => {
            const messages = await lintMessages(lintConfig(), 'nested-project/src/index.ts');

            expect(messages.filter((message) => message.fatal)).toEqual([]);
            expect(messages.map((message) => message.ruleId)).toContain('@typescript-eslint/no-floating-promises');
            expect(messages.map((message) => message.ruleId)).not.toContain('import-x/no-unresolved');
        });

        it('resolves nested aliases when eslint runs from another directory', async () => {
            const eslint = createEslint(join(fixtureDir, '..'), cloudflightTypescriptConfig({rootDirectory: fixtureDir}));
            const messages = await lintMessages(eslint, join(fixtureDir, 'nested-project/src/index.ts'));

            expect(messages.map((message) => message.ruleId)).toContain('@typescript-eslint/no-floating-promises');
            expect(messages.map((message) => message.ruleId)).not.toContain('import-x/no-unresolved');
        });

        it('can be extended by a scoped config object although nested projects exist', async () => {
            const eslint = createEslint(fixtureDir, defineConfig({files: ['**/*.ts'], extends: [cloudflightTypescriptConfig({rootDirectory: fixtureDir})]}));
            const messages = await lintMessages(eslint, 'nested-project/src/index.ts');

            expect(messages.filter((message) => message.fatal)).toEqual([]);
            expect(messages.map((message) => message.ruleId)).not.toContain('import-x/no-unresolved');
        });

        it('matches files by glob patterns only, tools like the config inspector cannot read function matchers', () => {
            const patterns: unknown[] = cloudflightTypescriptConfig({rootDirectory: fixtureDir}).flatMap((config) => config.files ?? []).flat();

            expect(patterns.filter((pattern) => typeof pattern !== 'string')).toEqual([]);
        });

        it('uses the custom project and resolves its aliases independently of process.cwd', async () => {
            const messages = await lintMessages(lintConfig(['explicit-tsconfig/tsconfig.lint.json']), 'explicit-tsconfig/outside.ts');

            expect(messages.filter((message) => message.fatal)).toEqual([]);
            expect(messages.map((message) => message.ruleId)).toContain('@typescript-eslint/no-floating-promises');
            expect(messages.map((message) => message.ruleId)).not.toContain('import-x/no-unresolved');
        });
    });

    describe('javascript files', () => {
        it('keeps the core rules that typescript covers', async () => {
            const rules = await ruleIds(lintConfig(), 'javascript/core-rules.js');

            expect(rules).toContain('no-const-assign');
            // node and browser globals are declared, only the typo is undefined
            expect(rules.filter((rule) => rule === 'no-undef')).toHaveLength(1);
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

describe('cloudflightTypescriptFormatConfig', () => {
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

    describe('nested projects', () => {
        it('groups the aliases of a nested project with the internal imports', async () => {
            const result = await fixFile(formatConfig(true), join(fixtureDir, 'nested-project/src/order.ts'));

            expect(result.output).toBe("import {join} from 'node:path';\n\nimport {work} from '@nested/util';\n\nexport const value = join(String(work));\n");
        });
    });

    describe('side-effect imports', () => {
        it('reports an import that belongs in front of a side-effect import instead of moving it', async () => {
            const result = await fixFile(formatConfig(true), join(fixtureDir, 'imports/side-effect-order.ts'));

            expect(result.output).toBe(readWithUnixLineEndings(join(fixtureDir, 'imports/side-effect-order.ts')));
            expect(result.messages.map((message) => message.ruleId)).toEqual(['import-x/order']);
        });
    });
});

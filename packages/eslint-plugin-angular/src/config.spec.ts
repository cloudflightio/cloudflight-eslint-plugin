import {type ESLint} from 'eslint';
import {join} from 'node:path';

import {cloudflightAngularConfig, cloudflightAngularFormatConfig} from './index';
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
const files = [...typescriptFiles, ...javascriptFiles, 'file.html'];

function lintConfig(): ESLint {
    return createEslint(fixtureDir, cloudflightAngularConfig({rootDirectory: fixtureDir}));
}

function formatConfig(fix = false): ESLint {
    return createEslint(fixtureDir, cloudflightAngularFormatConfig({rootDirectory: fixtureDir}), fix);
}

describe('cloudflightAngularConfig', () => {
    it('applies the expected rules to each file type', async () => {
        expect(await appliedRules(lintConfig(), fixtureDir, files)).toMatchSnapshot();
    });

    it.each([
        'valid/component.ts',
        'valid/template.html',
    ])('reports nothing for %s', async (file) => {
        expect(await lintMessages(lintConfig(), file)).toEqual([]);
    });

    it.each([
        ['angular rules', 'invalid/component.ts', '@angular-eslint/no-empty-lifecycle-method'],
        ['template rules in inline templates', 'invalid/component.ts', '@angular-eslint/template/button-has-type'],
        ['typescript-eslint rules with type information', 'invalid/component.ts', '@typescript-eslint/no-floating-promises'],
        ['template rules in html files', 'invalid/template.html', '@angular-eslint/template/button-has-type'],
        ['sanitizer bypass rules', 'invalid/component.ts', 'no-restricted-properties'],
    ])('applies the %s', async (_layer, file, rule) => {
        expect(await ruleIds(lintConfig(), file)).toContain(rule);
    });

    describe('disable comments', () => {
        it('knows the format rules', async () => {
            const messages = await lintMessages(lintConfig(), 'disable/format-rules.ts');

            // neither unknown nor reported as unused, lint --fix would delete an unused directive
            expect(messages).toEqual([]);
        });
    });
});

describe('cloudflightAngularFormatConfig', () => {
    it('applies the expected rules to each file type', async () => {
        expect(await appliedRules(formatConfig(), fixtureDir, files)).toMatchSnapshot();
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

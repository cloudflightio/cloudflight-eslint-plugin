import {type ESLint} from 'eslint';
import {join} from 'node:path';

import {cloudflightReactConfig, cloudflightReactFormatConfig} from './index';
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
    return createEslint(fixtureDir, cloudflightReactConfig({rootDirectory: fixtureDir}));
}

function formatConfig(fix = false): ESLint {
    return createEslint(fixtureDir, cloudflightReactFormatConfig({rootDirectory: fixtureDir}), fix);
}

describe('cloudflightReactConfig', () => {
    it('applies the expected rules to each file type', async () => {
        expect(await appliedRules(lintConfig(), fixtureDir, [...typescriptFiles, ...javascriptFiles])).toMatchSnapshot();
    });

    it.each([
        'valid/component.tsx',
        'valid/component.jsx',
    ])('reports nothing for %s', async (file) => {
        expect(await lintMessages(lintConfig(), file)).toEqual([]);
    });

    it.each([
        ['react rules', 'invalid/component.tsx', 'react/jsx-key'],
        ['react hooks rules', 'invalid/component.tsx', 'react-hooks/rules-of-hooks'],
        ['accessibility rules', 'invalid/component.tsx', 'jsx-a11y/alt-text'],
        ['typescript-eslint rules with type information', 'invalid/component.tsx', '@typescript-eslint/no-floating-promises'],
        ['jsx security rules', 'invalid/component.tsx', 'react/no-danger'],
        ['core rules in javascript files', 'invalid/component.jsx', 'no-console'],
        ['accessibility rules in javascript files', 'invalid/component.jsx', 'jsx-a11y/alt-text'],
    ])('applies the %s', async (_layer, file, rule) => {
        expect(await ruleIds(lintConfig(), file)).toContain(rule);
    });

    describe('javascript files', () => {
        it('reports an undefined component named like a browser global', async () => {
            expect(await ruleIds(lintConfig(), 'javascript/undefined-component.jsx')).toContain('react/jsx-no-undef');
        });
    });

    describe('disable comments', () => {
        it('knows the format rules', async () => {
            const messages = await lintMessages(lintConfig(), 'disable/format-rules.tsx');

            // neither unknown nor reported as unused, lint --fix would delete an unused directive
            expect(messages).toEqual([]);
        });
    });
});

describe('cloudflightReactFormatConfig', () => {
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
            const result = await fixFile(formatConfig(true), join(fixtureDir, 'disable/lint-rules.tsx'));

            expect(result.output).toBe(readWithUnixLineEndings(join(fixtureDir, 'disable/lint-rules.tsx')));
            expect(result.messages).toEqual([]);
        });
    });
});

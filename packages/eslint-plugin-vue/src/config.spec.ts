import {type ESLint} from 'eslint';
import {rmSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';

import {cloudflightVueConfig} from './index';
import {appliedRules, createEslint, javascriptFiles, lintMessages, ruleIds, typescriptFiles} from '../../../test/eslint-helpers';

const fixtureDir = join(__dirname, '..', 'fixtures');

function lintConfig(tsConfigFiles?: string[]): ESLint {
    return createEslint(fixtureDir, cloudflightVueConfig({rootDirectory: fixtureDir, tsConfigFiles}));
}

describe('cloudflightVueConfig', () => {
    it('applies the expected rules to each file type', async () => {
        expect(await appliedRules(lintConfig(), fixtureDir, [...typescriptFiles, ...javascriptFiles])).toMatchSnapshot();
    });

    // the config reads the script of each single-file component, so the typed and the untyped one need real files
    it.each([
        'valid/ContactForm.vue',
        'valid/OnlyTemplate.vue',
    ])('applies the expected rules to %s', async (file) => {
        expect(await appliedRules(lintConfig(), fixtureDir, [file])).toMatchSnapshot();
    });

    it.each([
        'valid/ContactForm.vue',
        'valid/OnlyTemplate.vue',
    ])('reports nothing for %s', async (file) => {
        expect(await lintMessages(lintConfig(), file)).toEqual([]);
    });

    it.each([
        ['vue template rules', 'invalid/ContactForm.vue', 'vue/html-button-has-type'],
        ['typescript-eslint rules with type information in scripts', 'invalid/ContactForm.vue', '@typescript-eslint/no-floating-promises'],
    ])('applies the %s', async (_layer, file, rule) => {
        expect(await ruleIds(lintConfig(), file)).toContain(rule);
    });

    describe('single-file components', () => {
        it('lints a template-only SFC when eslint runs from another directory', async () => {
            const eslint = createEslint(join(fixtureDir, '..'), cloudflightVueConfig({rootDirectory: fixtureDir}));

            expect(await lintMessages(eslint, join(fixtureDir, 'valid/OnlyTemplate.vue'))).toEqual([]);
        });

        it('type-checks an SFC whose lang attribute uses single quotes', async () => {
            expect(await ruleIds(lintConfig(), 'single-file-components/SingleQuote.vue')).toContain('@typescript-eslint/no-floating-promises');
        });

        it('lints an SFC without a typescript script like a javascript file', async () => {
            const rules = await ruleIds(lintConfig(), 'single-file-components/PlainScript.vue');

            expect(rules).toContain('no-throw-literal');
            expect(rules).not.toContain('@typescript-eslint/explicit-function-return-type');
        });

        it('lints a javascript SFC that mentions lang="ts" only in a comment', async () => {
            // written before the config, which lists the typescript SFCs when it is created
            const file = join(fixtureDir, 'single-file-components/LangInComment.vue');

            writeFileSync(file, '<!-- <script setup lang="ts"> -->\n<script>\nexport default {};\n</script>\n\n<template>\n    <div />\n</template>\n');
            try {
                const messages = await lintMessages(lintConfig(), file);

                expect(messages.filter((message) => message.fatal)).toEqual([]);
            }
            finally {
                rmSync(file, {force: true});
            }
        });

        it('lints an SFC without a typescript script whose name has glob characters', async () => {
            const messages = await lintMessages(lintConfig(), 'single-file-components/[slug].vue');

            expect(messages.filter((message) => message.fatal)).toEqual([]);
        });

        it('type-checks a typescript SFC whose name has glob characters', async () => {
            expect(await ruleIds(lintConfig(), 'single-file-components/{a,b}.vue')).toContain('@typescript-eslint/no-floating-promises');
        });

        it('lints an SFC created after the config without type information', async () => {
            const eslint = lintConfig();
            const file = join(fixtureDir, 'single-file-components/CreatedLater.vue');

            writeFileSync(file, '<template>\n    <div />\n</template>\n');
            try {
                const messages = await lintMessages(eslint, file);

                expect(messages.filter((message) => message.fatal)).toEqual([]);
            }
            finally {
                rmSync(file, {force: true});
            }
        });

        it('lints an SFC in a dot directory without type information', async () => {
            const messages = await lintMessages(lintConfig(), 'single-file-components/.vitepress/ThemeLayout.vue');

            expect(messages.filter((message) => message.fatal)).toEqual([]);
        });

        it('matches files by glob patterns only, tools like the config inspector cannot read function matchers', () => {
            const patterns: unknown[] = cloudflightVueConfig({rootDirectory: fixtureDir})
                .flatMap((config) => [...config.files ?? [], ...config.ignores ?? []])
                .flat();

            expect(patterns.filter((pattern) => typeof pattern !== 'string')).toEqual([]);
        });
    });

    describe('typed linting', () => {
        it('uses an explicit tsconfig project for conventional SFC scripts and TypeScript files', async () => {
            const eslint = lintConfig(['explicit-tsconfig/tsconfig.lint.json']);

            for (const file of ['explicit-tsconfig/Form.vue', 'explicit-tsconfig/outside.ts']) {
                const messages = await lintMessages(eslint, file);

                expect(messages.filter((message) => message.fatal)).toEqual([]);
                expect(messages.map((message) => message.ruleId)).toContain('@typescript-eslint/no-floating-promises');
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

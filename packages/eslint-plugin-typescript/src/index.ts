import type {FlatConfig} from '@typescript-eslint/utils/ts-eslint';

import {fixupPluginRules, includeIgnoreFile} from '@eslint/compat';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginImportX from 'eslint-plugin-import-x';
import perfectionist from 'eslint-plugin-perfectionist';
import rxjs from 'eslint-plugin-rxjs';
import {resolve} from 'node:path';
import tseslint from 'typescript-eslint';

import {customRules} from './configs/custom';
import {eslintRules} from './configs/eslint';
import {formatEslintRules} from './configs/format';
import {importEslintRules} from './configs/import';
import {rxjsRules} from './configs/rxjs';
import {typescriptEslintRules, typescriptEslintRulesDisableTypeChecked} from './configs/typescript-eslint';
import {cloudflightTypescriptPlugin} from './rules';

/**
 * @deprecated Use `cloudflightTypescriptConfig` instead
 * This is only for internal use only
 */
export const cloudflightTypescriptBaseConfig = tseslint.config(
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        plugins: {
            '@cloudflight/typescript': cloudflightTypescriptPlugin,
            rxjs: fixupPluginRules(rxjs),
        },
        extends: [
            pluginJs.configs.recommended,
            ...tseslint.configs.strictTypeChecked,
            ...tseslint.configs.stylisticTypeChecked,
        ],
        name: 'cloudflight/typescript/base-rules',
        rules: {
            ...eslintRules,
            ...typescriptEslintRules,
            ...customRules,
            ...rxjsRules,
        },
    },
);

/**
 * @deprecated Use `cloudflightTypescriptConfig` instead
 * This is only for internal use only
 */
export const cloudflightTypescriptImportConfig = tseslint.config({
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    extends: [
        eslintPluginImportX.flatConfigs.recommended,
        eslintPluginImportX.flatConfigs.typescript,
    ],
    languageOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    name: 'cloudflight/typescript/import-rules',
    rules: {
        ...importEslintRules,
    },
});

/**
 * @deprecated Use `cloudflightTypescriptConfig` instead
 * This is only for internal use only
 */
export const cloudflightTypescriptDisableTypeCheckedConfig = tseslint.config({
    files: ['**/*.{js,mjs,cjs}'],
    extends: [tseslint.configs.disableTypeChecked],
    name: 'cloudflight/typescript/disable-type-checked-rules',
    rules: {
        ...typescriptEslintRulesDisableTypeChecked,
    },
});

export interface CloudflightEslintPluginSettings {
    rootDirectory: string;
    /**
     * Override the default tsconfig files to use for the project.
     * Keep this list as short as possible, a large list will negatively impact performance.
     * Relative to the rootDirectory.
     */
    tsConfigFiles?: string[];
}

export function cloudflightTypescriptFormatConfig(
    {rootDirectory}: CloudflightEslintPluginSettings,
): FlatConfig.ConfigArray {
    const gitignorePath = resolve(rootDirectory, '.gitignore');

    return tseslint.config(
        includeIgnoreFile(gitignorePath),
        {
            files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
            plugins: {
                '@typescript-eslint': tseslint.plugin,
                'import-x': eslintPluginImportX,
                '@cloudflight/typescript': cloudflightTypescriptPlugin,
                '@stylistic': stylistic,
                perfectionist,
            },
            languageOptions: {
                parser: tseslint.parser,
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            linterOptions: {
                reportUnusedDisableDirectives: 'off',
            },
            name: 'cloudflight/typescript/format-rules',
            rules: {
                ...formatEslintRules,
            },
        },
    );
}

export function cloudflightTypescriptConfig(
    {rootDirectory, tsConfigFiles}: CloudflightEslintPluginSettings,
): FlatConfig.ConfigArray {
    const gitignorePath = resolve(rootDirectory, '.gitignore');

    return tseslint.config(
        includeIgnoreFile(gitignorePath),
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        ...cloudflightTypescriptBaseConfig,
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        ...cloudflightTypescriptImportConfig,
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        ...cloudflightTypescriptDisableTypeCheckedConfig,
        {
            languageOptions: {
                parserOptions: {
                    project: tsConfigFiles ?? ['tsconfig*(.*).json'],
                    tsconfigRootDir: rootDirectory,
                },
            },
            settings: {
                'import-x/resolver': {
                    typescript: {
                        alwaysTryTypes: true,
                        project: tsConfigFiles ?? ['tsconfig*(.*).json'],
                        tsconfigRootDir: rootDirectory,
                    },
                },
            },
        },
    );
}

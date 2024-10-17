import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import * as tsParser from '@typescript-eslint/parser';
import eslintPluginImportX from 'eslint-plugin-import-x';
import perfectionist from 'eslint-plugin-perfectionist';
import tseslint from 'typescript-eslint';

import {customRules} from './configs/custom';
import {eslintRules} from './configs/eslint';
import {formatEslintRules} from './configs/format';
import {importEslintRules} from './configs/import';
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
        parser: tsParser,
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

export const cloudflightTypescriptConfig = tseslint.config(
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    ...cloudflightTypescriptBaseConfig,
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    ...cloudflightTypescriptImportConfig,
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    ...cloudflightTypescriptDisableTypeCheckedConfig,
);

export const cloudflightTypescriptFormatConfig = tseslint.config({
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: {
        '@typescript-eslint': tseslint.plugin,
        'import-x': eslintPluginImportX,
        '@cloudflight/typescript': cloudflightTypescriptPlugin,
        '@stylistic': stylistic,
        perfectionist,
    },
    languageOptions: {
        parser: tsParser,
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
});

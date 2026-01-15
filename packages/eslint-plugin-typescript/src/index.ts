import type {FlatConfig, SharedConfigurationSettings} from '@typescript-eslint/utils/ts-eslint';

import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginImportX from 'eslint-plugin-import-x';
import perfectionist from 'eslint-plugin-perfectionist';
import tseslint, {InfiniteDepthConfigWithExtends} from 'typescript-eslint';

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
// eslint-disable-next-line @typescript-eslint/no-deprecated -- tseslint.config is deprecated but defineConfig has type incompatibilities with typescript-eslint
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
export function cloudflightTypescriptImportConfig(settings: CloudflightEslintPluginSettings): FlatConfig.ConfigArray {
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- tseslint.config is deprecated but defineConfig has type incompatibilities with typescript-eslint
    return tseslint.config({
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        extends: [
            // https://github.com/typescript-eslint/typescript-eslint/issues/10395
            // typescript-eslint broke backwards compatibility when they added TS 5.7 support.
            // It is only a type issue here, as the changed value isn't actually used outside the type
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            eslintPluginImportX.flatConfigs.recommended as InfiniteDepthConfigWithExtends,
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
        settings: importXSettings(settings),
    });
}

/**
 * @deprecated Use `cloudflightTypescriptConfig` instead
 * This is only for internal use only
 */
// eslint-disable-next-line @typescript-eslint/no-deprecated -- tseslint.config is deprecated but defineConfig has type incompatibilities with typescript-eslint
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

export function cloudflightTypescriptFormatConfig(settings: CloudflightEslintPluginSettings): FlatConfig.ConfigArray {
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- tseslint.config is deprecated but defineConfig has type incompatibilities with typescript-eslint
    return tseslint.config(
        {
            ignores: ['.yarn/**'],
        },
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
            settings: importXSettings(settings),
        },
    );
}

export function cloudflightTypescriptConfig(settings: CloudflightEslintPluginSettings): FlatConfig.ConfigArray {
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- tseslint.config is deprecated but defineConfig has type incompatibilities with typescript-eslint
    return tseslint.config(
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        ...cloudflightTypescriptBaseConfig,
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        ...cloudflightTypescriptImportConfig(settings),
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        ...cloudflightTypescriptDisableTypeCheckedConfig,
        {
            languageOptions: {
                parserOptions: {
                    project: settings.tsConfigFiles ?? ['tsconfig*(.*).json'],
                    tsconfigRootDir: settings.rootDirectory,
                },
            },
        },
    );
}

function importXSettings(settings: CloudflightEslintPluginSettings): SharedConfigurationSettings {
    return {
        'import-x/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: settings.tsConfigFiles ?? ['tsconfig*(.*).json'],
                tsconfigRootDir: settings.rootDirectory,
            },
        },
    };
}

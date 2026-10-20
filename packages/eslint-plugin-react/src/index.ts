import type {FlatConfig} from '@typescript-eslint/utils/ts-eslint';
import type {Linter} from 'eslint';

import {
    CloudflightEslintPluginSettings,
    cloudflightTypescriptConfig,
    cloudflightTypescriptFormatConfig,
} from '@cloudflight/eslint-plugin-typescript';
import {fixupPluginRules} from '@eslint/compat';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import * as pluginReactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

import {reactRules} from './configs/react';
import {reactFormatRules} from './configs/react-format';

const relevantFiles = ['**/*.{js,jsx,mjs,cjs,ts,mts,cts,tsx}'];

// eslint-plugin-react 7 still uses context.getFilename and crashes on eslint 10, @eslint/compat patches that
// see: https://github.com/jsx-eslint/eslint-plugin-react/issues/3977
const pluginReactFixed = fixupPluginRules(pluginReact);

export function cloudflightReactConfig(settings: CloudflightEslintPluginSettings): Linter.Config[] {
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- tseslint.config is deprecated but defineConfig has type incompatibilities with typescript-eslint
    return eslintConfigs(tseslint.config(
        ...cloudflightTypescriptConfig(settings),
        {
            files: relevantFiles,
            extends: [
                // the stable preset, recommended-latest adds experimental rules
                pluginReactHooks.configs.flat.recommended,
                pluginJsxA11y.flatConfigs.recommended,
            ],
            plugins: {
                react: pluginReactFixed,
            },
            languageOptions: {
                parser: tseslint.parser,
                ecmaVersion: 'latest',
                parserOptions: {
                    jsxPragma: null,
                    ecmaFeatures: {
                        jsx: true,
                    },
                },
            },
            name: 'cloudflight/react/rules',
            rules: {
                // configs.flat is a Record, its entries are typed as possibly undefined
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                ...pluginReact.configs.flat['recommended']!.rules,
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                ...pluginReact.configs.flat['jsx-runtime']!.rules,
                ...reactRules,
            },
            settings: {
                react: {
                    version: 'detect',
                },
            },
        },
    ));
}

export function cloudflightReactFormatConfig(settings: CloudflightEslintPluginSettings): Linter.Config[] {
    return eslintConfigs([
        ...cloudflightTypescriptFormatConfig(settings),
        {
            files: relevantFiles,
            // no rules, only so that disable comments for the react rules are known in the format run,
            // the same plugin objects as in the lint config because eslint rejects two objects under one name
            plugins: {
                ...pluginReactHooks.configs.flat.recommended.plugins,
                ...pluginJsxA11y.flatConfigs.recommended.plugins,
                react: pluginReactFixed,
            },
            languageOptions: {
                parser: tseslint.parser,
                ecmaVersion: 'latest',
                sourceType: 'module',
                parserOptions: {
                    jsxPragma: null,
                    ecmaFeatures: {
                        jsx: true,
                    },
                },
            },
            settings: {
                react: {
                    version: 'detect',
                },
            },
        },
        {
            files: relevantFiles,
            name: 'cloudflight/react/format-rules',
            rules: {
                ...reactFormatRules,
            },
        },
    ]);
}

// typescript-eslint's config type is not accepted by eslint's defineConfig or a typed eslint.config.ts
function eslintConfigs(configs: FlatConfig.ConfigArray): Linter.Config[] {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return configs as Linter.Config[];
}

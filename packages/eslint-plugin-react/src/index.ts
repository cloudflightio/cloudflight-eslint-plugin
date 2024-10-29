import type {TSESLint} from '@typescript-eslint/utils';

import {
    cloudflightTypescriptBaseConfig,
    cloudflightTypescriptConfig,
    cloudflightTypescriptDisableTypeCheckedConfig,
    cloudflightTypescriptImportConfig,
} from '@cloudflight/eslint-plugin-typescript';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint';
// see https://github.com/jsx-eslint/eslint-plugin-react/issues/3838
import react from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

import {reactRules} from './configs/react';

export const cloudflightReactConfig = tseslint.config(
    ...cloudflightTypescriptConfig,
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,mts,cts,tsx}'],
        plugins: {
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            'react-hooks': pluginReactHooks as TSESLint.FlatConfig.Plugin,
        },
        extends: [
            // eslint-disable-next-line @typescript-eslint/no-deprecated
            ...cloudflightTypescriptBaseConfig,
            // eslint-disable-next-line @typescript-eslint/no-deprecated
            ...cloudflightTypescriptImportConfig,
            // type assertion is workaround for incorrect TypeScript types in eslint-plugin-react
            // see https://github.com/jsx-eslint/eslint-plugin-react/issues/3838
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions,@typescript-eslint/no-non-null-assertion
            react.configs.flat!['recommended'] as TSESLint.FlatConfig.Config,
            // type assertion is workaround for incorrect TypeScript types in eslint-plugin-react
            // see https://github.com/jsx-eslint/eslint-plugin-react/issues/3838
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions,@typescript-eslint/no-non-null-assertion
            react.configs.flat!['jsx-runtime'] as TSESLint.FlatConfig.Config,
            jsxA11y.flatConfigs.recommended,
        ],
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
        name: 'cloudflight/react/rules',
        rules: {
            ...pluginReactHooks.configs.recommended.rules,
            ...reactRules,
        },
    },
    {
        files: ['**/*.{js,jsx,mjs,cjs}'],
        extends: [
            // eslint-disable-next-line @typescript-eslint/no-deprecated
            ...cloudflightTypescriptDisableTypeCheckedConfig,
        ],
    },
);

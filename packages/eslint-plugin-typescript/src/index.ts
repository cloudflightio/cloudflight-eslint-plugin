import type {TSESLint} from '@typescript-eslint/utils';
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export const config: TSESLint.FlatConfig.ConfigArray = [
    {files: ["**/*.{js,mjs,cjs,ts}"]},
    {languageOptions: {globals: globals.browser}},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];

import {cloudflightTypescriptBaseConfig, cloudflightTypescriptConfig} from '@cloudflight/eslint-plugin-typescript';
import {TSESLint} from '@typescript-eslint/utils';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';

import {typescriptRules} from './configs/typescript';
import {vueRules} from './configs/vue';

export const cloudflightVueConfig = tseslint.config(
    ...cloudflightTypescriptConfig,
    {
        files: ['**/*.vue'],
        extends: [
            // we can only import the base config here because eslint-plugin-import-x
            // does not work with vue-eslint-parser properly
            // eslint-disable-next-line @typescript-eslint/no-deprecated
            ...cloudflightTypescriptBaseConfig,
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            ...pluginVue.configs['flat/recommended'] as TSESLint.FlatConfig.ConfigArray,
            ...vueTsEslintConfig(),
        ],
        name: 'cloudflight/vue/rules',
        rules: {
            ...typescriptRules,
            ...vueRules,
        },
    },
);

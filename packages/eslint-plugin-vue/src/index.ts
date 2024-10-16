import {cloudflightTypescriptBaseConfig, cloudflightTypescriptConfig} from '@cloudflight/eslint-plugin-typescript';
import {TSESLint} from '@typescript-eslint/utils';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import tseslint from 'typescript-eslint';
// @ts-expect-error .d.ts file for eslint-plugin-vue has been implemented but not released yet
// if the following line fails to build after updating the version, simply remove this comment
import pluginVue from 'eslint-plugin-vue';

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
            // .d.ts file for eslint-plugin-vue has been implemented but not released yet, if the
            // following line fails to build after updating the version, simply remove this comment
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/consistent-type-assertions
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

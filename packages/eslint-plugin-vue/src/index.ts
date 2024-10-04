import tseslint from 'typescript-eslint';
import { cloudflightTypescriptConfig } from '@cloudflight/eslint-plugin-typescript';
import {TSESLint} from '@typescript-eslint/utils';
// @ts-expect-error .d.ts file for eslint-plugin-vue has been implemented but not released yet
// if the following line fails to build after updating the version, simply remove this comment
import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import {typescriptRules} from './configs/typescript';
import {vueRules} from './configs/vue';

export const cloudflightVueConfig = tseslint.config(
    ...cloudflightTypescriptConfig,
    {
        files: ['**/*.vue'],
        extends: [
            ...cloudflightTypescriptConfig,
            // .d.ts file for eslint-plugin-vue has been implemented but not released yet, if the
            // following line fails to build after updating the version, simply remove this comment
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/consistent-type-assertions
            ...pluginVue.configs['flat/recommended'] as TSESLint.FlatConfig.ConfigArray,
            ...vueTsEslintConfig(),
        ],
        rules: {
            ...typescriptRules,
            ...vueRules,
        }
    },
);

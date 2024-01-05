import {TSESLint} from '@typescript-eslint/utils';

import {customRules} from './rules/custom';

export const RecommendedJsonConfig: TSESLint.Linter.ConfigType = {
    plugins: ['@cloudflight/typescript'],
    parser: 'eslint-plugin-json-es',
    rules: {
        ...customRules,
    },
};

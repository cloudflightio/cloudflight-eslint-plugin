import {TSESLint} from '@typescript-eslint/utils';

import {customRules} from './rules/custom';

export const RecommendedPackageConfig: TSESLint.Linter.Config = {
    plugins: ['@cloudflight/typescript'],
    parser: 'eslint-plugin-json-es',
    rules: {
        ...customRules,
    },
};

import {TSESLint} from '@typescript-eslint/utils';

import {customRules} from './rules/custom';

export const RecommendedPackageConfig: TSESLint.Linter.ConfigType = {
    plugins: ['@cloudflight/typescript'],
    parser: 'eslint-plugin-json-es',
    rules: {
        ...customRules,
    },
};

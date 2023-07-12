import {Linter} from 'eslint';

import {customRules} from './rules/custom';

export const RecommendedPackageConfig: Linter.BaseConfig = {
    plugins: ['@cloudflight/typescript'],
    parser: 'eslint-plugin-json-es',
    rules: {
        ...customRules,
    },
};

import {Linter} from 'eslint';

import {customRules} from './rules/custom';

export const RecommendedJsonConfig: Linter.BaseConfig = {
    plugins: ['@cloudflight/typescript'],
    parser: 'eslint-plugin-json-es',
    rules: {
        ...customRules,
    },
};

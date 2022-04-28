import { Linter } from 'eslint';
import { customRules } from './rules/custom';

export const RecommendedJsonConfig: Linter.BaseConfig = {
    plugins: ['@clf-internal/typescript'],
    parser: 'eslint-plugin-json-es',
    rules: {
        ...customRules,
    },
};

import { Linter } from 'eslint';
import { angularEslintRules } from './rules/angular-eslint';

export const RecommendedTypescriptConfig: Linter.BaseConfig = {
    plugins: ['@clf-internal/angular', '@clf-internal/typescript', '@angular-eslint'],
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@clf-internal/typescript/recommended'],
    rules: {
        ...angularEslintRules,
    },
};

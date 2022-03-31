import { Linter } from 'eslint';
import { typescriptEslintRules } from './rules/typescript-eslint';
import { eslintRules } from './rules/eslint';
import { importEslintRules } from './rules/import';

export const RecommendedTypescriptConfig: Linter.BaseConfig = {
    plugins: ['@clf-internal/typescript', '@typescript-eslint', 'import'],
    parser: '@typescript-eslint/parser',
    extends: ['plugin:import/typescript'],
    rules: {
        ...eslintRules,
        ...typescriptEslintRules,
        ...importEslintRules,
    },
};

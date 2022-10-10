import { Linter } from 'eslint';
import { typescriptEslintRules } from './rules/typescript-eslint';
import { eslintRules } from './rules/eslint';
import { importEslintRules } from './rules/import';
import { customRules } from './rules/custom';

export const RecommendedTypescriptConfig: Linter.BaseConfig = {
    plugins: ['@cloudflight/typescript', '@typescript-eslint', 'import'],
    parser: '@typescript-eslint/parser',
    extends: ['plugin:import/typescript'],
    rules: {
        ...eslintRules,
        ...typescriptEslintRules,
        ...importEslintRules,
        ...customRules,
    },
};

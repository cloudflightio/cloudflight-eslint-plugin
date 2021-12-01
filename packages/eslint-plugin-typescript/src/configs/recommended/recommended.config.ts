import { Linter } from 'eslint';
import { typescriptEslintRules } from './rules/typescript-eslint';
import { eslintRules } from './rules/eslint';

export const RecommendedConfig: Linter.BaseConfig = {
    plugins: ['@cloudflight/typescript', '@typescript-eslint', 'import'],
    parser: '@typescript-eslint/parser',
    extends: ['plugin:import/typescript'],
    rules: {
        'import/no-unresolved': 'error',
        'import/namespace': 'error',
        'import/no-absolute-path': 'error',
        'import/no-self-import': 'error',
        'import/no-cycle': ['error', { ignoreExternal: true }],
        'import/no-useless-path-segments': 'error',
        'import/no-relative-packages': 'error',
        'import/export': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-mutable-exports': 'error',
        'import/first': 'error',

        ...eslintRules,
        ...typescriptEslintRules,
    },
};

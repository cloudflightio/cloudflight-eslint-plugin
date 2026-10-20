import type {TSESLint} from '@typescript-eslint/utils';

export const importRules: TSESLint.Linter.RulesRecord = {
    // computationally expensive and checked by typescript already
    'import-x/namespace': 'off',
    'import-x/first': 'error',
    'import-x/no-absolute-path': 'error',
    'import-x/no-cycle': ['error', {ignoreExternal: true}],
    'import-x/no-mutable-exports': 'error',
    'import-x/no-useless-path-segments': 'error',
    'import-x/no-duplicates': 'error',
    'import-x/no-self-import': 'error',
    'import-x/export': 'error',
    // same as the core no-duplicate-imports but understands type imports, the core rule stays on for .vue files
    'no-duplicate-imports': 'off',
};

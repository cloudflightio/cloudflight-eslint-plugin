import {TSESLint} from '@typescript-eslint/utils';

export const nodeRules: TSESLint.Linter.RulesRecord = {
    // require all requires be top-level
    'n/global-require': 'error',

    // disabled because of https://github.com/eslint-community/eslint-plugin-n/issues/349
    'n/no-missing-import': 'off',

    // disallow use of new operator with the require function
    'n/no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    'n/no-path-concat': 'error',

    // disallow use of synchronous methods (off by default)
    'n/no-sync': 'error',

    // we use typescript, which transpiles es-syntax to cjs-syntax
    'n/no-unsupported-features/es-syntax': 'off',

    // we use typescript, so node-builtins are typed and checked via TS
    'n/no-unsupported-features/node-builtins': 'off',

    'n/prefer-node-protocol': 'error',
};

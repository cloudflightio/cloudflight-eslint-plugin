import {TSESLint} from '@typescript-eslint/utils';

export const RecommendedConfig: TSESLint.Linter.ConfigType = {
    extends: [
        'plugin:@cloudflight/typescript/recommended',
        'plugin:node/recommended',
        'plugin:no-unsanitized/DOM',
        'plugin:security/recommended-legacy',
    ],
    rules: {
        // require all requires be top-level
        'node/global-require': 'error',

        // disallow use of new operator with the require function
        'node/no-new-require': 'error',

        // disallow string concatenation with __dirname and __filename
        'node/no-path-concat': 'error',

        // disallow use of synchronous methods (off by default)
        'node/no-sync': 'error',

        // we use typescript, which transpiles es-syntax to cjs-syntax
        'node/no-unsupported-features/es-syntax': 'off',

        // we use typescript, so node-builtins are typed and checked via TS
        'node/no-unsupported-features/node-builtins': 'off',
    },
};

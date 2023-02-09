import { Linter } from 'eslint';

export const RecommendedConfig: Linter.BaseConfig = {
    extends: [
        'plugin:@cloudflight/typescript/recommended',
        'plugin:node/recommended',
        'plugin:no-unsanitized/DOM',
        'plugin:security/recommended',
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
    },
};

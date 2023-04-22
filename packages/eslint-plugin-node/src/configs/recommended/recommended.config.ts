import {Linter} from 'eslint';

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

        // we use typescript, which transpiles es-syntax to cjs-syntax
        'node/no-unsupported-features/es-syntax': 'off',

        // we use typescript, so node-builtins are typed and checked via TS
        'node/no-unsupported-features/node-builtins': 'off',

        // allow ".ts" extension, as we use typescript by default
        'node/no-missing-import': [
            'error',
            {
                allowModules: [],
                resolvePaths: [],
                tryExtensions: ['.js', '.json', '.node', '.ts'],
            },
        ],
    },
};

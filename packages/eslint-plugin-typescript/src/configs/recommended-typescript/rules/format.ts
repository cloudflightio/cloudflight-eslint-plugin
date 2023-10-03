import {TSESLint} from '@typescript-eslint/utils';

export const formatEslintRules: TSESLint.Linter.RulesRecord = {
    'max-len': [
        'error',
        {
            ignorePattern: '^(import|export) [^,]+ from',
            ignoreRegExpLiterals: true,
            ignoreTemplateLiterals: true,
            ignoreComments: true,
            code: 280,
        },
    ],
    'eol-last': ['error', 'always'],
    'no-multi-spaces': [
        'error',
        {
            ignoreEOLComments: false,
        },
    ],
    'dot-location': ['error', 'property'],
    'template-tag-spacing': ['error', 'never'],
    'template-curly-spacing': ['error', 'never'],
    'switch-colon-spacing': [
        'error',
        {
            after: true,
            before: false,
        },
    ],
    'spaced-comment': [
        'error',
        'always',
        {
            line: {
                exceptions: [
                    '-',
                    '+',
                ],
                markers: [
                    '=',
                    '!',
                    '/',
                ],
            },
            block: {
                exceptions: [
                    '-',
                    '+',
                ],
                markers: [
                    '=',
                    '!',
                    ':',
                    '::',
                ],
                balanced: true,
            },
        },
    ],
    'space-infix-ops': ['error'],
    'space-unary-ops': [
        'error',
        {
            words: true,
            nonwords: false,
            overrides: {},
        },
    ],
    'space-in-parens': ['error', 'never'],
    'space-before-blocks': ['error'],
    'space-before-function-paren': [
        'error',
        {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        },
    ],
    'semi-spacing': [
        'error',
        {
            before: false,
            after: true,
        },
    ],
    'padded-blocks': [
        'error',
        {
            blocks: 'never',
            classes: 'never',
            switches: 'never',
        },
        {
            allowSingleLineBlocks: true,
        },
    ],
    'padding-line-between-statements': [
        'error',
        {blankLine: 'always', prev: '*', next: 'return'},
        {blankLine: 'always', prev: 'const', next: '*'},
        {blankLine: 'any', prev: 'const', next: ['const', 'let', 'var']},
        {blankLine: 'always', prev: 'block', next: '*'},
    ],
    'brace-style': [
        'error',
        'stroustrup',
        {
            allowSingleLine: false,
        },
    ],
    'no-spaced-func': ['error'],
    'no-trailing-spaces': [
        'error',
        {
            skipBlankLines: false,
            ignoreComments: false,
        },
    ],
    'no-whitespace-before-property': ['error'],
    'object-property-newline': [
        'error',
        {
            allowAllPropertiesOnSameLine: true,
            allowMultiplePropertiesPerLine: false,
        },
    ],
    'no-mixed-spaces-and-tabs': ['error'],
    'no-multiple-empty-lines': [
        'error',
        {
            max: 1,
            maxBOF: 0,
            maxEOF: 0,
        },
    ],
    'key-spacing': [
        'error',
        {
            beforeColon: false,
            afterColon: true,
        },
    ],
    'keyword-spacing': [
        'error',
        {
            before: true,
            after: true,
            overrides: {
                return: {
                    after: true,
                },
                throw: {
                    after: true,
                },
                case: {
                    after: true,
                },
            },
        },
    ],
    // this rule is disabled, but configured in case anyone enables this rule.
    'line-comment-position': [
        'off',
        {
            position: 'above',
            ignorePattern: '',
            applyDefaultPatterns: true,
        },
    ],
    'lines-between-class-members': [
        'error',
        'always',
        {
            exceptAfterSingleLine: false,
        },
    ],
    'lines-around-directive': [
        'error',
        {
            before: 'always',
            after: 'always',
        },
    ],
    'newline-per-chained-call': [
        'error',
        {
            ignoreChainWithDepth: 4,
        },
    ],
    'function-call-argument-newline': ['error', 'consistent'],
    'func-call-spacing': ['error', 'never'],
    'function-paren-newline': ['error', 'multiline-arguments'],
    'comma-dangle': [
        'error',
        {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        },
    ],
    'comma-style': [
        'error',
        'last',
        {
            exceptions: {
                ArrayExpression: false,
                ArrayPattern: false,
                ArrowFunctionExpression: false,
                CallExpression: false,
                FunctionDeclaration: false,
                FunctionExpression: false,
                ImportDeclaration: false,
                ObjectExpression: false,
                ObjectPattern: false,
                VariableDeclaration: false,
                NewExpression: false,
            },
        },
    ],
    'comma-spacing': [
        'error',
        {
            before: false,
            after: true,
        },
    ],
    'computed-property-spacing': ['error', 'never'],
    'generator-star-spacing': [
        'error',
        {
            before: false,
            after: true,
        },
    ],
    'rest-spread-spacing': ['error', 'never'],
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': [
        'error',
        {
            ArrayExpression: 'consistent',
            ArrayPattern: {
                minItems: 3,
            },
        },
    ],
    'block-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-spacing': [
        'error',
        {
            before: true,
            after: true,
        },
    ],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': [
        'error',
        {
            allowKeywords: true,
            allowPattern: '',
            allowIndexSignaturePropertyAccess: true,
        },
    ],
    indent: [
        'error',
        // eslint-disable-next-line no-magic-numbers -- Indent of 4 spaces.
        4,
        {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            FunctionDeclaration: {
                parameters: 1,
                body: 1,
            },
            FunctionExpression: {
                parameters: 1,
                body: 1,
            },
            CallExpression: {
                arguments: 1,
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            ignoredNodes: [
                'JSXElement',
                'JSXElement > *',
                'JSXAttribute',
                'JSXIdentifier',
                'JSXNamespacedName',
                'JSXMemberExpression',
                'JSXSpreadAttribute',
                'JSXExpressionContainer',
                'JSXOpeningElement',
                'JSXClosingElement',
                'JSXFragment',
                'JSXOpeningFragment',
                'JSXClosingFragment',
                'JSXText',
                'JSXEmptyExpression',
                'JSXSpreadChild',
            ],
            ignoreComments: false,
            offsetTernaryExpressions: false,
        },
    ],
    '@typescript-eslint/indent': [
        'error',
        // eslint-disable-next-line no-magic-numbers -- Indent of 4 spaces.
        4,
        {
            MemberExpression: 1,
            SwitchCase: 1,
            ignoredNodes: [
                'FunctionExpression > .params[decorators.length > 0]',
                'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
                'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
            ],
            flatTernaryExpressions: false,
            offsetTernaryExpressions: false,
            ignoreComments: false,
        },
    ],
    quotes: 'off',
    '@typescript-eslint/quotes': [
        'error',
        'single',
        {
            avoidEscape: true,
            allowTemplateLiterals: true,
        },
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'linebreak-style': ['off', 'unix'],
    'object-curly-spacing': ['error', 'never'],
    'object-curly-newline': [
        'error',
        {
            consistent: true,
        },
    ],
    'operator-linebreak': ['error', 'after'],
    'sort-imports': 'off',
    'simple-import-sort/imports': [
        'error',
        {
            groups: [
                // Packages. `react` related packages come first.
                ['^react$', '^@nest', '^@?\\w'],
                // Internal packages.
                ['@common', '^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'],
                // Side effect imports.
                ['^\\u0000'],
                // Parent imports. Put `..` last.
                ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                // Other relative imports. Put same-folder imports and `.` last.
                ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                // Style imports.
                ['^.+\\.s?css$'],
            ],
        },
    ],
    'simple-import-sort/exports': 'error',
    'import/newline-after-import': 'error',
};

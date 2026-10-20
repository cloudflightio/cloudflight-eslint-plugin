import type {TSESLint} from '@typescript-eslint/utils';

export const formatRules: TSESLint.Linter.RulesRecord = {
    '@stylistic/max-len': [
        'error',
        {
            ignorePattern: '^(import|export) [^,]+ from',
            ignoreRegExpLiterals: true,
            ignoreTemplateLiterals: true,
            ignoreComments: true,
            code: 280,
        },
    ],
    '@stylistic/eol-last': ['error', 'always'],
    '@stylistic/no-multi-spaces': [
        'error',
        {
            ignoreEOLComments: false,
        },
    ],
    '@stylistic/dot-location': ['error', 'property'],
    '@stylistic/template-tag-spacing': ['error', 'never'],
    '@stylistic/template-curly-spacing': ['error', 'never'],
    '@stylistic/switch-colon-spacing': [
        'error',
        {
            after: true,
            before: false,
        },
    ],
    '@stylistic/spaced-comment': [
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
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/space-unary-ops': [
        'error',
        {
            words: true,
            nonwords: false,
            overrides: {},
        },
    ],
    '@stylistic/space-in-parens': ['error', 'never'],
    '@stylistic/space-before-blocks': 'error',
    '@stylistic/space-before-function-paren': [
        'error',
        {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        },
    ],
    '@stylistic/semi-spacing': [
        'error',
        {
            before: false,
            after: true,
        },
    ],
    '@stylistic/padded-blocks': [
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
    '@stylistic/padding-line-between-statements': [
        'error',
        {blankLine: 'always', prev: '*', next: 'return'},
        {blankLine: 'always', prev: 'const', next: '*'},
        {blankLine: 'any', prev: 'const', next: ['const', 'let', 'var']},
        {blankLine: 'always', prev: 'block', next: '*'},
    ],
    '@stylistic/brace-style': [
        'error',
        'stroustrup',
        {
            allowSingleLine: false,
        },
    ],
    '@stylistic/no-trailing-spaces': [
        'error',
        {
            skipBlankLines: false,
            ignoreComments: false,
        },
    ],
    '@stylistic/no-whitespace-before-property': 'error',
    '@stylistic/object-property-newline': [
        'error',
        {
            allowAllPropertiesOnSameLine: true,
        },
    ],
    '@stylistic/no-mixed-spaces-and-tabs': 'error',
    '@stylistic/no-multiple-empty-lines': [
        'error',
        {
            max: 1,
            maxBOF: 0,
            maxEOF: 0,
        },
    ],
    '@stylistic/key-spacing': [
        'error',
        {
            beforeColon: false,
            afterColon: true,
        },
    ],
    '@stylistic/keyword-spacing': [
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
    '@stylistic/line-comment-position': [
        'off',
        {
            position: 'above',
            ignorePattern: '',
            applyDefaultPatterns: true,
        },
    ],
    '@stylistic/lines-between-class-members': [
        'error',
        'always',
        {
            exceptAfterSingleLine: false,
        },
    ],
    '@stylistic/newline-per-chained-call': [
        'error',
        {
            ignoreChainWithDepth: 4,
        },
    ],
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/function-call-spacing': ['error', 'never'],
    '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
    '@stylistic/comma-dangle': [
        'error',
        {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
            enums: 'always-multiline',
        },
    ],
    '@stylistic/comma-style': [
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
    '@stylistic/comma-spacing': [
        'error',
        {
            before: false,
            after: true,
        },
    ],
    '@stylistic/computed-property-spacing': ['error', 'never'],
    '@stylistic/generator-star-spacing': [
        'error',
        {
            before: false,
            after: true,
        },
    ],
    '@stylistic/rest-spread-spacing': ['error', 'never'],
    '@stylistic/array-bracket-newline': ['error', 'consistent'],
    '@stylistic/array-bracket-spacing': ['error', 'never'],
    '@stylistic/array-element-newline': [
        'error',
        {
            ArrayExpression: 'consistent',
            ArrayPattern: {
                minItems: 3,
            },
        },
    ],
    '@stylistic/block-spacing': ['error', 'always'],
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/arrow-spacing': [
        'error',
        {
            before: true,
            after: true,
        },
    ],
    '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
    '@stylistic/indent': [
        'error',
        // eslint-disable-next-line no-magic-numbers
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
            ignoreComments: false,
            offsetTernaryExpressions: false,
            MemberExpression: 1,
        },
    ],
    '@stylistic/quotes': [
        'error',
        'single',
        {
            avoidEscape: true,
            allowTemplateLiterals: 'always',
        },
    ],
    '@stylistic/jsx-quotes': ['error', 'prefer-double'],
    '@stylistic/linebreak-style': ['off', 'unix'],
    '@stylistic/object-curly-spacing': ['error', 'never'],
    '@stylistic/object-curly-newline': [
        'error',
        {
            consistent: true,
        },
    ],
    // ? and : start the line, in ternaries and in conditional types, like prettier
    '@stylistic/operator-linebreak': ['error', 'after', {overrides: {'?': 'before', ':': 'before'}}],
    // a polyfill or stylesheet import keeps its place, an import that would have to move across it is reported
    'import-x/order': [
        'error',
        {
            'groups': ['type', ['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
            'newlines-between': 'always',
            'alphabetize': {order: 'asc', caseInsensitive: true},
        },
    ],
    'perfectionist/sort-exports': [
        'error',
        {
            type: 'natural',
            order: 'asc',
        },
    ],
    'perfectionist/sort-named-imports': [
        'error',
        {
            type: 'natural',
            order: 'asc',
        },
    ],
    'perfectionist/sort-named-exports': [
        'error',
        {
            type: 'natural',
            order: 'asc',
        },
    ],
    'import-x/newline-after-import': 'error',
    '@stylistic/member-delimiter-style': [
        'error',
        {multiline: {delimiter: 'semi', requireLast: true}, singleline: {delimiter: 'semi', requireLast: false}},
    ],
    '@stylistic/semi': 'error',
    '@stylistic/no-extra-semi': 'error',
    '@stylistic/type-annotation-spacing': 'error',
    '@stylistic/one-var-declaration-per-line': ['error', 'always'],
};

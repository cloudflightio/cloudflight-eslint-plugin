import type {TSESLint} from '@typescript-eslint/utils';

const pluginPrefix = '@stylistic';

export const formatEslintRules: TSESLint.Linter.RulesRecord = {
    [`${pluginPrefix}/max-len`]: [
        'error',
        {
            ignorePattern: '^(import|export) [^,]+ from',
            ignoreRegExpLiterals: true,
            ignoreTemplateLiterals: true,
            ignoreComments: true,
            code: 280,
        },
    ],
    [`${pluginPrefix}/eol-last`]: ['error', 'always'],
    [`${pluginPrefix}/no-multi-spaces`]: [
        'error',
        {
            ignoreEOLComments: false,
        },
    ],
    [`${pluginPrefix}/dot-location`]: ['error', 'property'],
    [`${pluginPrefix}/template-tag-spacing`]: ['error', 'never'],
    [`${pluginPrefix}/template-curly-spacing`]: ['error', 'never'],
    [`${pluginPrefix}/switch-colon-spacing`]: [
        'error',
        {
            after: true,
            before: false,
        },
    ],
    [`${pluginPrefix}/spaced-comment`]: [
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
    [`${pluginPrefix}/space-infix-ops`]: ['error'],
    [`${pluginPrefix}/space-unary-ops`]: [
        'error',
        {
            words: true,
            nonwords: false,
            overrides: {},
        },
    ],
    [`${pluginPrefix}/space-in-parens`]: ['error', 'never'],
    [`${pluginPrefix}/space-before-blocks`]: ['error'],
    [`${pluginPrefix}/space-before-function-paren`]: [
        'error',
        {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        },
    ],
    [`${pluginPrefix}/semi-spacing`]: [
        'error',
        {
            before: false,
            after: true,
        },
    ],
    [`${pluginPrefix}/padded-blocks`]: [
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
    [`${pluginPrefix}/padding-line-between-statements`]: [
        'error',
        {blankLine: 'always', prev: '*', next: 'return'},
        {blankLine: 'always', prev: 'const', next: '*'},
        {blankLine: 'any', prev: 'const', next: ['const', 'let', 'var']},
        {blankLine: 'always', prev: 'block', next: '*'},
    ],
    [`${pluginPrefix}/brace-style`]: [
        'error',
        'stroustrup',
        {
            allowSingleLine: false,
        },
    ],
    [`${pluginPrefix}/no-trailing-spaces`]: [
        'error',
        {
            skipBlankLines: false,
            ignoreComments: false,
        },
    ],
    [`${pluginPrefix}/no-whitespace-before-property`]: ['error'],
    [`${pluginPrefix}/object-property-newline`]: [
        'error',
        {
            allowAllPropertiesOnSameLine: true,
        },
    ],
    [`${pluginPrefix}/no-mixed-spaces-and-tabs`]: ['error'],
    [`${pluginPrefix}/no-multiple-empty-lines`]: [
        'error',
        {
            max: 1,
            maxBOF: 0,
            maxEOF: 0,
        },
    ],
    [`${pluginPrefix}/key-spacing`]: [
        'error',
        {
            beforeColon: false,
            afterColon: true,
        },
    ],
    [`${pluginPrefix}/keyword-spacing`]: [
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
    [`${pluginPrefix}/line-comment-position`]: [
        'off',
        {
            position: 'above',
            ignorePattern: '',
            applyDefaultPatterns: true,
        },
    ],
    [`${pluginPrefix}/lines-between-class-members`]: [
        'error',
        'always',
        {
            exceptAfterSingleLine: false,
        },
    ],
    [`${pluginPrefix}/newline-per-chained-call`]: [
        'error',
        {
            ignoreChainWithDepth: 4,
        },
    ],
    [`${pluginPrefix}/function-call-argument-newline`]: ['error', 'consistent'],
    [`${pluginPrefix}/function-call-spacing`]: ['error', 'never'],
    [`${pluginPrefix}/function-paren-newline`]: ['error', 'multiline-arguments'],
    [`${pluginPrefix}/comma-dangle`]: [
        'error',
        {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        },
    ],
    [`${pluginPrefix}/comma-style`]: [
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
    [`${pluginPrefix}/comma-spacing`]: [
        'error',
        {
            before: false,
            after: true,
        },
    ],
    [`${pluginPrefix}/computed-property-spacing`]: ['error', 'never'],
    [`${pluginPrefix}/generator-star-spacing`]: [
        'error',
        {
            before: false,
            after: true,
        },
    ],
    [`${pluginPrefix}/rest-spread-spacing`]: ['error', 'never'],
    [`${pluginPrefix}/array-bracket-newline`]: ['error', 'consistent'],
    [`${pluginPrefix}/array-bracket-spacing`]: ['error', 'never'],
    [`${pluginPrefix}/array-element-newline`]: [
        'error',
        {
            ArrayExpression: 'consistent',
            ArrayPattern: {
                minItems: 3,
            },
        },
    ],
    [`${pluginPrefix}/block-spacing`]: ['error', 'always'],
    [`${pluginPrefix}/arrow-parens`]: ['error', 'always'],
    [`${pluginPrefix}/arrow-spacing`]: [
        'error',
        {
            before: true,
            after: true,
        },
    ],
    [`${pluginPrefix}/implicit-arrow-linebreak`]: ['error', 'beside'],
    [`${pluginPrefix}/indent`]: [
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
                'FunctionExpression > .params[decorators.length > 0]',
                'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
                'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
            ],
            ignoreComments: false,
            offsetTernaryExpressions: false,
            MemberExpression: 1,
        },
    ],
    [`${pluginPrefix}/quotes`]: [
        'error',
        'single',
        {
            avoidEscape: true,
            allowTemplateLiterals: 'always',
        },
    ],
    [`${pluginPrefix}/jsx-quotes`]: ['error', 'prefer-double'],
    [`${pluginPrefix}/linebreak-style`]: ['off', 'unix'],
    [`${pluginPrefix}/object-curly-spacing`]: ['error', 'never'],
    [`${pluginPrefix}/object-curly-newline`]: [
        'error',
        {
            consistent: true,
        },
    ],
    [`${pluginPrefix}/operator-linebreak`]: ['error', 'after'],
    'perfectionist/sort-imports': [
        'error',
        {
            type: 'natural',
            order: 'asc',
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
    [`${pluginPrefix}/member-delimiter-style`]: [
        'error',
        {multiline: {delimiter: 'semi', requireLast: true}, singleline: {delimiter: 'semi', requireLast: false}},
    ],
    [`${pluginPrefix}/semi`]: ['error'],
    [`${pluginPrefix}/no-extra-semi`]: ['error'],
    [`${pluginPrefix}/type-annotation-spacing`]: ['error'],
};

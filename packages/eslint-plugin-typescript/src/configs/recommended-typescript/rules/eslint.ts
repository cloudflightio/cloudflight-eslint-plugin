import { Linter } from 'eslint';

export const eslintRules: Linter.RulesRecord = {
    complexity: ['error', { max: 20 }],
    curly: ['error'],
    'eol-last': ['error'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'max-classes-per-file': ['error', 1],
    'max-len': [
        'error',
        {
            ignorePattern: '^(import|export) [^,]+ from',
            ignoreRegExpLiterals: true,
            ignoreTemplateLiterals: true,
            code: 140,
        },
    ],
    'new-parens': ['error'],
    'no-async-promise-executor': ['error'],
    'no-bitwise': ['error'],
    'no-console': ['error'],
    'no-debugger': ['error'],
    'no-dupe-else-if': ['error'],
    'no-duplicate-case': ['error'],
    'no-duplicate-imports': ['error'],
    'no-empty': ['error'],
    'no-eval': ['error'],
    'no-ex-assign': ['error'],
    'no-extra-semi': ['error'],
    'no-fallthrough': ['error'],
    'no-invalid-regexp': ['error'],
    'no-misleading-character-class': ['error'],
    'no-new-func': ['error'],
    'no-param-reassign': ['error'],
    'no-promise-executor-return': ['error'],
    'no-self-assign': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-trailing-spaces': ['error'],
    'no-unsafe-finally': ['error'],
    'no-unsafe-negation': ['error'],
    'no-unused-labels': ['error'],
    'no-useless-catch': ['error'],
    'no-var': ['error'],
    'object-shorthand': ['error'],
    'prefer-const': ['error'],
    'prefer-promise-reject-errors': ['error'],
    'quote-props': ['error', 'as-needed'],
    radix: ['error'],
    'require-yield': ['error'],
    'use-isnan': ['error'],
    'func-style': ['error', 'declaration'],
    'no-restricted-syntax': [
        'error',
        {
            selector: 'LabeledStatement',
            message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        },
        {
            selector: 'WithStatement',
            message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        },
    ],
    'no-constructor-return': ['error'],
    'no-magic-numbers': [
        'error',
        {
            ignore: [
                -1, // allow findIndex negative result
                0, // allow initial number value
                1, // allow typical increment
                2, // allow typical divide by half
                10, // allow typical parseInt radix
                1000, // allow typical timestamp divider
            ],
            ignoreDefaultValues: true,
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false,
        },
    ],
};

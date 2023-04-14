import { Linter } from 'eslint';

const pluginPrefix = '@typescript-eslint';

export const typescriptEslintRules: Linter.RulesRecord = {
    [`${pluginPrefix}/adjacent-overload-signatures`]: 'error',
    [`${pluginPrefix}/array-type`]: ['error', { default: 'array' }],
    [`${pluginPrefix}/await-thenable`]: 'error',
    [`${pluginPrefix}/ban-ts-comment`]: ['error'],
    [`${pluginPrefix}/ban-types`]: [
        'error',
        {
            types: {
                String: { message: 'Use string instead', fixWith: 'string' },
                Boolean: { message: 'Use boolean instead', fixWith: 'boolean' },
                Number: { message: 'Use number instead', fixWith: 'number' },
                Symbol: { message: 'Use symbol instead', fixWith: 'symbol' },
                Function: {
                    message:
                        // eslint-disable-next-line max-len
                        'The `Function` type accepts any function-like value.\nIt provides no type safety when calling the function, which can be a common source of bugs.\nIt also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.\nIf you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
                },
                Object: {
                    message:
                        // eslint-disable-next-line max-len
                        'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.\n- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.\n- If you want a type meaning "any value", you probably want `unknown` instead.',
                },
                '{}': {
                    message:
                        // eslint-disable-next-line max-len
                        '`{}` actually means "any non-nullish value".\n- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.\n- If you want a type meaning "any value", you probably want `unknown` instead.',
                },
            },
        },
    ],
    [`default-param-last`]: 'off',
    [`${pluginPrefix}/default-param-last`]: ['error'],
    [`${pluginPrefix}/explicit-function-return-type`]: ['error', { allowExpressions: true }],
    [`${pluginPrefix}/explicit-member-accessibility`]: ['error', { accessibility: 'explicit' }],
    [`${pluginPrefix}/member-delimiter-style`]: [
        'error',
        { multiline: { delimiter: 'semi', requireLast: true }, singleline: { delimiter: 'semi', requireLast: false } },
    ],
    [`${pluginPrefix}/member-ordering`]: [
        'error',
        { default: ['static-field', 'field', 'signature', 'constructor', 'static-method', 'method'] },
    ],
    [`${pluginPrefix}/no-array-constructor`]: ['error'],
    [`no-empty-function`]: 'off',
    [`${pluginPrefix}/no-empty-function`]: ['error'],
    [`${pluginPrefix}/no-empty-interface`]: ['error'],
    [`${pluginPrefix}/no-explicit-any`]: ['error'],
    [`${pluginPrefix}/no-extra-non-null-assertion`]: ['error'],
    [`${pluginPrefix}/no-floating-promises`]: ['error', { ignoreVoid: true }],
    [`${pluginPrefix}/no-for-in-array`]: ['error'],
    [`${pluginPrefix}/no-implicit-any-catch`]: ['error'],
    [`${pluginPrefix}/no-inferrable-types`]: ['error', { ignoreParameters: true }],
    [`no-invalid-this`]: 'off',
    [`${pluginPrefix}/no-invalid-this`]: ['error'],
    [`${pluginPrefix}/no-invalid-void-type`]: ['error', { allowInGenericTypeArguments: true }],
    [`${pluginPrefix}/no-meaningless-void-operator`]: ['error'],
    [`${pluginPrefix}/no-misused-new`]: ['error'],
    [`${pluginPrefix}/no-misused-promises`]: ['error'],
    [`${pluginPrefix}/no-namespace`]: ['error'],
    [`${pluginPrefix}/no-non-null-assertion`]: ['error'],
    [`no-restricted-imports`]: 'off',
    [`${pluginPrefix}/no-restricted-imports`]: [
        'error',
        { name: 'rxjs/Rx', message: "Please import directly from 'rxjs' instead" },
    ],
    [`no-shadow`]: 'off',
    [`${pluginPrefix}/no-shadow`]: ['error'],
    [`no-throw-literal`]: 'off',
    [`${pluginPrefix}/no-throw-literal`]: ['error'],
    [`${pluginPrefix}/no-unnecessary-condition`]: ['off', { allowConstantLoopConditions: true }],
    [`${pluginPrefix}/no-unnecessary-type-assertion`]: ['error'],
    [`${pluginPrefix}/no-unnecessary-type-constraint`]: ['error'],
    [`no-unused-vars`]: 'off',
    [`${pluginPrefix}/no-unused-vars`]: ['error', { args: 'none', ignoreRestSiblings: true }],
    [`${pluginPrefix}/no-var-requires`]: ['error'],
    [`${pluginPrefix}/prefer-as-const`]: ['error'],
    [`${pluginPrefix}/prefer-for-of`]: ['error'],
    [`${pluginPrefix}/prefer-function-type`]: ['error'],
    [`${pluginPrefix}/prefer-includes`]: ['error'],
    [`${pluginPrefix}/prefer-nullish-coalescing`]: ['error'],
    [`${pluginPrefix}/prefer-optional-chain`]: ['error'],
    [`${pluginPrefix}/prefer-reduce-type-parameter`]: ['error'],
    [`${pluginPrefix}/prefer-string-starts-ends-with`]: ['error'],
    [`${pluginPrefix}/prefer-ts-expect-error`]: ['error'],
    [`${pluginPrefix}/promise-function-async`]: ['error'],
    [`quotes`]: 'off',
    [`${pluginPrefix}/quotes`]: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    [`${pluginPrefix}/require-array-sort-compare`]: ['error'],
    [`${pluginPrefix}/restrict-plus-operands`]: ['error', { checkCompoundAssignments: true }],
    [`semi`]: 'off',
    [`${pluginPrefix}/semi`]: ['error'],
    [`${pluginPrefix}/strict-boolean-expressions`]: ['error'],
    [`${pluginPrefix}/switch-exhaustiveness-check`]: ['error'],
    [`${pluginPrefix}/triple-slash-reference`]: ['error'],
    [`${pluginPrefix}/type-annotation-spacing`]: ['error'],
    [`${pluginPrefix}/unbound-method`]: ['error'],
    [`${pluginPrefix}/unified-signatures`]: ['error'],
};

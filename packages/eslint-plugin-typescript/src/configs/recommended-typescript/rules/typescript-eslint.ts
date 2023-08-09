import type {Linter} from 'eslint';

const pluginPrefix = '@typescript-eslint';

export const typescriptEslintRules: Linter.RulesRecord = {
    [`${pluginPrefix}/ban-types`]: [
        'error',
        {
            types: {
                String: {message: 'Use string instead', fixWith: 'string'},
                Boolean: {message: 'Use boolean instead', fixWith: 'boolean'},
                Number: {message: 'Use number instead', fixWith: 'number'},
                Symbol: {message: 'Use symbol instead', fixWith: 'symbol'},
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
    // we do not need to care about js codebases, they are outside our scope
    [`${pluginPrefix}/consistent-generic-constructors`]: 'off',
    [`${pluginPrefix}/consistent-type-assertions`]: ['error', {assertionStyle: 'never'}],
    'default-param-last': 'off',
    [`${pluginPrefix}/default-param-last`]: ['error'],
    [`${pluginPrefix}/explicit-function-return-type`]: ['error', {allowExpressions: true}],
    [`${pluginPrefix}/explicit-member-accessibility`]: ['error', {accessibility: 'explicit'}],
    [`${pluginPrefix}/member-delimiter-style`]: [
        'error',
        {multiline: {delimiter: 'semi', requireLast: true}, singleline: {delimiter: 'semi', requireLast: false}},
    ],
    [`${pluginPrefix}/member-ordering`]: [
        'error',
        {default: ['static-field', 'field', 'signature', 'constructor', 'static-method', 'method']},
    ],
    // this rule prevents oneliner functions, which are very useful in component templates
    [`${pluginPrefix}/no-confusing-void-expression`]: 'off',
    [`${pluginPrefix}/no-floating-promises`]: ['error', {ignoreVoid: true}],
    [`${pluginPrefix}/no-inferrable-types`]: ['error', {ignoreParameters: true}],
    'no-invalid-this': 'off',
    [`${pluginPrefix}/no-invalid-this`]: ['error'],
    [`${pluginPrefix}/no-invalid-void-type`]: ['error', {allowInGenericTypeArguments: true}],
    'no-restricted-imports': 'off',
    [`${pluginPrefix}/no-restricted-imports`]: ['error', {name: 'rxjs/Rx', message: "Please import directly from 'rxjs' instead"}],
    'no-shadow': 'off',
    [`${pluginPrefix}/no-shadow`]: ['error'],
    // typescript by default does not add undefined to the type of index-accessed properties
    // because of that this rule incorrectly points correct checks out as error.
    // typescript offers the compiler setting 'noPropertyAccessFromIndexSignature' which would solve this issue,
    // but it is not perfect. It also adds 'undefined' to the type even if there was a bounds-check already.
    [`${pluginPrefix}/no-unnecessary-condition`]: ['off', {allowConstantLoopConditions: true}],
    // this rule makes it hard to work with the default functionalities of js itself, thus disabled
    [`${pluginPrefix}/no-unsafe-argument`]: 'off',
    // enums can be used as a holder of constants, working
    // with external APIs can be painful if this is not allowed
    [`${pluginPrefix}/no-unsafe-enum-comparison`]: 'off',
    'no-unused-vars': 'off',
    [`${pluginPrefix}/no-unused-vars`]: ['error', {args: 'none', ignoreRestSiblings: true}],
    [`${pluginPrefix}/promise-function-async`]: ['error'],
    quotes: 'off',
    [`${pluginPrefix}/quotes`]: ['error', 'single', {avoidEscape: true, allowTemplateLiterals: true}],
    [`${pluginPrefix}/require-array-sort-compare`]: ['error'],
    semi: 'off',
    [`${pluginPrefix}/semi`]: ['error'],
    'no-extra-semi': 'off',
    [`${pluginPrefix}/no-extra-semi`]: ['error'],
    [`${pluginPrefix}/strict-boolean-expressions`]: ['error'],
    [`${pluginPrefix}/switch-exhaustiveness-check`]: ['error'],
    [`${pluginPrefix}/type-annotation-spacing`]: ['error'],
};

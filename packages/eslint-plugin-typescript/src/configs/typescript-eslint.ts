import {TSESLint} from '@typescript-eslint/utils';

const pluginPrefix = '@typescript-eslint';

export const typescriptEslintRules: TSESLint.Linter.RulesRecord = {
    // we do not need to care about js codebases, they are outside our scope
    [`${pluginPrefix}/consistent-generic-constructors`]: 'off',
    [`${pluginPrefix}/consistent-type-assertions`]: ['error', {assertionStyle: 'never'}],
    'default-param-last': 'off',
    [`${pluginPrefix}/default-param-last`]: ['error'],
    [`${pluginPrefix}/explicit-function-return-type`]: ['error', {allowExpressions: true}],
    [`${pluginPrefix}/explicit-member-accessibility`]: ['error', {accessibility: 'explicit'}],
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
    [`${pluginPrefix}/no-invalid-void-type`]: ['error', {allowInGenericTypeArguments: true, allowAsThisParameter: true}],
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
    [`${pluginPrefix}/no-unsafe-unary-minus`]: 'error',
    'no-unused-vars': 'off',
    [`${pluginPrefix}/no-unused-vars`]: ['error', {args: 'none', ignoreRestSiblings: true}],
    [`${pluginPrefix}/promise-function-async`]: ['error'],
    [`${pluginPrefix}/require-array-sort-compare`]: ['error'],
    [`${pluginPrefix}/require-await`]: 'error',
    [`${pluginPrefix}/strict-boolean-expressions`]: ['error'],
    [`${pluginPrefix}/switch-exhaustiveness-check`]: ['error'],
};

export const typescriptEslintRulesDisableTypeChecked: TSESLint.Linter.RulesRecord = {
    [`${pluginPrefix}/explicit-function-return-type`]: 'off',
};

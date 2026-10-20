import type {TSESLint} from '@typescript-eslint/utils';

import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export const typescriptEslintRules: TSESLint.Linter.RulesRecord = {
    // turned on in configs/eslint.ts, the presets run the typed replacements and both would report the same problem
    'no-implied-eval': 'off',
    'no-throw-literal': 'off',
    'no-unused-expressions': 'off',
    'prefer-promise-reject-errors': 'off',
    // same options as the core rule in configs/eslint.ts
    '@typescript-eslint/no-unused-expressions': [
        'error',
        {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false,
            enforceForJSX: true,
        },
    ],
    // generic constructor style is not enforced, both `new Map<string, number>()`
    // and `const map: Map<string, number> = new Map()` are fine
    '@typescript-eslint/consistent-generic-constructors': 'off',
    '@typescript-eslint/consistent-type-assertions': ['error', {assertionStyle: 'never'}],
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/explicit-function-return-type': ['error', {allowExpressions: true}],
    '@typescript-eslint/explicit-member-accessibility': ['error', {accessibility: 'explicit'}],
    '@typescript-eslint/member-ordering': [
        'error',
        {default: ['static-field', 'field', 'signature', 'constructor', 'static-method', 'method']},
    ],
    // this rule prevents oneliner functions, which are very useful in component templates
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-floating-promises': ['error', {ignoreVoid: true}],
    '@typescript-eslint/no-inferrable-types': ['error', {ignoreParameters: true}],
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-invalid-void-type': ['error', {allowInGenericTypeArguments: true, allowAsThisParameter: true}],
    'no-restricted-imports': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    // typescript by default does not add undefined to the type of index-accessed properties,
    // because of that this rule incorrectly points correct checks out as error.
    // the compiler setting 'noUncheckedIndexedAccess' would solve this, but it is not perfect:
    // it also adds 'undefined' to the type even if there was a bounds-check already.
    '@typescript-eslint/no-unnecessary-condition': ['off', {allowConstantLoopConditions: true}],
    // this rule makes it hard to work with the default functionalities of js itself, thus disabled
    '@typescript-eslint/no-unsafe-argument': 'off',
    // enums can be used as a holder of constants, working
    // with external APIs can be painful if this is not allowed
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',
    '@typescript-eslint/no-unsafe-unary-minus': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {args: 'none', ignoreRestSiblings: true}],
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    // its fix writes value!, which no-non-null-assertion forbids
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
};

function restoreCompilerCoveredRules(): TSESLint.Linter.RulesRecord {
    const recommended = new Map(Object.entries(pluginJs.configs.recommended.rules));

    return Object.fromEntries(Object.entries(tseslint.configs.eslintRecommended.rules ?? {})
        .filter(([, severity]) => severity === 'off')
        .flatMap(([rule]) => {
            const entry = recommended.get(rule);

            return entry === undefined ? [] : [[rule, entry] as const];
        }));
}

// typescript-eslint turns these core rules off because the compiler reports the same problems,
// javascript files are linted without the compiler and get the recommended severities back
export const javascriptRecommendedRules: TSESLint.Linter.RulesRecord = restoreCompilerCoveredRules();

export const typescriptEslintDisableTypeCheckedRules: TSESLint.Linter.RulesRecord = {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    // javascript files have no type information, the core rules run instead of the typed replacements
    'dot-notation': 'error',
    'no-implied-eval': 'error',
    'no-throw-literal': 'error',
    'prefer-promise-reject-errors': 'error',
    'require-await': 'error',
};

import {TSESLint} from '@typescript-eslint/utils';

// runs with --fix in the pre-commit hook, only fixable rules belong here
export const reactFormatRules: TSESLint.Linter.RulesRecord = {
    '@stylistic/jsx-closing-bracket-location': 'error',
    '@stylistic/jsx-closing-tag-location': 'error',
    '@stylistic/jsx-curly-newline': ['error', 'consistent'],
    '@stylistic/jsx-curly-spacing': ['error', {when: 'never', children: true}],
    '@stylistic/jsx-equals-spacing': ['error', 'never'],
    '@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    // eslint-disable-next-line no-magic-numbers
    '@stylistic/jsx-indent-props': ['error', 4],
    '@stylistic/jsx-max-props-per-line': ['error', {maximum: 1, when: 'multiline'}],
    '@stylistic/jsx-tag-spacing': [
        'error',
        {
            beforeSelfClosing: 'always',
            closingSlash: 'never',
            afterOpening: 'never',
            beforeClosing: 'never',
        },
    ],
    // multiline jsx after && and ?: goes into parentheses, otherwise indent and the closing location rules fix against each other
    '@stylistic/jsx-wrap-multilines': [
        'error',
        {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            return: 'parens-new-line',
            arrow: 'parens-new-line',
            condition: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'ignore',
        },
    ],
};

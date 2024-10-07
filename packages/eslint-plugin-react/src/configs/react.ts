import {TSESLint} from '@typescript-eslint/utils';

export const reactRules: TSESLint.Linter.RulesRecord = {
    'react/static-property-placement': ['error', 'static public field'],
    'react/jsx-fragments': ['error', 'element'],
    'react/sort-comp': [
        1,
        {
            order: [
                'type-annotations',
                'static-variables',
                'instance-variables',
                'lifecycle',
                'static-methods',
                'instance-methods',
                'everything-else',
                'render',
            ],
        },
    ],
    'react/no-array-index-key': ['error'],
};

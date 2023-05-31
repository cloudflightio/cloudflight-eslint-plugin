import {Linter} from 'eslint';

export const RecommendedConfig: Linter.BaseConfig = {
    extends: [
        'plugin:@cloudflight/typescript/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    rules: {
        'react/static-property-placement': ['error', 'static public field'],
        'react/jsx-fragments': ['error', 'element'],
        'react/sort-comp': [
            1,
            {
                order: [
                    'type-annotations',
                    'static-variables',
                    'static-methods',
                    'instance-variables',
                    'lifecycle',
                    'instance-methods',
                    'everything-else',
                    'render',
                ],
            },
        ],
        'react/no-array-index-key': ['error'],
    },
};

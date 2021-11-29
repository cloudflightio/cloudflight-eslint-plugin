import type { RuleDefinition } from '../../../rule-definition';

export const spaceBeforeFunctionParen: RuleDefinition = {
    name: 'space-before-function-paren',
    options: [
        'error',
        {
            anonymous: 'never',
            asyncArrow: 'always',
            named: 'never',
        },
    ],
};

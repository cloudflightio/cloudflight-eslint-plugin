import type { RuleDefinition } from '../../../rule-definition';

export const arrayType: RuleDefinition = {
    name: 'array-type',
    options: [
        'error',
        {
            default: 'array',
        },
    ],
};

import type { RuleDefinition } from '../../../rule-definition';

export const eqeqeq: RuleDefinition = {
    name: 'eqeqeq',
    options: [
        'error',
        {
            allowNullOrUndefined: true,
        },
    ],
};

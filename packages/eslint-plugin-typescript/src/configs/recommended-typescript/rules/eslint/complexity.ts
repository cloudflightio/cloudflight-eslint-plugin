import type { RuleDefinition } from '../../../rule-definition';

export const complexity: RuleDefinition = {
    name: 'complexity',
    options: [
        'error',
        {
            max: 20,
        },
    ],
};

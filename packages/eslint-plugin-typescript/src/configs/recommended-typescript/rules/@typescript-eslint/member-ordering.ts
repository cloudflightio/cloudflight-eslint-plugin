import type { RuleDefinition } from '../../../rule-definition';

export const memberOrdering: RuleDefinition = {
    name: 'member-ordering',
    options: [
        'error',
        {
            default: ['static-field', 'field', 'signature', 'constructor', 'static-method', 'method'],
        },
    ],
};

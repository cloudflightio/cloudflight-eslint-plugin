import type { RuleDefinition } from '../../../rule-definition';

export const explicitMemberAccessibility: RuleDefinition = {
    name: 'explicit-member-accessibility',
    options: [
        'error',
        {
            accessibility: 'explicit',
        },
    ],
};

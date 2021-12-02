import type { RuleDefinition } from '../../../rule-definition';

export const eqeqeq: RuleDefinition = {
    name: 'eqeqeq',
    options: [
        'off', // disable it for now since it does not work correctly
        {
            allowNullOrUndefined: true,
        },
    ],
};

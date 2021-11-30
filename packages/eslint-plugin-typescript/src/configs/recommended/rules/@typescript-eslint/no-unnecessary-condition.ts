import type { RuleDefinition } from '../../../rule-definition';

export const noUnnecessaryCondition: RuleDefinition = {
    name: 'no-unnecessary-condition',
    options: [
        'error',
        {
            allowConstantLoopConditions: true,
        },
    ],
};

import type { RuleDefinition } from '../../../rule-definition';

export const noInferrableTypes: RuleDefinition = {
    name: 'no-inferrable-types',
    options: [
        'error',
        {
            ignoreParameters: true,
        },
    ],
};

import type { RuleDefinition } from '../../../rule-definition';

export const explicitFunctionReturnType: RuleDefinition = {
    name: 'explicit-function-return-type',
    options: [
        'error',
        {
            allowExpressions: true,
        },
    ],
};

import type { RuleDefinition } from '../../../rule-definition';

export const noInvalidVoidType: RuleDefinition = {
    name: 'no-invalid-void-type',
    options: [
        'error',
        {
            allowInGenericTypeArguments: true,
        },
    ],
};

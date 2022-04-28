import type { RuleDefinition } from '../../../rule-definition';

export const noMisusedPromises: RuleDefinition = {
    name: 'no-misused-promises',
    options: [
        'error',
        {
            checksConditionals: true,
            checksVoidReturn: true,
        },
    ],
};

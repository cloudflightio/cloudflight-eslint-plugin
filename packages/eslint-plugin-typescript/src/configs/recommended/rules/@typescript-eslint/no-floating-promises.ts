import type { RuleDefinition } from '../../../rule-definition';

export const noFloatingPromises: RuleDefinition = {
    name: 'no-floating-promises',
    options: [
        'error',
        {
            ignoreVoid: true,
        },
    ],
};

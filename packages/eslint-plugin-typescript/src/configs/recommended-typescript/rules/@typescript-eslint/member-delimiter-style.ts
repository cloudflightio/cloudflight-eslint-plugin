import type { RuleDefinition } from '../../../rule-definition';

export const memberDelimiterStyle: RuleDefinition = {
    name: 'member-delimiter-style',
    options: [
        'error',
        {
            multiline: {
                delimiter: 'semi',
                requireLast: true,
            },
            singleline: {
                delimiter: 'semi',
                requireLast: false,
            },
        },
    ],
};

import type { RuleDefinition } from '../../../rule-definition';

export const quotes: RuleDefinition = {
    name: 'quotes',
    options: [
        'error',
        'single',
        {
            avoidEscape: true,
            allowTemplateLiterals: true,
        },
    ],
};

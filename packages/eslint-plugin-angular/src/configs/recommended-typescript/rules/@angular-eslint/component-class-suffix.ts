import type { RuleDefinition } from '../../../rule-definition';

export const componentClassSuffix: RuleDefinition = {
    name: 'component-class-suffix',
    options: [
        'error',
        {
            suffixes: ['Component', 'Page'],
        },
    ],
};

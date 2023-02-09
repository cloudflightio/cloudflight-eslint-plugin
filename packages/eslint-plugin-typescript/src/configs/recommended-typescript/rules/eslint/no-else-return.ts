import type { RuleDefinition } from '../../../rule-definition';

export const noElseReturn: RuleDefinition = {
    name: 'no-else-return',
    options: ['error', { allowElseIf: true }],
};

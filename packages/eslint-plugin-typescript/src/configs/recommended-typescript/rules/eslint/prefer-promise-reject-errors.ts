import type { RuleDefinition } from '../../../rule-definition';

export const preferPromiseRejectErrors: RuleDefinition = {
    name: 'prefer-promise-reject-errors',
    options: ['error'],
};

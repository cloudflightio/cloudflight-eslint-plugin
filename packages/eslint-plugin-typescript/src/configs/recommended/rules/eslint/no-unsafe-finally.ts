import type { RuleDefinition } from '../../../rule-definition';

export const noUnsafeFinally: RuleDefinition = {
    name: 'no-unsafe-finally',
    options: ['error'],
};

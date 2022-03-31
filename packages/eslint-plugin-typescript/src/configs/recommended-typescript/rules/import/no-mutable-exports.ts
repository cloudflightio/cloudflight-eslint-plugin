import type { RuleDefinition } from '../../../rule-definition';

export const noMutableExports: RuleDefinition = {
    name: 'no-mutable-exports',
    options: ['error'],
};

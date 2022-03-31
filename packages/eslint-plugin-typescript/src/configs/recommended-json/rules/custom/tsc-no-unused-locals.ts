import type { RuleDefinition } from '../../../rule-definition';

export const tscNoUnusedLocals: RuleDefinition = {
    name: 'tsc-no-unused-locals',
    options: ['error'],
};

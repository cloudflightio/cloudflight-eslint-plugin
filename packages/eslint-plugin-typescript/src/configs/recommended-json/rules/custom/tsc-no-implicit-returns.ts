import type { RuleDefinition } from '../../../rule-definition';

export const tscNoImplicitReturns: RuleDefinition = {
    name: 'tsc-no-implicit-returns',
    options: ['error'],
};

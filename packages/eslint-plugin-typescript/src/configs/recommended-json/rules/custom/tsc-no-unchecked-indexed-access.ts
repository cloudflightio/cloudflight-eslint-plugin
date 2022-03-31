import type { RuleDefinition } from '../../../rule-definition';

export const tscNoUncheckedIndexedAccess: RuleDefinition = {
    name: 'tsc-no-unchecked-indexed-access',
    options: ['error'],
};

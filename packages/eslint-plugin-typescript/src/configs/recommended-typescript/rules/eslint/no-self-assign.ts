import type { RuleDefinition } from '../../../rule-definition';

export const noSelfAssign: RuleDefinition = {
    name: 'no-self-assign',
    options: ['error'],
};

import type { RuleDefinition } from '../../../rule-definition';

export const tscAllowUnreachableCode: RuleDefinition = {
    name: 'tsc-allow-unreachable-code',
    options: ['error'],
};

import type { RuleDefinition } from '../../../rule-definition';

export const tscNoUnusedParameters: RuleDefinition = {
    name: 'tsc-no-unused-parameters',
    options: ['error'],
};

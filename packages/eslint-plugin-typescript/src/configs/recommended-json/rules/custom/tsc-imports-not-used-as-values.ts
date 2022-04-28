import type { RuleDefinition } from '../../../rule-definition';

export const tscImportsNotUsedAsValues: RuleDefinition = {
    name: 'tsc-imports-not-used-as-values',
    options: ['error'],
};

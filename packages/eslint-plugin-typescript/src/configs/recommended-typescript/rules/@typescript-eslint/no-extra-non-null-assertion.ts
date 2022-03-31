import type { RuleDefinition } from '../../../rule-definition';

export const noExtraNonNullAssertion: RuleDefinition = {
    name: 'no-extra-non-null-assertion',
    options: ['error'],
};

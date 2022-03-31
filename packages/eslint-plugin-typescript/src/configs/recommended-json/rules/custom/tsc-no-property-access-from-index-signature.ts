import type { RuleDefinition } from '../../../rule-definition';

export const tscNoPropertyAccessFromIndexSignature: RuleDefinition = {
    name: 'tsc-no-property-access-from-index-signature',
    options: ['error'],
};

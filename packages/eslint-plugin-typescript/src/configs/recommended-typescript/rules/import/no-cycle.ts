import type { RuleDefinition } from '../../../rule-definition';

export const noCycle: RuleDefinition = {
    name: 'no-cycle',
    options: ['error', { ignoreExternal: true }],
};

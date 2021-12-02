import type { RuleDefinition } from '../../../rule-definition';

export const noUnusedVars: RuleDefinition = {
    name: 'no-unused-vars',
    options: ['error', { args: 'none', ignoreRestSiblings: true }],
};

import type { RuleDefinition } from '../../../rule-definition';

export const noPromiseExecutorReturn: RuleDefinition = {
    name: 'no-promise-executor-return',
    options: ['error'],
};

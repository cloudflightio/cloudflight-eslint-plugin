import type { RuleDefinition } from '../../../rule-definition';

export const noAsyncPromiseExecutor: RuleDefinition = {
    name: 'no-async-promise-executor',
    options: ['error'],
};

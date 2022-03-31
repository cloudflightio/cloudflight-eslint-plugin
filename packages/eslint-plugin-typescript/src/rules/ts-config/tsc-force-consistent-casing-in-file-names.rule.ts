import { Rule } from 'eslint';
import { tscRule } from './util';

export const TscForceConsistentCasingInFileNamesRule: Rule.RuleModule = {
    create: (context) => tscRule(context, { key: 'forceConsistentCasingInFileNames', expectedValue: true }),
    meta: {
        type: 'problem',
        fixable: 'code',
    },
};

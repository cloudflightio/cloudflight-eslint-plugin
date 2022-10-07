import { Rule } from 'eslint';
import { tscRule } from '../../util/tsc-util';

export const TscNoUnusedLocalsRule: Rule.RuleModule = {
    create: (context) => tscRule(context, { key: 'noUnusedLocals', expectedValue: true }),
    meta: {
        type: 'problem',
        fixable: 'code',
    },
};

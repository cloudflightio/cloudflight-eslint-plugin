import { Rule } from 'eslint';
import { tscRule } from '../../util/tsc-util';

export const TscUseDefineForClassFieldsRule: Rule.RuleModule = {
    create: (context) => tscRule(context, { key: 'useDefineForClassFields', expectedValue: true }),
    meta: {
        type: 'problem',
        fixable: 'code',
    },
};

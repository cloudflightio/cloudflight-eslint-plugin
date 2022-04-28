import { Rule } from 'eslint';
import { tscRule } from './util';

export const TscNoImplicitOverrideRule: Rule.RuleModule = {
    create: (context) => tscRule(context, { key: 'noImplicitOverride', expectedValue: true }),
    meta: {
        type: 'problem',
        fixable: 'code',
    },
};

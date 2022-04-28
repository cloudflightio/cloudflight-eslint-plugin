import { Rule } from 'eslint';
import { tscRule } from './util';

export const TscNoImplicitReturnsRule: Rule.RuleModule = {
    create: (context) => tscRule(context, { key: 'noImplicitReturns', expectedValue: true }),
    meta: {
        type: 'problem',
        fixable: 'code',
    },
};

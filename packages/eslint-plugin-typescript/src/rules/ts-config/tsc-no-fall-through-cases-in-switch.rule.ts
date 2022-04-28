import { Rule } from 'eslint';
import { tscRule } from './util';

export const TscNoFallThroughCasesInSwitchRule: Rule.RuleModule = {
    create: (context) => tscRule(context, { key: 'noFallthroughCasesInSwitch', expectedValue: true }),
    meta: {
        type: 'problem',
        fixable: 'code',
    },
};

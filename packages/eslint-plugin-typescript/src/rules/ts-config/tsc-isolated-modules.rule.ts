import { Rule } from 'eslint';
import { tscRule } from '../../util/tsc-util';

export const TscIsolatedModulesRule: Rule.RuleModule = {
    create: (context) => tscRule(context, { key: 'isolatedModules', expectedValue: true }),
    meta: {
        type: 'problem',
        fixable: 'code',
    },
};

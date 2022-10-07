import { Rule } from 'eslint';
import { tscRule } from '../../util/tsc-util';

export const TscNoUnusedParametersRule: Rule.RuleModule = {
    create: (context) => tscRule(context, { key: 'noUnusedParameters', expectedValue: true }),
    meta: {
        type: 'problem',
        fixable: 'code',
    },
};

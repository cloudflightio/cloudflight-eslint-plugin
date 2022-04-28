import { Rule } from 'eslint';
import { tscRule } from './util';

export const TscAllowUnreachableCodeRule: Rule.RuleModule = {
    create: (context) => tscRule(context, { key: 'allowUnreachableCode', expectedValue: false }),
    meta: {
        type: 'problem',
        fixable: 'code',
    },
};

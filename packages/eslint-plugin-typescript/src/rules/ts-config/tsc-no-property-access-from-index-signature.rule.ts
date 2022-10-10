import { Rule } from 'eslint';
import { tscRule } from '../../util/tsc-util';

export const TscNoPropertyAccessFromIndexSignatureRule: Rule.RuleModule = {
    create: (context) => tscRule(context, { key: 'noPropertyAccessFromIndexSignature', expectedValue: true }),
    meta: {
        type: 'problem',
        fixable: 'code',
    },
};

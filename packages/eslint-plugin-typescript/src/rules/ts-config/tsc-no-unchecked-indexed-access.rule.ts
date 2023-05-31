import {Rule} from 'eslint';
import {tscRule} from '../../util/tsc-util';

export const TscNoUncheckedIndexedAccessRule: Rule.RuleModule = {
    create: (context) => tscRule(context, {key: 'noUncheckedIndexedAccess', expectedValue: true}),
    meta: {
        type: 'problem',
        fixable: 'code',
    },
};

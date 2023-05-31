import {Rule} from 'eslint';
import {tscRule} from '../../util/tsc-util';

export const TscStrictRule: Rule.RuleModule = {
    create: (context) => tscRule(context, {key: 'strict', expectedValue: true}),
    meta: {
        type: 'problem',
        fixable: 'code',
    },
};

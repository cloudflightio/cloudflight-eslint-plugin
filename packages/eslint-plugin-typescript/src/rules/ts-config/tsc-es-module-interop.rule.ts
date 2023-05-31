import {Rule} from 'eslint';
import {tscRule} from '../../util/tsc-util';

export const TscEsModuleInteropRule: Rule.RuleModule = {
    create: (context) => tscRule(context, {key: 'esModuleInterop', expectedValue: true}),
    meta: {
        type: 'problem',
        fixable: 'code',
    },
};

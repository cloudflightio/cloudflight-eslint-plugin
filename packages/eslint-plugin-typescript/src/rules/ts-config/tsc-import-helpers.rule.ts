import {Rule} from 'eslint';
import {tscRule} from '../../util/tsc-util';

export const TscImportHelpersRule: Rule.RuleModule = {
    create: (context) => tscRule(context, {key: 'importHelpers', expectedValue: true}),
    meta: {
        type: 'problem',
        fixable: 'code',
    },
};

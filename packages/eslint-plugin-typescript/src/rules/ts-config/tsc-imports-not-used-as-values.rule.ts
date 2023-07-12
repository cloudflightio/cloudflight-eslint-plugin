import {Rule} from 'eslint';

import {tscRule} from '../../util/tsc-util';

export const TscImportsNotUsedAsValuesRule: Rule.RuleModule = {
    create: (context) => tscRule(context, {key: 'importsNotUsedAsValues', expectedValue: 'remove'}),
    meta: {
        type: 'problem',
        fixable: 'code',
    },
};

import {Rule} from 'eslint';

import {tscRule} from '../../util/tsc-util';

export const TscExactOptionalPropertyTypesRule: Rule.RuleModule = {
    create: (context) => tscRule(context, {key: 'exactOptionalPropertyTypes', expectedValue: true}),
    meta: {
        type: 'problem',
        fixable: 'code',
    },
};

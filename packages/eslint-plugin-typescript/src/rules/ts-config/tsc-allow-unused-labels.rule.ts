import {Rule} from 'eslint';

import {tscRule} from '../../util/tsc-util';

export const TscAllowUnusedLabelsRule: Rule.RuleModule = {
    create: (context) => tscRule(context, {key: 'allowUnusedLabels', expectedValue: false}),
    meta: {
        type: 'problem',
        fixable: 'code',
    },
};

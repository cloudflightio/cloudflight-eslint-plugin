import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscAllowUnusedLabelsRuleName = 'tsc-allow-unused-labels';
/**
 * Comment needed to prevent type declaration generation, which is broken.
 * @internal
 */
export const TscAllowUnusedLabelsRule = createTscRule({
    name: TscAllowUnusedLabelsRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#allowUnusedLabels',
            recommended: 'strict',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'allowUnusedLabels', expectedValue: false}),
});

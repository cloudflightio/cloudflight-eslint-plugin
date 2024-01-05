import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscStrictRuleName = 'tsc-strict';
/**
 * Comment needed to prevent type declaration generation, which is broken.
 * @internal
 */
export const TscStrictRule = createTscRule({
    name: TscStrictRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#strict',
            recommended: 'strict',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'strict', expectedValue: true}),
});

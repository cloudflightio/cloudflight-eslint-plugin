import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscNoImplicitReturnsRuleName = 'tsc-no-implicit-returns';
/**
 * Comment needed to prevent type declaration generation, which is broken.
 * @internal
 */
export const TscNoImplicitReturnsRule = createTscRule({
    name: TscNoImplicitReturnsRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#noImplicitReturns',
            recommended: 'strict',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'noImplicitReturns', expectedValue: true}),
});

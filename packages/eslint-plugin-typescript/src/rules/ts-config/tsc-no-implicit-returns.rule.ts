import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscNoImplicitReturnsRuleName = 'tsc-no-implicit-returns';
export const TscNoImplicitReturnsRule = createTscRule({
    name: TscNoImplicitReturnsRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#noImplicitReturns',
            recommended: 'error',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'noImplicitReturns', expectedValue: true}),
});

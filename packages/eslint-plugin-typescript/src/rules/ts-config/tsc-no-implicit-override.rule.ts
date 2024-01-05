import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscNoImplicitOverrideRuleName = 'tsc-no-implicit-override';
/**
 * Comment needed to prevent type declaration generation, which is broken.
 * @internal
 */
export const TscNoImplicitOverrideRule = createTscRule({
    name: TscNoImplicitOverrideRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#noImplicitOverride',
            recommended: 'strict',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'noImplicitOverride', expectedValue: true}),
});

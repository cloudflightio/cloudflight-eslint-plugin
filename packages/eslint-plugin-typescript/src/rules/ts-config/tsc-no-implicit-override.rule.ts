import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscNoImplicitOverrideRuleName = 'tsc-no-implicit-override';
export const TscNoImplicitOverrideRule = createTscRule({
    name: TscNoImplicitOverrideRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#noImplicitOverride',
            recommended: 'error',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'noImplicitOverride', expectedValue: true}),
});

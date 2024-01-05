import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscNoUncheckedIndexedAccessRuleName = 'tsc-no-unchecked-indexed-access';
/**
 * Comment needed to prevent type declaration generation, which is broken.
 * @internal
 */
export const TscNoUncheckedIndexedAccessRule = createTscRule({
    name: TscNoUncheckedIndexedAccessRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#noUncheckedIndexedAccess',
            recommended: 'strict',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'noUncheckedIndexedAccess', expectedValue: true}),
});

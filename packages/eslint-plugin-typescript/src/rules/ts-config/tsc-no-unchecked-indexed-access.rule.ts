import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscNoUncheckedIndexedAccessRuleName = 'tsc-no-unchecked-indexed-access';
export const TscNoUncheckedIndexedAccessRule = createTscRule({
    name: TscNoUncheckedIndexedAccessRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#noUncheckedIndexedAccess',
            recommended: 'error',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'noUncheckedIndexedAccess', expectedValue: true}),
});

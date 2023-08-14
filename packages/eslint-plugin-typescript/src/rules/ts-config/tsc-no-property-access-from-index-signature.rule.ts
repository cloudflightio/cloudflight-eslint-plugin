import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscNoPropertyAccessFromIndexSignatureRuleName = 'tsc-no-property-access-from-index-signature';
export const TscNoPropertyAccessFromIndexSignatureRule = createTscRule({
    name: TscNoPropertyAccessFromIndexSignatureRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#noPropertyAccessFromIndexSignature',
            recommended: 'error',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'noPropertyAccessFromIndexSignature', expectedValue: true}),
});

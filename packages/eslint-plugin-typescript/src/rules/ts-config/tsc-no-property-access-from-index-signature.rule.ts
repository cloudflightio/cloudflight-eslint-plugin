import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscNoPropertyAccessFromIndexSignatureRuleName = 'tsc-no-property-access-from-index-signature';
/**
 * Comment needed to prevent type declaration generation, which is broken.
 * @internal
 */
export const TscNoPropertyAccessFromIndexSignatureRule = createTscRule({
    name: TscNoPropertyAccessFromIndexSignatureRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#noPropertyAccessFromIndexSignature',
            recommended: 'strict',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'noPropertyAccessFromIndexSignature', expectedValue: true}),
});

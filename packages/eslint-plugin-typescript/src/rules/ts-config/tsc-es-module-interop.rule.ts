import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscEsModuleInteropRuleName = 'tsc-es-module-interop';
/**
 * Comment needed to prevent type declaration generation, which is broken.
 * @internal
 */
export const TscEsModuleInteropRule = createTscRule({
    name: TscEsModuleInteropRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#esModuleInterop',
            recommended: 'strict',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'esModuleInterop', expectedValue: true}),
});

import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscEsModuleInteropRuleName = 'tsc-es-module-interop';
export const TscEsModuleInteropRule = createTscRule({
    name: TscEsModuleInteropRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#esModuleInterop',
            recommended: 'error',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'esModuleInterop', expectedValue: true}),
});

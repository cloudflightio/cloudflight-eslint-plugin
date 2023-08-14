import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscIsolatedModulesRuleName = 'tsc-isolated-modules';
export const TscIsolatedModulesRule = createTscRule({
    name: TscIsolatedModulesRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#isolatedModules',
            recommended: 'error',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'isolatedModules', expectedValue: true}),
});

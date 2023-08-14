import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscImportsNotUsedAsValuesRuleName = 'tsc-imports-not-used-as-values';
export const TscImportsNotUsedAsValuesRule = createTscRule({
    name: TscImportsNotUsedAsValuesRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#importsNotUsedAsValues',
            recommended: 'error',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'importsNotUsedAsValues', expectedValue: 'remove'}),
});

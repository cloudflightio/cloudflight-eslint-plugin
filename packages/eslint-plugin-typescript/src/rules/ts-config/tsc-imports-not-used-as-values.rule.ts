import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscImportsNotUsedAsValuesRuleName = 'tsc-imports-not-used-as-values';
/**
 * Comment needed to prevent type declaration generation, which is broken.
 * @internal
 */
export const TscImportsNotUsedAsValuesRule = createTscRule({
    name: TscImportsNotUsedAsValuesRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#importsNotUsedAsValues',
            recommended: 'strict',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'importsNotUsedAsValues', expectedValue: 'remove'}),
});

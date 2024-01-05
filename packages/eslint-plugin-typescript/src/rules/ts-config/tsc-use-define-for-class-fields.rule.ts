import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscUseDefineForClassFieldsRuleName = 'tsc-use-define-for-class-fields';
/**
 * Comment needed to prevent type declaration generation, which is broken.
 * @internal
 */
export const TscUseDefineForClassFieldsRule = createTscRule({
    name: TscUseDefineForClassFieldsRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#useDefineForClassFields',
            recommended: 'strict',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'useDefineForClassFields', expectedValue: true}),
});

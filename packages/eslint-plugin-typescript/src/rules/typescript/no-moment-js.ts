import {createRule} from '../../util/create-rule';

export const NoMomentJsRuleName = 'no-moment-js';
/**
 * Comment needed to prevent type declaration generation, which is broken.
 * @internal
 */
export const NoMomentJsRule = createRule<[], 'noMomentJs'>({
    name: NoMomentJsRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'Enforces that all packages have absolute versions.',
        },
        schema: [],
        messages: {
            noMomentJs: 'Momentjs is deprecated. It is recommended to use luxon or date-fns instead.',
        },
    },
    defaultOptions: [],
    create(context) {
        return {
            ImportExpression(node) {
                if (node.source.type === 'Literal' && node.source.value === 'moment') {
                    context.report({node, messageId: 'noMomentJs'});
                }
            },
            ImportDeclaration(node) {
                if (node.source.type === 'Literal' && node.source.value === 'moment') {
                    context.report({node, messageId: 'noMomentJs'});
                }
            },
            CallExpression(node) {
                if (node.callee.type !== 'Identifier' || node.callee.name !== 'require') {
                    return;
                }

                const sourceToRequire = node.arguments[0];

                if (sourceToRequire?.type === 'Literal' && sourceToRequire.value === 'moment') {
                    context.report({node, messageId: 'noMomentJs'});
                }
            },
        };
    },
});

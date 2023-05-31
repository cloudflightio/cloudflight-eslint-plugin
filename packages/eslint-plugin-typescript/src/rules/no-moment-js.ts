import {Rule} from 'eslint';

const message = 'Momentjs is deprecated. It is recommended to use luxon or date-fns instead.';

export const NoMomentJsRule: Rule.RuleModule = {
    create(context) {
        return {
            ImportExpression(node) {
                if (node.source.type === 'Literal' && node.source.value === 'moment') {
                    context.report({node, message});
                }
            },
            ImportDeclaration(node) {
                if (node.source.type === 'Literal' && node.source.value === 'moment') {
                    context.report({node, message});
                }
            },
            CallExpression(node) {
                if (node.callee.type !== 'Identifier' || node.callee.name !== 'require') {
                    return;
                }

                const sourceToRequire = node.arguments[0];

                if (sourceToRequire?.type === 'Literal' && sourceToRequire.value === 'moment') {
                    context.report({node, message});
                }
            },
        };
    },
};

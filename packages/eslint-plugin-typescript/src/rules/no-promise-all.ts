import {Rule} from 'eslint';

const message = 'Promise.all does not deal with error handling properly. Use Promise.allSettled instead.';

export const NoPromiseAllRule: Rule.RuleModule = {
    create(context) {
        return {
            MemberExpression(node) {
                if (node.object.type !== 'Identifier' || node.property.type !== 'Identifier') {
                    return;
                }

                if (node.object.name === 'Promise' && node.property.name === 'all') {
                    context.report({node, message});
                }
            },
        };
    },
};

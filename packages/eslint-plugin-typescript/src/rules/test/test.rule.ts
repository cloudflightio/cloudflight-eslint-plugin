import { Rule } from 'eslint';

function testRule(context: Rule.RuleContext): Rule.RuleListener {
    return {
        ImportDeclaration(node) {
            context.report({
                node,
                message: 'Are you sure about this?',
            });
        },
    };
}

export const TestRule: Rule.RuleModule = {
    create: testRule,
    meta: {},
};

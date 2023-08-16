import {AST_NODE_TYPES, TSESTree} from '@typescript-eslint/utils';

export function isObjectExpression(value: unknown): value is TSESTree.ObjectExpression {
    return typeof value === 'object' && value != null && 'type' in value && value.type === AST_NODE_TYPES.ObjectExpression;
}

export function isLiteral(value: unknown): value is TSESTree.Literal {
    return typeof value === 'object' && value != null && 'type' in value && value.type === AST_NODE_TYPES.Literal;
}

import {AST_NODE_TYPES, TSESLint, TSESTree} from '@typescript-eslint/utils';

import {JsonPropertyAssertion} from './json-property-assertion';
import {isLiteral, isObjectExpression} from './node-types';

/**
 * Create a new rule validating a property value of a given json file.
 * @param context ESLint {@link TSESLint.RuleContext} for reporting issues.
 * @param propertyAssertion Descriptor of the property and expected value which should be validated.
 * @param ruleContextName A human readable string to identify the context of the evaluated rule used for error messages.
 * Could be a filename, eg `package.json`, or some logical structure inside a file, eg `compiler options`.
 */
export function jsonRule(context: TSESLint.RuleContext<string, unknown[]>, propertyAssertion: JsonPropertyAssertion, ruleContextName: string): TSESLint.RuleListener {
    return {
        Property(propertyNode) {
            validateProperty(propertyNode, propertyAssertion, context, ruleContextName);
        },
        Program(jsonRoot) {
            validateRootJsonProperty(jsonRoot, propertyAssertion, context, ruleContextName);
        },
    };
}

export function findProperty(properties: (TSESTree.Property | TSESTree.SpreadElement)[], propertyKey: string): TSESTree.Property | undefined {
    return properties.find((o): o is TSESTree.Property => {
        if (o.type === AST_NODE_TYPES.Property) {
            return getPropertyName(o) === propertyKey;
        }

        return false;
    });
}

export function findPropertyPath(propertyNode: TSESTree.Property): string {
    let key = getPropertyName(propertyNode) ?? '';

    if (propertyNode.parent != null) {
        let parent: TSESTree.Property | undefined;
        if (propertyNode.parent.type === AST_NODE_TYPES.Property) {
            parent = propertyNode.parent;
        }
        else if (propertyNode.parent.type === AST_NODE_TYPES.ObjectExpression && propertyNode.parent.parent?.type === AST_NODE_TYPES.Property) {
            parent = propertyNode.parent.parent;
        }

        if (parent) {
            key = `${findPropertyPath(parent)}.${key}`;
        }
    }

    return key;
}

export function getPropertyName(property: TSESTree.Property): string | undefined {
    if (!isLiteral(property.key)) {
        return undefined;
    }

    return property.key.value?.toString();
}

export function reportMissingProperty(
    context: TSESLint.RuleContext<string, unknown[]>,
    propertyNode: TSESTree.Node,
    property: JsonPropertyAssertion,
    parent: TSESTree.ObjectExpression | undefined,
    ruleContextName: string,
): void {
    context.report({
        node: propertyNode,
        // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
        message: `${ruleContextName} option '${property.key}' is missing!`,
        fix: (fixer) => {
            const parentOrSelf = parent ?? propertyNode;

            if (parentOrSelf.type === AST_NODE_TYPES.ObjectExpression) {
                const properties = parentOrSelf.properties;
                const range = properties[properties.length - 1]?.range;
                const propertyValue = JSON.stringify(property.expectedValue);

                if (range) {
                    return fixer.insertTextAfterRange(range, `,\n"${property.key}": ${propertyValue}`);
                }
                else if (properties.length === 0 && parentOrSelf.range != null) {
                    return fixer.replaceTextRange(parentOrSelf.range, `{"${property.key}": ${propertyValue}}`);
                }
            }

            return null;
        },
    });
}

export function reportWrongPropertyValue(
    context: TSESLint.RuleContext<string, unknown[]>,
    target: TSESTree.Property,
    property: JsonPropertyAssertion,
    ruleContextName: string,
): void {
    context.report({
        node: target,
        // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
        message: `${ruleContextName} option '${property.key}' must be set to '${String(property.expectedValue)}'!`,
        fix: (fixer) => fixer.replaceText(target.value, JSON.stringify(property.expectedValue)),
    });
}

export function validateRootJsonProperty(
    jsonRoot: TSESTree.Program,
    propertyAssertion: JsonPropertyAssertion,
    context: TSESLint.RuleContext<string, unknown[]>,
    ruleContextName: string,
): void {
    const jsonRootObject: unknown = jsonRoot.body[0];

    if (jsonRoot.body.length !== 1 || !isObjectExpression(jsonRootObject)) {
        return;
    }

    const firstPath = propertyAssertion.key.split('.')[0] ?? '';
    const firstProperty = findProperty(jsonRootObject.properties, firstPath);

    if (firstProperty != null) {
        return;
    }

    const assertion =
        firstPath === propertyAssertion.key ?
            propertyAssertion :
            {
                key: firstPath,
                expectedValue: {},
            };

    reportMissingProperty(context, jsonRoot, assertion, jsonRootObject, ruleContextName);
}

function validateProperty(
    propertyNode: TSESTree.Property,
    propertyAssertion: JsonPropertyAssertion,
    context: TSESLint.RuleContext<string, unknown[]>,
    ruleContextName: string,
): void {
    const propertyPath = findPropertyPath(propertyNode);

    if (propertyPath === propertyAssertion.key) {
        if (isLiteral(propertyNode.value) && propertyNode.value.value !== propertyAssertion.expectedValue) {
            reportWrongPropertyValue(context, propertyNode, propertyAssertion, ruleContextName);
        }
    }
    else if (propertyAssertion.key.startsWith(propertyPath)) {
        if (propertyNode.value.type === AST_NODE_TYPES.ObjectExpression) {
            const nextPath = propertyAssertion.key.substring(0, propertyPath.length).split('.')[0] ?? '';
            const nextProperty = findProperty(propertyNode.value.properties, nextPath);

            if (nextPath && !nextProperty) {
                reportMissingProperty(
                    context,
                    propertyNode,
                    {
                        key: nextPath,
                        expectedValue: {},
                    },
                    propertyNode.value,
                    ruleContextName,
                );
            }
        }
    }
}

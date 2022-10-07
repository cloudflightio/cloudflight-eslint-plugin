import { Rule } from 'eslint';
import type { Literal, Node, ObjectExpression, Program, Property, SpreadElement } from 'estree';
import { JsonPropertyAssertion } from './json-property-assertion';

/**
 * Create a new rule validating a property value of a given json file.
 * @param context ESLint {@link Rule.RuleContext} for reporting issues.
 * @param propertyAssertion Descriptor of the property and expected value which should be validated.
 * @param ruleContextName A human readable string to identify the context of the evaluated rule used for error messages.
 * Could be a filename, eg `package.json`, or some logical structure inside a file, eg `compiler options`.
 */
export function jsonRule(
    context: Rule.RuleContext,
    propertyAssertion: JsonPropertyAssertion,
    ruleContextName: string
): Rule.RuleListener {
    return {
        Property(propertyNode) {
            validateProperty(propertyNode, propertyAssertion, context, ruleContextName);
        },
        Program(jsonRoot) {
            validateRootJsonProperty(jsonRoot, propertyAssertion, context, ruleContextName);
        },
    };
}

export function findProperty(properties: (Property | SpreadElement)[], propertyKey: string): Property | undefined {
    return properties.find((o): o is Property => {
        if (o.type === 'Property') {
            return getPropertyName(o) === propertyKey;
        }
        return false;
    });
}

export function findPropertyPath(propertyNode: Property & Rule.NodeParentExtension): string {
    let key = getPropertyName(propertyNode) ?? '';

    if (propertyNode.parent) {
        let parent: (Property & Rule.NodeParentExtension) | undefined;
        if (propertyNode.parent.type === 'Property') {
            parent = propertyNode.parent;
        } else if (propertyNode.parent.type === 'ObjectExpression' && propertyNode.parent.parent.type === 'Property') {
            parent = propertyNode.parent.parent;
        }

        if (parent) {
            key = findPropertyPath(parent) + `.${key}`;
        }
    }

    return key;
}

export function getPropertyName(property: Property): string | undefined {
    return (property.key as Literal).value?.toString();
}

export function reportMissingProperty(
    context: Rule.RuleContext,
    propertyNode: Node,
    property: JsonPropertyAssertion,
    parent: ObjectExpression | undefined,
    ruleContextName: string
): void {
    context.report({
        node: propertyNode,
        message: `${ruleContextName} option '${property.key}' is missing!`,
        fix: (fixer) => {
            const parentOrSelf = parent ?? propertyNode;
            if (parentOrSelf.type === 'ObjectExpression') {
                const properties = parentOrSelf.properties;
                const range = properties[properties.length - 1]?.range;
                const propertyValue = JSON.stringify(property.expectedValue);
                if (range) {
                    return fixer.insertTextAfterRange(range, `,\n"${property.key}": ${propertyValue}`);
                } else if (properties.length === 0 && parentOrSelf.range) {
                    return fixer.replaceTextRange(parentOrSelf.range, `{"${property.key}": ${propertyValue}}`);
                }
            }

            return null;
        },
    });
}

export function reportWrongPropertyValue(
    context: Rule.RuleContext,
    target: Property,
    property: JsonPropertyAssertion,
    ruleContextName: string
): void {
    context.report({
        node: target,
        message: `${ruleContextName} option '${property.key}' must be set to '${property.expectedValue}'!`,
        fix: (fixer) => fixer.replaceText(target.value, JSON.stringify(property.expectedValue)),
    });
}

export function validateRootJsonProperty(
    jsonRoot: Program,
    propertyAssertion: JsonPropertyAssertion,
    context: Rule.RuleContext,
    ruleContextName: string
): void {
    // For whatever reason the TSCompiler cannot deduce that elements inside body can be of type ObjectExpression, so we cast via unknown
    const jsonRootObject = jsonRoot.body[0] as unknown as ObjectExpression | undefined;
    if (jsonRoot.body.length === 1 && jsonRootObject?.type === 'ObjectExpression') {
        const firstPath = propertyAssertion.key.split('.')[0] ?? '';
        const firstProperty = findProperty(jsonRootObject.properties, firstPath);
        if (!firstProperty) {
            const assertion =
                firstPath === propertyAssertion.key
                    ? propertyAssertion
                    : {
                          key: firstPath,
                          expectedValue: {},
                      };

            reportMissingProperty(context, jsonRoot, assertion, jsonRootObject, ruleContextName);
        }
    }
}

function validateProperty(
    propertyNode: Property & Rule.NodeParentExtension,
    propertyAssertion: JsonPropertyAssertion,
    context: Rule.RuleContext,
    ruleContextName: string
): void {
    const propertyPath = findPropertyPath(propertyNode);
    if (propertyPath === propertyAssertion.key) {
        if ((<Literal>propertyNode.value).value !== propertyAssertion.expectedValue) {
            reportWrongPropertyValue(context, propertyNode, propertyAssertion, ruleContextName);
        }
    } else if (propertyAssertion.key.startsWith(propertyPath)) {
        if (propertyNode.value.type === 'ObjectExpression') {
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
                    ruleContextName
                );
            }
        }
    }
}

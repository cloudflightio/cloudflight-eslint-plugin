import { Rule } from 'eslint';
import type { Literal, ObjectExpression, Property, SpreadElement } from 'estree';

export interface JsonPropertyAssertion {
    key: string;
    expectedValue: string | boolean;
}

export function tscRule(context: Rule.RuleContext, propertyAssertion: JsonPropertyAssertion): Rule.RuleListener {
    return {
        Property(propertyNode) {
            validateProperty(propertyNode, propertyAssertion, context);
        },
    };
}

export function validateProperty(
    propertyNode: Property & Rule.NodeParentExtension,
    propertyAssertion: JsonPropertyAssertion,
    context: Rule.RuleContext
): void {
    if ((<Literal>propertyNode.key).value === 'compilerOptions') {
        const compilerOptions = (<ObjectExpression>propertyNode.value).properties;
        const property = findProperty(compilerOptions, propertyAssertion.key);

        if (property === undefined) {
            if (isRootTsConfig(propertyNode)) {
                reportMissingProperty(context, propertyNode, propertyAssertion, compilerOptions);
            }
        } else {
            if ((<Literal>property.value).value !== propertyAssertion.expectedValue) {
                reportWrongPropertyValue(context, property, propertyAssertion);
            }
        }
    }
}

export function isRootTsConfig(propertyNode: Property & Rule.NodeParentExtension): boolean {
    const tsConfigRootNode: ObjectExpression = <ObjectExpression>propertyNode.parent;
    return (
        tsConfigRootNode.properties.findIndex((p) => {
            if (p.type === 'Property') {
                return (<Literal>p.key).value === 'extends';
            }
            return false;
        }) === -1
    );
}

export function findProperty(compilerOptions: (Property | SpreadElement)[], propertyKey: string): Property | undefined {
    return <Property>compilerOptions.find((o) => {
        if (o.type === 'Property') {
            return (<Literal>o.key).value === propertyKey;
        }
        return false;
    });
}

export function reportMissingProperty(
    context: Rule.RuleContext,
    propertyNode: Property & Rule.NodeParentExtension,
    property: JsonPropertyAssertion,
    compilerOptions: (Property | SpreadElement)[]
): void {
    context.report({
        node: propertyNode,
        message: `TS compiler option '${property.key}' is missing!`,
        fix(fixer) {
            const range = compilerOptions[compilerOptions.length - 1]?.range;
            if (range) {
                if (typeof property.expectedValue === 'string') {
                    return fixer.insertTextAfterRange(
                        range,
                        `,\n        "${property.key}": "${property.expectedValue}"`
                    );
                }
                return fixer.insertTextAfterRange(range, `,\n        "${property.key}": ${property.expectedValue}`);
            }
            return null;
        },
    });
}

export function reportWrongPropertyValue(
    context: Rule.RuleContext,
    compilerOption: Property,
    property: JsonPropertyAssertion
): void {
    context.report({
        node: compilerOption,
        message: `TS compiler option '${property.key}' must be set to '${property.expectedValue}'!`,
        fix(fixer) {
            if (typeof property.expectedValue === 'string') {
                return fixer.replaceText(compilerOption.value, '"' + property.expectedValue.toString() + '"');
            }
            return fixer.replaceText(compilerOption.value, property.expectedValue.toString());
        },
    });
}

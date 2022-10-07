import { Rule } from 'eslint';
import type { Literal, ObjectExpression, Property } from 'estree';
import { findProperty, reportMissingProperty, reportWrongPropertyValue, validateRootJsonProperty } from './json-util';
import { JsonPropertyAssertion } from './json-property-assertion';

const filename = 'TS compiler';

export function tscRule(context: Rule.RuleContext, propertyAssertion: JsonPropertyAssertion): Rule.RuleListener {
    return {
        Property(propertyNode) {
            validateProperty(propertyNode, propertyAssertion, context);
        },
        Program(jsonRoot) {
            validateRootJsonProperty(jsonRoot, { key: 'compilerOptions', expectedValue: {} }, context, 'TS Config');
        },
    };
}

function validateProperty(
    propertyNode: Property & Rule.NodeParentExtension,
    propertyAssertion: JsonPropertyAssertion,
    context: Rule.RuleContext
): void {
    if ((<Literal>propertyNode.key).value === 'compilerOptions') {
        const compilerOptions = <ObjectExpression>propertyNode.value;
        const property = findProperty(compilerOptions.properties, propertyAssertion.key);

        if (property === undefined) {
            if (isRootTsConfig(propertyNode)) {
                reportMissingProperty(context, propertyNode, propertyAssertion, compilerOptions, filename);
            }
        } else {
            if ((<Literal>property.value).value !== propertyAssertion.expectedValue) {
                reportWrongPropertyValue(context, property, propertyAssertion, filename);
            }
        }
    }
}

function isRootTsConfig(propertyNode: Property & Rule.NodeParentExtension): boolean {
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

import {Rule} from 'eslint';
import type {Literal, ObjectExpression, Property} from 'estree';

import {JsonPropertyAssertion} from './json-property-assertion';
import {findProperty, reportMissingProperty, reportWrongPropertyValue, validateRootJsonProperty} from './json-util';

const filename = 'TS compiler';

export function tscRule(context: Rule.RuleContext, propertyAssertion: JsonPropertyAssertion): Rule.RuleListener {
    return {
        Property(propertyNode) {
            validateProperty(propertyNode, propertyAssertion, context);
        },
        Program(jsonRoot) {
            validateRootJsonProperty(jsonRoot, {key: 'compilerOptions', expectedValue: {}}, context, 'TS Config');
        },
    };
}

function validateProperty(
    propertyNode: Property & Rule.NodeParentExtension,
    propertyAssertion: JsonPropertyAssertion,
    context: Rule.RuleContext,
): void {
    if ((propertyNode.key as Literal).value === 'compilerOptions') {
        const compilerOptions = propertyNode.value as ObjectExpression;
        const property = findProperty(compilerOptions.properties, propertyAssertion.key);

        if (property === undefined) {
            if (isRootTsConfig(propertyNode)) {
                reportMissingProperty(context, propertyNode, propertyAssertion, compilerOptions, filename);
            }
        }
        else if ((property.value as Literal).value !== propertyAssertion.expectedValue) {
            reportWrongPropertyValue(context, property, propertyAssertion, filename);
        }
    }
}

function isRootTsConfig(propertyNode: Property & Rule.NodeParentExtension): boolean {
    const tsConfigRootNode: ObjectExpression = propertyNode.parent as ObjectExpression;

    return (
        tsConfigRootNode.properties.findIndex((p) => {
            if (p.type === 'Property') {
                return (p.key as Literal).value === 'extends';
            }

            return false;
        }) === -1
    );
}

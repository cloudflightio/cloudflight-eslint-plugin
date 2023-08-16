import {AST_NODE_TYPES, TSESLint, TSESTree} from '@typescript-eslint/utils';

import {JsonPropertyAssertion} from './json-property-assertion';
import {findProperty, reportMissingProperty, reportWrongPropertyValue, validateRootJsonProperty} from './json-util';
import {isLiteral, isObjectExpression} from './node-types';

const filename = 'TS compiler';

export function tscRule(context: TSESLint.RuleContext<string, unknown[]>, propertyAssertion: JsonPropertyAssertion): TSESLint.RuleListener {
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
    propertyNode: TSESTree.Property,
    propertyAssertion: JsonPropertyAssertion,
    context: TSESLint.RuleContext<string, unknown[]>,
): void {
    if (isLiteral(propertyNode.key) && propertyNode.key.value === 'compilerOptions') {
        const compilerOptions = propertyNode.value;

        if (!isObjectExpression(compilerOptions)) {
            return;
        }

        const property = findProperty(compilerOptions.properties, propertyAssertion.key);

        if (property == null) {
            if (isRootTsConfig(propertyNode)) {
                reportMissingProperty(context, propertyNode, propertyAssertion, compilerOptions, filename);
            }
        }
        else if (isLiteral(property.value) && property.value.value !== propertyAssertion.expectedValue) {
            reportWrongPropertyValue(context, property, propertyAssertion, filename);
        }
    }
}

function isRootTsConfig(propertyNode: TSESTree.Property): boolean {
    if (propertyNode.parent == null) {
        return false;
    }

    const tsConfigRootNode = propertyNode.parent;

    if (!isObjectExpression(tsConfigRootNode)) {
        return false;
    }

    return (
        tsConfigRootNode.properties.findIndex((p) => {
            if (p.type === AST_NODE_TYPES.Property && isLiteral(p.key)) {
                return p.key.value === 'extends';
            }

            return false;
        }) === -1
    );
}

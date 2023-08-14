import {TSESLint, TSESTree} from '@typescript-eslint/utils';

import {JsonPropertyAssertion} from './json-property-assertion';
import {findProperty, reportMissingProperty, reportWrongPropertyValue, validateRootJsonProperty} from './json-util';

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
    if ((propertyNode.key as TSESTree.Literal).value === 'compilerOptions') {
        const compilerOptions = propertyNode.value as TSESTree.ObjectExpression;
        const property = findProperty(compilerOptions.properties, propertyAssertion.key);

        if (property === undefined) {
            if (isRootTsConfig(propertyNode)) {
                reportMissingProperty(context, propertyNode, propertyAssertion, compilerOptions, filename);
            }
        }
        else if ((property.value as TSESTree.Literal).value !== propertyAssertion.expectedValue) {
            reportWrongPropertyValue(context, property, propertyAssertion, filename);
        }
    }
}

function isRootTsConfig(propertyNode: TSESTree.Property): boolean {
    const tsConfigRootNode: TSESTree.ObjectExpression = propertyNode.parent as TSESTree.ObjectExpression;

    return (
        tsConfigRootNode.properties.findIndex((p) => {
            if (p.type === 'Property') {
                return (p.key as TSESTree.Literal).value === 'extends';
            }

            return false;
        }) === -1
    );
}

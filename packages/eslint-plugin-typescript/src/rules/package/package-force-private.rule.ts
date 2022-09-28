import { Rule } from 'eslint';
import { findProperty, jsonRule, reportMissingProperty, reportWrongPropertyValue } from '../json-util';
import type { Literal, ObjectExpression } from 'estree';
import { JsonPropertyAssertion } from '../json-property-assertion';

const privatePropertyAssertion: JsonPropertyAssertion = {
    key: 'private',
    expectedValue: true,
};

export const PackagForcePrivateRule: Rule.RuleModule = {
    create: (context) => {
        const ignorePublished = typeof context.options[0] === 'boolean' ? context.options[0] : true;
        if (!ignorePublished) {
            return jsonRule(context, privatePropertyAssertion, 'package.json');
        } else {
            return {
                Program(program) {
                    const jsonRootObject = program.body[0] as unknown as ObjectExpression | undefined;
                    if (program.body.length === 1 && jsonRootObject?.type === 'ObjectExpression') {
                        const privateProperty = findProperty(jsonRootObject.properties, 'private');
                        const privateValue = !!(<Literal>privateProperty?.value)?.value;
                        const publishConfigProperty = findProperty(jsonRootObject.properties, 'publishConfig');

                        const isPublic = !privateProperty || !privateValue;
                        if (isPublic && !publishConfigProperty) {
                            if (!privateProperty) {
                                reportMissingProperty(
                                    context,
                                    jsonRootObject,
                                    privatePropertyAssertion,
                                    jsonRootObject,
                                    'package.json'
                                );
                            } else {
                                reportWrongPropertyValue(
                                    context,
                                    privateProperty,
                                    privatePropertyAssertion,
                                    'package.json'
                                );
                            }
                        }
                    }
                },
            };
        }
    },
    meta: {
        type: 'problem',
        fixable: 'code',
    },
};

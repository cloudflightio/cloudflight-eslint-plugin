import {Rule} from 'eslint';
import type {Literal, ObjectExpression} from 'estree';

import {JsonPropertyAssertion} from '../../util/json-property-assertion';
import {findProperty, jsonRule, reportMissingProperty, reportWrongPropertyValue} from '../../util/json-util';

interface RuleOptions {
    ignorePublished: boolean;
}

const privatePropertyAssertion: JsonPropertyAssertion = {
    key: 'private',
    expectedValue: true,
};

export const PackageForcePrivateRule: Rule.RuleModule = {
    create: (context) => {
        const ignorePublished: boolean = (context.options as RuleOptions[])[0]?.ignorePublished ?? true;

        if (!ignorePublished) {
            return jsonRule(context, privatePropertyAssertion, 'package.json');
        }

        return {
            Program(program) {
                const jsonRootObject = program.body[0] as unknown as ObjectExpression | undefined;

                if (!(program.body.length === 1 && jsonRootObject?.type === 'ObjectExpression')) {
                    return;
                }

                const privateProperty = findProperty(jsonRootObject.properties, 'private');
                const privateValue = (privateProperty?.value as Literal)?.value === true;
                const publishConfigProperty = findProperty(jsonRootObject.properties, 'publishConfig');
                const isPublic = !privateProperty || !privateValue;

                if (!(isPublic && !publishConfigProperty)) {
                    return;
                }

                if (!privateProperty) {
                    reportMissingProperty(context, jsonRootObject, privatePropertyAssertion, jsonRootObject, 'package.json');
                }
                else {
                    reportWrongPropertyValue(context, privateProperty, privatePropertyAssertion, 'package.json');
                }
            },
        };
    },
    meta: {
        type: 'problem',
        fixable: 'code',
        schema: [
            {
                type: 'object',
                properties: {
                    ignorePublished: {
                        type: 'boolean',
                        description: 'If set to true, this rule will only check if a package is private, if no publish config is present.',
                        default: true,
                    },
                },
            },
        ],
    },
};

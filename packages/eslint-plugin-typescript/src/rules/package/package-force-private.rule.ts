import {createPackageRule} from '../../util/create-rule';
import {JsonPropertyAssertion} from '../../util/json-property-assertion';
import {findProperty, jsonRule, reportMissingProperty, reportWrongPropertyValue} from '../../util/json-util';
import {isLiteral, isObjectExpression} from '../../util/node-types';

interface RuleOptions {
    ignorePublished: boolean;
}

const privatePropertyAssertion: JsonPropertyAssertion = {
    key: 'private',
    expectedValue: true,
};

export const PackageForcePrivateRuleName = 'package-force-private';
export const PackageForcePrivateRule = createPackageRule<RuleOptions[], string>({
    name: PackageForcePrivateRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'Enforces that all packages are private, in other words non-publishable.',
            recommended: 'error',
        },
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
        messages: {},
    },
    defaultOptions: [],
    create: (context) => {
        const ignorePublished: boolean = context.options[0]?.ignorePublished ?? true;

        if (!ignorePublished) {
            return jsonRule(context, privatePropertyAssertion, 'package.json');
        }

        return {
            Program(program) {
                const jsonRootObject: unknown = program.body[0];

                if (program.body.length !== 1 || !isObjectExpression(jsonRootObject)) {
                    return;
                }

                const privateProperty = findProperty(jsonRootObject.properties, 'private');
                const publishConfigProperty = findProperty(jsonRootObject.properties, 'publishConfig');

                if (privateProperty == null && publishConfigProperty == null) {
                    reportMissingProperty(context, jsonRootObject, privatePropertyAssertion, jsonRootObject, 'package.json');

                    return;
                }

                if (privateProperty?.value == null || !isLiteral(privateProperty.value)) {
                    return;
                }

                if (privateProperty.value.value === true) {
                    return;
                }

                if (publishConfigProperty == null) {
                    reportWrongPropertyValue(context, privateProperty, privatePropertyAssertion, 'package.json');
                }
            },
        };
    },
});

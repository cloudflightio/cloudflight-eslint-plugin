import {TSESTree} from '@typescript-eslint/utils';

import {createPackageRule} from '../../util/create-rule';
import {JsonPropertyAssertion} from '../../util/json-property-assertion';
import {findProperty, jsonRule, reportMissingProperty, reportWrongPropertyValue} from '../../util/json-util';

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
                const jsonRootObject = program.body[0] as unknown as TSESTree.ObjectExpression | undefined;

                if (!(program.body.length === 1 && jsonRootObject?.type === 'ObjectExpression')) {
                    return;
                }

                const privateProperty = findProperty(jsonRootObject.properties, 'private');
                const privateValue = (privateProperty?.value as TSESTree.Literal)?.value === true;
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
});

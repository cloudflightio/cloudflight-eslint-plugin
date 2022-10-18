import { Rule } from 'eslint';
import { findPropertyPath, getPropertyName, reportWrongPropertyValue } from '../../util/json-util';

const semVerRegex = /\d+\.(\d+|x)\.(\d+|x)/;

export const PackageForceAbsoluteVersionDependenciesRule: Rule.RuleModule = {
    create: (context) => {
        return {
            Property(propertyNode) {
                const propertyPath = findPropertyPath(propertyNode);
                const dependencyPath = propertyPath.match(/^\b(d|devD)ependencies\b/);

                if (dependencyPath && propertyNode.value.type === 'Literal') {
                    const propertyValue = JSON.stringify(propertyNode.value.value);
                    const foundVersion = (propertyValue.match(semVerRegex) ?? [])[0];
                    const isAnyVersion = propertyValue === JSON.stringify('*') || propertyValue === JSON.stringify('');

                    if (foundVersion || isAnyVersion) {
                        const dependencyContext = dependencyPath[0];
                        const propertyName = getPropertyName(propertyNode);

                        if (isAnyVersion && propertyName) {
                            context.report({
                                node: propertyNode,
                                message: `${dependencyContext} option '${propertyName}' must be set to an absolute version!`,
                            });
                        } else if (foundVersion) {
                            const isAbsoluteVersion =
                                propertyValue.length === JSON.stringify(foundVersion).length &&
                                !propertyValue.includes('x');

                            if (!isAbsoluteVersion && dependencyContext && propertyName) {
                                reportWrongPropertyValue(
                                    context,
                                    propertyNode,
                                    {
                                        key: propertyName,
                                        expectedValue: foundVersion.replace(/x/g, '0'),
                                    },
                                    dependencyContext
                                );
                            }
                        }
                    }
                }
            },
        };
    },
    meta: {
        type: 'problem',
        fixable: 'code',
    },
};

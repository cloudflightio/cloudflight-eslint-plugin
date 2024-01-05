import {createPackageRule} from '../../util/create-rule';
import {findPropertyPath, getPropertyName, reportWrongPropertyValue} from '../../util/json-util';

const semVerRegex = /\d+\.(\d+|x)\.(\d+|x)/;

export const PackageForceAbsoluteVersionDependenciesRuleName = 'package-force-absolute-version-dependencies';
/**
 * Comment needed to prevent type declaration generation, which is broken.
 * @internal
 */
export const PackageForceAbsoluteVersionDependenciesRule = createPackageRule<[], string>({
    name: PackageForceAbsoluteVersionDependenciesRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'Enforces that all packages have absolute versions.',
            recommended: 'strict',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => ({
        Property(propertyNode) {
            const propertyPath = findPropertyPath(propertyNode);
            const dependencyPath = propertyPath.match(/^\b(d|devD)ependencies\b/);

            if (dependencyPath == null || propertyNode.value.type !== 'Literal') {
                return;
            }

            const propertyValue = JSON.stringify(propertyNode.value.value);
            const foundVersion = (propertyValue.match(semVerRegex) ?? [])[0];
            const isAnyVersion = propertyValue === JSON.stringify('*') || propertyValue === JSON.stringify('');

            if (!(foundVersion != null || foundVersion !== '' || isAnyVersion)) {
                return;
            }

            const dependencyContext = dependencyPath[0];
            const propertyName = getPropertyName(propertyNode);

            if (isAnyVersion && propertyName != null && propertyName !== '') {
                context.report({
                    node: propertyNode,
                    // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
                    message: `${dependencyContext} option '${propertyName}' must be set to an absolute version!`,
                });
            }
            else if (foundVersion != null && foundVersion !== '') {
                const isAbsoluteVersion = propertyValue.length === JSON.stringify(foundVersion).length && !propertyValue.includes('x');

                if (
                    !isAbsoluteVersion &&
                    dependencyContext != null &&
                    dependencyContext !== '' &&
                    propertyName != null &&
                    propertyName !== ''
                ) {
                    reportWrongPropertyValue(
                        context,
                        propertyNode,
                        {
                            key: propertyName,
                            expectedValue: foundVersion.replace(/x/g, '0'),
                        },
                        dependencyContext,
                    );
                }
            }
        },
    }),
});

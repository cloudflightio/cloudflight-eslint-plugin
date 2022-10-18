import type { RuleDefinition } from '../../../rule-definition';

export const packageForceAbsoluteVersionDependenciesRule: RuleDefinition = {
    name: 'package-force-absolute-version-dependencies',
    options: ['error'],
};

import { Linter } from 'eslint';
import { packageForcePrivate } from './custom/package-force-private';
import { packageForceAbsoluteVersionDependenciesRule } from './custom/package-force-absolute-version-dependencies';

const pluginPrefix = '@cloudflight/typescript';

export const customRules: Linter.RulesRecord = {
    [`${pluginPrefix}/${packageForcePrivate.name}`]: packageForcePrivate.options,
    [`${pluginPrefix}/${packageForceAbsoluteVersionDependenciesRule.name}`]:
        packageForceAbsoluteVersionDependenciesRule.options,
};

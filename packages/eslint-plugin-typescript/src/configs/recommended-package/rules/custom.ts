import {TSESLint} from '@typescript-eslint/utils';

import {
    PackageForceAbsoluteVersionDependenciesRuleName,
} from '../../../rules/package/package-force-absolute-version-dependencies.rule';
import {PackageForcePrivateRuleName} from '../../../rules/package/package-force-private.rule';

const pluginPrefix = '@cloudflight/typescript';

export const customRules: TSESLint.Linter.RulesRecord = {
    [`${pluginPrefix}/${PackageForcePrivateRuleName}`]: ['error'],
    [`${pluginPrefix}/${PackageForceAbsoluteVersionDependenciesRuleName}`]: ['error'],
};

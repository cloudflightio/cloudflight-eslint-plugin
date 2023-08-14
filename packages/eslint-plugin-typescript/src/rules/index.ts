import {TSESLint} from '@typescript-eslint/utils';

import {
    PackageForceAbsoluteVersionDependenciesRule,
    PackageForceAbsoluteVersionDependenciesRuleName,
} from './package/package-force-absolute-version-dependencies.rule';
import {PackageForcePrivateRule, PackageForcePrivateRuleName} from './package/package-force-private.rule';
import {
    TscAllowUnreachableCodeRule,
    TscAllowUnreachableCodeRuleName,
} from './ts-config/tsc-allow-unreachable-code.rule';
import {TscAllowUnusedLabelsRule, TscAllowUnusedLabelsRuleName} from './ts-config/tsc-allow-unused-labels.rule';
import {TscEsModuleInteropRule, TscEsModuleInteropRuleName} from './ts-config/tsc-es-module-interop.rule';
import {
    TscForceConsistentCasingInFileNamesRule,
    TscForceConsistentCasingInFileNamesRuleName,
} from './ts-config/tsc-force-consistent-casing-in-file-names.rule';
import {TscImportHelpersRule, TscImportHelpersRuleName} from './ts-config/tsc-import-helpers.rule';
import {
    TscImportsNotUsedAsValuesRule,
    TscImportsNotUsedAsValuesRuleName,
} from './ts-config/tsc-imports-not-used-as-values.rule';
import {TscIsolatedModulesRule, TscIsolatedModulesRuleName} from './ts-config/tsc-isolated-modules.rule';
import {
    TscNoFallThroughCasesInSwitchRule,
    TscNoFallThroughCasesInSwitchRuleName,
} from './ts-config/tsc-no-fall-through-cases-in-switch.rule';
import {TscNoImplicitOverrideRule, TscNoImplicitOverrideRuleName} from './ts-config/tsc-no-implicit-override.rule';
import {TscNoImplicitReturnsRule, TscNoImplicitReturnsRuleName} from './ts-config/tsc-no-implicit-returns.rule';
import {
    TscNoPropertyAccessFromIndexSignatureRule,
    TscNoPropertyAccessFromIndexSignatureRuleName,
} from './ts-config/tsc-no-property-access-from-index-signature.rule';
import {
    TscNoUncheckedIndexedAccessRule,
    TscNoUncheckedIndexedAccessRuleName,
} from './ts-config/tsc-no-unchecked-indexed-access.rule';
import {TscStrictRule, TscStrictRuleName} from './ts-config/tsc-strict.rule';
import {
    TscUseDefineForClassFieldsRule,
    TscUseDefineForClassFieldsRuleName,
} from './ts-config/tsc-use-define-for-class-fields.rule';
import {NoMomentJsRule, NoMomentJsRuleName} from './no-moment-js';
import {NoOnEventAssign, NoOnEventAssignName} from './no-on-event-assign';

export const rules: Record<string, TSESLint.RuleModule<string, readonly unknown[]>> = {
    [PackageForcePrivateRuleName]: PackageForcePrivateRule,
    [PackageForceAbsoluteVersionDependenciesRuleName]: PackageForceAbsoluteVersionDependenciesRule,
    [TscAllowUnreachableCodeRuleName]: TscAllowUnreachableCodeRule,
    [TscAllowUnusedLabelsRuleName]: TscAllowUnusedLabelsRule,
    [TscEsModuleInteropRuleName]: TscEsModuleInteropRule,
    [TscForceConsistentCasingInFileNamesRuleName]: TscForceConsistentCasingInFileNamesRule,
    [TscImportHelpersRuleName]: TscImportHelpersRule,
    [TscImportsNotUsedAsValuesRuleName]: TscImportsNotUsedAsValuesRule,
    [TscIsolatedModulesRuleName]: TscIsolatedModulesRule,
    [TscNoFallThroughCasesInSwitchRuleName]: TscNoFallThroughCasesInSwitchRule,
    [TscNoImplicitOverrideRuleName]: TscNoImplicitOverrideRule,
    [TscNoImplicitReturnsRuleName]: TscNoImplicitReturnsRule,
    [TscNoPropertyAccessFromIndexSignatureRuleName]: TscNoPropertyAccessFromIndexSignatureRule,
    [TscNoUncheckedIndexedAccessRuleName]: TscNoUncheckedIndexedAccessRule,
    [TscStrictRuleName]: TscStrictRule,
    [TscUseDefineForClassFieldsRuleName]: TscUseDefineForClassFieldsRule,
    [NoMomentJsRuleName]: NoMomentJsRule,
    [NoOnEventAssignName]: NoOnEventAssign,
};

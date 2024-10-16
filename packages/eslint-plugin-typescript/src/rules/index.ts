import {TSESLint} from '@typescript-eslint/utils';

import {NoMomentJsRule, NoMomentJsRuleName} from './typescript/no-moment-js';
import {NoOnEventAssign, NoOnEventAssignName} from './typescript/no-on-event-assign';

const rules: Record<string, TSESLint.RuleModule<string, readonly unknown[]>> = {
    // todo: eslint-plugin-json-es is not compatible with eslint v9 as of writing
    //  and will be migrated later
    // [PackageForcePrivateRuleName]: PackageForcePrivateRule,
    // [PackageForceAbsoluteVersionDependenciesRuleName]: PackageForceAbsoluteVersionDependenciesRule,
    // [TscAllowUnreachableCodeRuleName]: TscAllowUnreachableCodeRule,
    // [TscAllowUnusedLabelsRuleName]: TscAllowUnusedLabelsRule,
    // [TscEsModuleInteropRuleName]: TscEsModuleInteropRule,
    // [TscForceConsistentCasingInFileNamesRuleName]: TscForceConsistentCasingInFileNamesRule,
    // [TscImportHelpersRuleName]: TscImportHelpersRule,
    // [TscImportsNotUsedAsValuesRuleName]: TscImportsNotUsedAsValuesRule,
    // [TscIsolatedModulesRuleName]: TscIsolatedModulesRule,
    // [TscNoFallThroughCasesInSwitchRuleName]: TscNoFallThroughCasesInSwitchRule,
    // [TscNoImplicitOverrideRuleName]: TscNoImplicitOverrideRule,
    // [TscNoImplicitReturnsRuleName]: TscNoImplicitReturnsRule,
    // [TscNoPropertyAccessFromIndexSignatureRuleName]: TscNoPropertyAccessFromIndexSignatureRule,
    // [TscNoUncheckedIndexedAccessRuleName]: TscNoUncheckedIndexedAccessRule,
    // [TscStrictRuleName]: TscStrictRule,
    // [TscUseDefineForClassFieldsRuleName]: TscUseDefineForClassFieldsRule,
    [NoMomentJsRuleName]: NoMomentJsRule,
    [NoOnEventAssignName]: NoOnEventAssign,
};

export const cloudflightTypescriptPlugin: TSESLint.FlatConfig.Plugin = {
    meta: {
        name: '@cloudflight/typescript',
        version: 'see package.json file',
    },
    rules,
};

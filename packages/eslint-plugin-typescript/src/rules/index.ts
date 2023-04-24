import {Rule} from 'eslint';
import {PackageForcePrivateRule} from './package/package-force-private.rule';
import {TscStrictRule} from './ts-config/tsc-strict.rule';
import {TscAllowUnusedLabelsRule} from './ts-config/tsc-allow-unused-labels.rule';
import {TscAllowUnreachableCodeRule} from './ts-config/tsc-allow-unreachable-code.rule';
import {TscEsModuleInteropRule} from './ts-config/tsc-es-module-interop.rule';
import {TscExactOptionalPropertyTypesRule} from './ts-config/tsc-exact-optional-property-types.rule';
import {TscForceConsistentCasingInFileNamesRule} from './ts-config/tsc-force-consistent-casing-in-file-names.rule';
import {TscImportHelpersRule} from './ts-config/tsc-import-helpers.rule';
import {TscImportsNotUsedAsValuesRule} from './ts-config/tsc-imports-not-used-as-values.rule';
import {TscIsolatedModulesRule} from './ts-config/tsc-isolated-modules.rule';
import {TscNoFallThroughCasesInSwitchRule} from './ts-config/tsc-no-fall-through-cases-in-switch.rule';
import {TscNoImplicitOverrideRule} from './ts-config/tsc-no-implicit-override.rule';
import {TscNoImplicitReturnsRule} from './ts-config/tsc-no-implicit-returns.rule';
import {TscNoPropertyAccessFromIndexSignatureRule} from './ts-config/tsc-no-property-access-from-index-signature.rule';
import {TscNoUncheckedIndexedAccessRule} from './ts-config/tsc-no-unchecked-indexed-access.rule';
import {TscUseDefineForClassFieldsRule} from './ts-config/tsc-use-define-for-class-fields.rule';
import {NoMomentJsRule} from './no-moment-js';
import {PackageForceAbsoluteVersionDependenciesRule} from './package/package-force-absolute-version-dependencies.rule';
import {NoPromiseAllRule} from './no-promise-all';

export const rules: Record<string, Rule.RuleModule> = {
    'package-force-private': PackageForcePrivateRule,
    'package-force-absolute-version-dependencies': PackageForceAbsoluteVersionDependenciesRule,
    'tsc-allow-unreachable-code': TscAllowUnreachableCodeRule,
    'tsc-allow-unused-labels': TscAllowUnusedLabelsRule,
    'tsc-es-module-interop': TscEsModuleInteropRule,
    'tsc-exact-optional-property-types': TscExactOptionalPropertyTypesRule,
    'tsc-force-consistent-casing-in-file-names': TscForceConsistentCasingInFileNamesRule,
    'tsc-import-helpers': TscImportHelpersRule,
    'tsc-imports-not-used-as-values': TscImportsNotUsedAsValuesRule,
    'tsc-isolated-modules': TscIsolatedModulesRule,
    'tsc-no-fall-through-cases-in-switch': TscNoFallThroughCasesInSwitchRule,
    'tsc-no-implicit-override': TscNoImplicitOverrideRule,
    'tsc-no-implicit-returns': TscNoImplicitReturnsRule,
    'tsc-no-property-access-from-index-signature': TscNoPropertyAccessFromIndexSignatureRule,
    'tsc-no-unchecked-indexed-access': TscNoUncheckedIndexedAccessRule,
    'tsc-strict': TscStrictRule,
    'tsc-use-define-for-class-fields': TscUseDefineForClassFieldsRule,
    'no-moment-js': NoMomentJsRule,
    'no-promise-all': NoPromiseAllRule,
};

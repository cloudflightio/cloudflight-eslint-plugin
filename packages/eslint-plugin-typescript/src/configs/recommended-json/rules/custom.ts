import { Linter } from 'eslint';
import { tscStrict } from './custom/tsc-strict';
import { tscAllowUnreachableCode } from './custom/tsc-allow-unreachable-code';
import { tscAllowUnusedLabels } from './custom/tsc-allow-unused-labels';
import { tscEsModuleInterop } from './custom/tsc-es-module-interop';
import { tscExactOptionalPropertyTypes } from './custom/tsc-exact-optional-property-types';
import { tscForceConsistentCasingInFileNames } from './custom/tsc-force-consistent-casing-in-file-names';
import { tscImportHelpers } from './custom/tsc-import-helpers';
import { tscImportsNotUsedAsValues } from './custom/tsc-imports-not-used-as-values';
import { tscIsolatedModules } from './custom/tsc-isolated-modules';
import { tscNoFallThroughCasesInSwitch } from './custom/tsc-no-fall-through-cases-in-switch';
import { tscNoUnusedParameters } from './custom/tsc-no-unused-parameters';
import { tscNoImplicitOverride } from './custom/tsc-no-implicit-override';
import { tscNoImplicitReturns } from './custom/tsc-no-implicit-returns';
import { tscNoPropertyAccessFromIndexSignature } from './custom/tsc-no-property-access-from-index-signature';
import { tscNoUncheckedIndexedAccess } from './custom/tsc-no-unchecked-indexed-access';
import { tscUseDefineForClassFields } from './custom/tsc-use-define-for-class-fields';
import { tscNoUnusedLocals } from './custom/tsc-no-unused-locals';

const pluginPrefix = '@clf-internal/typescript';

export const customRules: Linter.RulesRecord = {
    [`${pluginPrefix}/${tscAllowUnreachableCode.name}`]: tscAllowUnreachableCode.options,
    [`${pluginPrefix}/${tscAllowUnusedLabels.name}`]: tscAllowUnusedLabels.options,
    [`${pluginPrefix}/${tscEsModuleInterop.name}`]: tscEsModuleInterop.options,
    [`${pluginPrefix}/${tscExactOptionalPropertyTypes.name}`]: tscExactOptionalPropertyTypes.options,
    [`${pluginPrefix}/${tscForceConsistentCasingInFileNames.name}`]: tscForceConsistentCasingInFileNames.options,
    [`${pluginPrefix}/${tscImportHelpers.name}`]: tscImportHelpers.options,
    [`${pluginPrefix}/${tscImportsNotUsedAsValues.name}`]: tscImportsNotUsedAsValues.options,
    [`${pluginPrefix}/${tscIsolatedModules.name}`]: tscIsolatedModules.options,
    [`${pluginPrefix}/${tscNoFallThroughCasesInSwitch.name}`]: tscNoFallThroughCasesInSwitch.options,
    [`${pluginPrefix}/${tscNoImplicitOverride.name}`]: tscNoImplicitOverride.options,
    [`${pluginPrefix}/${tscNoImplicitReturns.name}`]: tscNoImplicitReturns.options,
    [`${pluginPrefix}/${tscNoPropertyAccessFromIndexSignature.name}`]: tscNoPropertyAccessFromIndexSignature.options,
    [`${pluginPrefix}/${tscNoUncheckedIndexedAccess.name}`]: tscNoUncheckedIndexedAccess.options,
    [`${pluginPrefix}/${tscNoUnusedLocals.name}`]: tscNoUnusedLocals.options,
    [`${pluginPrefix}/${tscNoUnusedParameters.name}`]: tscNoUnusedParameters.options,
    [`${pluginPrefix}/${tscStrict.name}`]: tscStrict.options,
    [`${pluginPrefix}/${tscUseDefineForClassFields.name}`]: tscUseDefineForClassFields.options,
};

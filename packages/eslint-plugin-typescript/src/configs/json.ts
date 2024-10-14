import {Linter} from 'eslint';

import {TscAllowUnreachableCodeRuleName} from '../../../rules/ts-config/tsc-allow-unreachable-code.rule';
import {TscAllowUnusedLabelsRuleName} from '../../../rules/ts-config/tsc-allow-unused-labels.rule';
import {TscEsModuleInteropRuleName} from '../../../rules/ts-config/tsc-es-module-interop.rule';
import {
    TscForceConsistentCasingInFileNamesRuleName,
} from '../../../rules/ts-config/tsc-force-consistent-casing-in-file-names.rule';
import {TscImportHelpersRuleName} from '../../../rules/ts-config/tsc-import-helpers.rule';
import {TscImportsNotUsedAsValuesRuleName} from '../../../rules/ts-config/tsc-imports-not-used-as-values.rule';
import {TscIsolatedModulesRuleName} from '../../../rules/ts-config/tsc-isolated-modules.rule';
import {TscNoFallThroughCasesInSwitchRuleName} from '../../../rules/ts-config/tsc-no-fall-through-cases-in-switch.rule';
import {TscNoImplicitOverrideRuleName} from '../../../rules/ts-config/tsc-no-implicit-override.rule';
import {TscNoImplicitReturnsRuleName} from '../../../rules/ts-config/tsc-no-implicit-returns.rule';
import {
    TscNoPropertyAccessFromIndexSignatureRuleName,
} from '../../../rules/ts-config/tsc-no-property-access-from-index-signature.rule';
import {TscNoUncheckedIndexedAccessRuleName} from '../../../rules/ts-config/tsc-no-unchecked-indexed-access.rule';
import {TscStrictRuleName} from '../../../rules/ts-config/tsc-strict.rule';
import {TscUseDefineForClassFieldsRuleName} from '../../../rules/ts-config/tsc-use-define-for-class-fields.rule';

const pluginPrefix = '@cloudflight/typescript';

export const customRules: Linter.RulesRecord = {
    [`${pluginPrefix}/${TscAllowUnreachableCodeRuleName}`]: ['error'],
    [`${pluginPrefix}/${TscAllowUnusedLabelsRuleName}`]: ['error'],
    [`${pluginPrefix}/${TscEsModuleInteropRuleName}`]: ['error'],
    [`${pluginPrefix}/${TscForceConsistentCasingInFileNamesRuleName}`]: ['error'],
    [`${pluginPrefix}/${TscImportHelpersRuleName}`]: ['error'],
    [`${pluginPrefix}/${TscImportsNotUsedAsValuesRuleName}`]: ['error'],
    [`${pluginPrefix}/${TscIsolatedModulesRuleName}`]: ['error'],
    [`${pluginPrefix}/${TscNoFallThroughCasesInSwitchRuleName}`]: ['error'],
    [`${pluginPrefix}/${TscNoImplicitOverrideRuleName}`]: ['error'],
    [`${pluginPrefix}/${TscNoImplicitReturnsRuleName}`]: ['error'],
    [`${pluginPrefix}/${TscNoPropertyAccessFromIndexSignatureRuleName}`]: ['error'],
    [`${pluginPrefix}/${TscNoUncheckedIndexedAccessRuleName}`]: ['error'],
    [`${pluginPrefix}/${TscStrictRuleName}`]: ['error'],
    [`${pluginPrefix}/${TscUseDefineForClassFieldsRuleName}`]: ['error'],
};

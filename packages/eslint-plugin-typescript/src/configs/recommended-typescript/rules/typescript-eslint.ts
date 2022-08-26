import { Linter } from 'eslint';
import { adjacentOverloadSignatures } from './@typescript-eslint/adjacent-overload-signatures';
import { arrayType } from './@typescript-eslint/array-type';
import { awaitThenable } from './@typescript-eslint/await-thenable';
import { banTsComment } from './@typescript-eslint/ban-ts-comment';
import { banTypes } from './@typescript-eslint/ban-types';
import { defaultParamLast } from './@typescript-eslint/default-param-last';
import { explicitFunctionReturnType } from './@typescript-eslint/explicit-function-return-type';
import { explicitMemberAccessibility } from './@typescript-eslint/explicit-member-accessibility';
import { memberDelimiterStyle } from './@typescript-eslint/member-delimiter-style';
import { memberOrdering } from './@typescript-eslint/member-ordering';
import { noArrayConstructor } from './@typescript-eslint/no-array-constructor';
import { noEmptyFunction } from './@typescript-eslint/no-empty-function';
import { noEmptyInterface } from './@typescript-eslint/no-empty-interface';
import { noExtraNonNullAssertion } from './@typescript-eslint/no-extra-non-null-assertion';
import { noFloatingPromises } from './@typescript-eslint/no-floating-promises';
import { noForInArray } from './@typescript-eslint/no-for-in-array';
import { noImplicitAnyCatch } from './@typescript-eslint/no-implicit-any-catch';
import { noInferrableTypes } from './@typescript-eslint/no-inferrable-types';
import { noInvalidThis } from './@typescript-eslint/no-invalid-this';
import { noInvalidVoidType } from './@typescript-eslint/no-invalid-void-type';
import { noMeaninglessVoidOperator } from './@typescript-eslint/no-meaningless-void-operator';
import { noMisusedNew } from './@typescript-eslint/no-misused-new';
import { noMisusedPromises } from './@typescript-eslint/no-misused-promises';
import { noNamespace } from './@typescript-eslint/no-namespace';
import { noNonNullAssertion } from './@typescript-eslint/no-non-null-assertion';
import { noRestrictedImports } from './@typescript-eslint/no-restricted-imports';
import { noShadow } from './@typescript-eslint/no-shadow';
import { noThrowLiteral } from './@typescript-eslint/no-throw-literal';
import { noUnnecessaryCondition } from './@typescript-eslint/no-unnecessary-condition';
import { noUnnecessaryTypeAssertion } from './@typescript-eslint/no-unnecessary-type-assertion';
import { noUnnecessaryTypeConstraint } from './@typescript-eslint/no-unnecessary-type-constraint';
import { noUnusedVars } from './@typescript-eslint/no-unused-vars';
import { noVarRequires } from './@typescript-eslint/no-var-requires';
import { preferAsConst } from './@typescript-eslint/prefer-as-const';
import { preferForOf } from './@typescript-eslint/prefer-for-of';
import { preferFunctionType } from './@typescript-eslint/prefer-function-type';
import { preferNullishCoalescing } from './@typescript-eslint/prefer-nullish-coalescing';
import { preferOptionalChain } from './@typescript-eslint/prefer-optional-chain';
import { preferStringStartsEndsWith } from './@typescript-eslint/prefer-string-starts-ends-with';
import { promiseFunctionAsync } from './@typescript-eslint/promise-function-async';
import { quotes } from './@typescript-eslint/quotes';
import { requireArraySortCompare } from './@typescript-eslint/require-array-sort-compare';
import { semi } from './@typescript-eslint/semi';
import { tripleSlashReference } from './@typescript-eslint/triple-slash-reference';
import { typeAnnotationSpacing } from './@typescript-eslint/type-annotation-spacing';
import { unifiedSignatures } from './@typescript-eslint/unified-signatures';
import { noExplicitAny } from './@typescript-eslint/no-explicit-any';

const pluginPrefix = '@typescript-eslint';

export const typescriptEslintRules: Linter.RulesRecord = {
    [`${pluginPrefix}/${adjacentOverloadSignatures.name}`]: adjacentOverloadSignatures.options,
    [`${pluginPrefix}/${arrayType.name}`]: arrayType.options,
    [`${pluginPrefix}/${awaitThenable.name}`]: awaitThenable.options,
    [`${pluginPrefix}/${banTsComment.name}`]: banTsComment.options,
    [`${pluginPrefix}/${banTypes.name}`]: banTypes.options,
    [`${defaultParamLast.name}`]: 'off',
    [`${pluginPrefix}/${defaultParamLast.name}`]: defaultParamLast.options,
    [`${pluginPrefix}/${explicitFunctionReturnType.name}`]: explicitFunctionReturnType.options,
    [`${pluginPrefix}/${explicitMemberAccessibility.name}`]: explicitMemberAccessibility.options,
    [`${pluginPrefix}/${memberDelimiterStyle.name}`]: memberDelimiterStyle.options,
    [`${pluginPrefix}/${memberOrdering.name}`]: memberOrdering.options,
    [`${pluginPrefix}/${noArrayConstructor.name}`]: noArrayConstructor.options,
    [`${noEmptyFunction.name}`]: 'off',
    [`${pluginPrefix}/${noEmptyFunction.name}`]: noEmptyFunction.options,
    [`${pluginPrefix}/${noEmptyInterface.name}`]: noEmptyInterface.options,
    [`${pluginPrefix}/${noExplicitAny.name}`]: noExplicitAny.options,
    [`${pluginPrefix}/${noExtraNonNullAssertion.name}`]: noExtraNonNullAssertion.options,
    [`${pluginPrefix}/${noFloatingPromises.name}`]: noFloatingPromises.options,
    [`${pluginPrefix}/${noForInArray.name}`]: noForInArray.options,
    [`${pluginPrefix}/${noImplicitAnyCatch.name}`]: noImplicitAnyCatch.options,
    [`${pluginPrefix}/${noInferrableTypes.name}`]: noInferrableTypes.options,
    [`${noInvalidThis.name}`]: 'off',
    [`${pluginPrefix}/${noInvalidThis.name}`]: noInvalidThis.options,
    [`${pluginPrefix}/${noInvalidVoidType.name}`]: noInvalidVoidType.options,
    [`${pluginPrefix}/${noMeaninglessVoidOperator.name}`]: noMeaninglessVoidOperator.options,
    [`${pluginPrefix}/${noMisusedNew.name}`]: noMisusedNew.options,
    [`${pluginPrefix}/${noMisusedPromises.name}`]: noMisusedPromises.options,
    [`${pluginPrefix}/${noNamespace.name}`]: noNamespace.options,
    [`${pluginPrefix}/${noNonNullAssertion.name}`]: noNonNullAssertion.options,
    [`${noRestrictedImports.name}`]: 'off',
    [`${pluginPrefix}/${noRestrictedImports.name}`]: noRestrictedImports.options,
    [`${noShadow.name}`]: 'off',
    [`${pluginPrefix}/${noShadow.name}`]: noShadow.options,
    [`${noThrowLiteral.name}`]: 'off',
    [`${pluginPrefix}/${noThrowLiteral.name}`]: noThrowLiteral.options,
    [`${pluginPrefix}/${noUnnecessaryCondition.name}`]: noUnnecessaryCondition.options,
    [`${pluginPrefix}/${noUnnecessaryTypeAssertion.name}`]: noUnnecessaryTypeAssertion.options,
    [`${pluginPrefix}/${noUnnecessaryTypeConstraint.name}`]: noUnnecessaryTypeConstraint.options,
    [`${noUnusedVars.name}`]: 'off',
    [`${pluginPrefix}/${noUnusedVars.name}`]: noUnusedVars.options,
    [`${pluginPrefix}/${noVarRequires.name}`]: noVarRequires.options,
    [`${pluginPrefix}/${preferAsConst.name}`]: preferAsConst.options,
    [`${pluginPrefix}/${preferForOf.name}`]: preferForOf.options,
    [`${pluginPrefix}/${preferFunctionType.name}`]: preferFunctionType.options,
    [`${pluginPrefix}/${preferNullishCoalescing.name}`]: preferNullishCoalescing.options,
    [`${pluginPrefix}/${preferOptionalChain.name}`]: preferOptionalChain.options,
    [`${pluginPrefix}/${preferStringStartsEndsWith.name}`]: preferStringStartsEndsWith.options,
    [`${pluginPrefix}/${promiseFunctionAsync.name}`]: promiseFunctionAsync.options,
    [`${quotes.name}`]: 'off',
    [`${pluginPrefix}/${quotes.name}`]: quotes.options,
    [`${pluginPrefix}/${requireArraySortCompare.name}`]: requireArraySortCompare.options,
    [`${semi.name}`]: 'off',
    [`${pluginPrefix}/${semi.name}`]: semi.options,
    [`${pluginPrefix}/${tripleSlashReference.name}`]: tripleSlashReference.options,
    [`${pluginPrefix}/${typeAnnotationSpacing.name}`]: typeAnnotationSpacing.options,
    [`${pluginPrefix}/${unifiedSignatures.name}`]: unifiedSignatures.options,
};

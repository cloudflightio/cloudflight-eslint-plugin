import { Linter } from 'eslint';
import { noAsyncPromiseExecutor } from './eslint/no-async-promise-executor';
import { noDebugger } from './eslint/no-debugger';
import { noDupeElseIf } from './eslint/no-dupe-else-if';
import { noDuplicateCase } from './eslint/no-duplicate-case';
import { noDuplicateImports } from './eslint/no-duplicate-imports';
import { noExAssign } from './eslint/no-ex-assign';
import { noFallthrough } from './eslint/no-fallthrough';
import { noInvalidRegexp } from './eslint/no-invalid-regexp';
import { noMisleadingCharacterClass } from './eslint/no-misleading-character-class';
import { noPromiseExecutorReturn } from './eslint/no-promise-executor-return';
import { noSelfAssign } from './eslint/no-self-assign';
import { noSelfCompare } from './eslint/no-self-compare';
import { noUnsafeFinally } from './eslint/no-unsafe-finally';
import { noUnsafeNegation } from './eslint/no-unsafe-negation';
import { useIsnan } from './eslint/use-isnan';
import { complexity } from './eslint/complexity';
import { curly } from './eslint/curly';
import { maxClassesPerFile } from './eslint/max-classes-per-file';
import { noBitwise } from './eslint/no-bitwise';
import { noConsole } from './eslint/no-console';
import { noEmpty } from './eslint/no-empty';
import { noEval } from './eslint/no-eval';
import { noExtraSemi } from './eslint/no-extra-semi';
import { noNewFunc } from './eslint/no-new-func';
import { noParamReassign } from './eslint/no-param-reassign';
import { noSequences } from './eslint/no-sequences';
import { noUnusedLabels } from './eslint/no-unused-labels';
import { noUselessCatch } from './eslint/no-useless-catch';
import { noVar } from './eslint/no-var';
import { objectShorthand } from './eslint/object-shorthand';
import { preferConst } from './eslint/prefer-const';
import { preferPromiseRejectErrors } from './eslint/prefer-promise-reject-errors';
import { quoteProps } from './eslint/quote-props';
import { radix } from './eslint/radix';
import { requireYield } from './eslint/require-yield';
import { eolLast } from './eslint/eol-last';
import { newParens } from './eslint/new-parens';
import { noTrailingSpaces } from './eslint/no-trailing-spaces';
import { maxLen } from './eslint/max-len';
import { eqeqeq } from './eslint/eqeqeq';

export const eslintRules: Linter.RulesRecord = {
    [complexity.name]: complexity.options,
    [curly.name]: curly.options,
    [eolLast.name]: eolLast.options,
    [eqeqeq.name]: eqeqeq.options,
    [maxClassesPerFile.name]: maxClassesPerFile.options,
    [maxLen.name]: maxLen.options,
    [newParens.name]: newParens.options,
    [noAsyncPromiseExecutor.name]: noAsyncPromiseExecutor.options,
    [noBitwise.name]: noBitwise.options,
    [noConsole.name]: noConsole.options,
    [noDebugger.name]: noDebugger.options,
    [noDupeElseIf.name]: noDupeElseIf.options,
    [noDuplicateCase.name]: noDuplicateCase.options,
    [noDuplicateImports.name]: noDuplicateImports.options,
    [noEmpty.name]: noEmpty.options,
    [noEval.name]: noEval.options,
    [noExAssign.name]: noExAssign.options,
    [noExtraSemi.name]: noExtraSemi.options,
    [noFallthrough.name]: noFallthrough.options,
    [noInvalidRegexp.name]: noInvalidRegexp.options,
    [noMisleadingCharacterClass.name]: noMisleadingCharacterClass.options,
    [noNewFunc.name]: noNewFunc.options,
    [noParamReassign.name]: noParamReassign.options,
    [noPromiseExecutorReturn.name]: noPromiseExecutorReturn.options,
    [noSelfAssign.name]: noSelfAssign.options,
    [noSelfCompare.name]: noSelfCompare.options,
    [noSequences.name]: noSequences.options,
    [noTrailingSpaces.name]: noTrailingSpaces.options,
    [noUnsafeFinally.name]: noUnsafeFinally.options,
    [noUnsafeNegation.name]: noUnsafeNegation.options,
    [noUnusedLabels.name]: noUnusedLabels.options,
    [noUselessCatch.name]: noUselessCatch.options,
    [noVar.name]: noVar.options,
    [objectShorthand.name]: objectShorthand.options,
    [preferConst.name]: preferConst.options,
    [preferPromiseRejectErrors.name]: preferPromiseRejectErrors.options,
    [quoteProps.name]: quoteProps.options,
    [radix.name]: radix.options,
    [requireYield.name]: requireYield.options,
    [useIsnan.name]: useIsnan.options,
};

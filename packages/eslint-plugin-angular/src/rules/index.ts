import {TSESLint} from '@typescript-eslint/utils';

import {imgUsesNgsrcRule, imgUsesNgsrcRuleName} from './img-uses-ngsrc';

export const rules: Record<string, TSESLint.RuleModule<string, readonly unknown[]>> = {
    [imgUsesNgsrcRuleName]: imgUsesNgsrcRule,
};

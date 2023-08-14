import {TSESLint} from '@typescript-eslint/utils';

import {imgUsesNgsrcRuleName} from '../../../rules/img-uses-ngsrc';

const pluginPrefix = '@cloudflight/angular';

export const customRules: TSESLint.Linter.RulesRecord = {
    [`${pluginPrefix}/${imgUsesNgsrcRuleName}`]: ['error'],
};

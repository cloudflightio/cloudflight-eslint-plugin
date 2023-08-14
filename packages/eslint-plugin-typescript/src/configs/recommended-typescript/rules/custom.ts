import {TSESLint} from '@typescript-eslint/utils';

import {NoMomentJsRuleName} from '../../../rules/no-moment-js';
import {NoOnEventAssignName} from '../../../rules/no-on-event-assign';

const pluginPrefix = '@cloudflight/typescript';

export const customRules: TSESLint.Linter.RulesRecord = {
    [`${pluginPrefix}/${NoMomentJsRuleName}`]: ['error'],
    [`${pluginPrefix}/${NoOnEventAssignName}`]: ['error'],
};

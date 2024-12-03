import type {TSESLint} from '@typescript-eslint/utils';

import {NoOnEventAssignName} from '../rules/typescript/no-on-event-assign';

const pluginPrefix = '@cloudflight/typescript';

export const customRules: TSESLint.Linter.RulesRecord = {
    [`${pluginPrefix}/${NoOnEventAssignName}`]: ['error'],
};

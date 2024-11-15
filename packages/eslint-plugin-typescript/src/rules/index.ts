import {TSESLint} from '@typescript-eslint/utils';

import {NoMomentJsRule, NoMomentJsRuleName} from './typescript/no-moment-js';
import {NoOnEventAssign, NoOnEventAssignName} from './typescript/no-on-event-assign';

const rules: Record<string, TSESLint.RuleModule<string, readonly unknown[]>> = {
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

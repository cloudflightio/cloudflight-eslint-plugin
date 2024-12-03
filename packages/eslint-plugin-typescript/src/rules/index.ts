import {TSESLint} from '@typescript-eslint/utils';

import {NoOnEventAssign, NoOnEventAssignName} from './typescript/no-on-event-assign';

const rules: Record<string, TSESLint.RuleModule<string, readonly unknown[]>> = {
    [NoOnEventAssignName]: NoOnEventAssign,
};

export const cloudflightTypescriptPlugin: TSESLint.FlatConfig.Plugin = {
    meta: {
        name: '@cloudflight/typescript',
        version: 'see package.json file',
    },
    rules,
};

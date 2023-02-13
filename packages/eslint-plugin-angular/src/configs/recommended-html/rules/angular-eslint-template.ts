import { Linter } from 'eslint';

const pluginPrefix = '@angular-eslint/template';

export const angularTemplateEslintRules: Linter.RulesRecord = {
    [`${pluginPrefix}/banana-in-box`]: ['error'],
    [`${pluginPrefix}/eqeqeq`]: [
        'off', // disable it for now since it does not work correctly
        {
            allowNullOrUndefined: true,
        },
    ],
    [`${pluginPrefix}/no-any`]: ['error'],
    [`${pluginPrefix}/no-negated-async`]: ['error'],
};

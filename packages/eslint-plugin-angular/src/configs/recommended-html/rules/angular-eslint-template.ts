import {Linter} from 'eslint';

const pluginPrefix = '@angular-eslint/template';

export const angularTemplateEslintRules: Linter.RulesRecord = {
    [`${pluginPrefix}/alt-text`]: ['error'],
    [`${pluginPrefix}/banana-in-box`]: ['error'],
    [`${pluginPrefix}/button-has-type`]: ['error'],
    [`${pluginPrefix}/elements-content`]: ['error'],
    [`${pluginPrefix}/eqeqeq`]: [
        'off', // disable it for now since it does not work correctly
        {
            allowNullOrUndefined: true,
        },
    ],
    [`${pluginPrefix}/interactive-supports-focus`]: ['error'],
    [`${pluginPrefix}/no-any`]: ['error'],
    [`${pluginPrefix}/no-call-expression`]: [
        'error',
        {
            // support for transloco
            allowList: ['t'],
        },
    ],
    [`${pluginPrefix}/no-duplicate-attributes`]: ['error'],
    [`${pluginPrefix}/no-inline-styles`]: ['error'],
    [`${pluginPrefix}/no-interpolation-in-attributes`]: ['error'],
    [`${pluginPrefix}/no-negated-async`]: ['error'],
    [`${pluginPrefix}/no-positive-tabindex`]: ['error'],
    [`${pluginPrefix}/role-has-required-aria`]: ['error'],
    [`${pluginPrefix}/valid-aria`]: ['error'],
};

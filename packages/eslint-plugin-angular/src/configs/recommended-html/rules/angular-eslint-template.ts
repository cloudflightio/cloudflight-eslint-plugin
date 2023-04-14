import { Linter } from 'eslint';

const pluginPrefix = '@angular-eslint/template';

export const angularTemplateEslintRules: Linter.RulesRecord = {
    [`${pluginPrefix}/accessibility-alt-text`]: ['error'],
    [`${pluginPrefix}/accessibility-elements-content`]: ['error'],
    [`${pluginPrefix}/accessibility-interactive-supports-focus`]: ['error'],
    [`${pluginPrefix}/accessibility-label-has-associated-control`]: ['error'],
    [`${pluginPrefix}/accessibility-role-has-required-aria`]: ['error'],
    [`${pluginPrefix}/accessibility-valid-aria`]: ['error'],
    [`${pluginPrefix}/banana-in-box`]: ['error'],
    [`${pluginPrefix}/button-has-type`]: ['error'],
    [`${pluginPrefix}/eqeqeq`]: [
        'off', // disable it for now since it does not work correctly
        {
            allowNullOrUndefined: true,
        },
    ],
    [`${pluginPrefix}/no-any`]: ['error'],
    [`${pluginPrefix}/no-call-expression`]: ['error'],
    [`${pluginPrefix}/no-duplicate-attributes`]: ['error'],
    [`${pluginPrefix}/no-inline-styles`]: ['error'],
    [`${pluginPrefix}/no-interpolation-in-attributes`]: ['error'],
    [`${pluginPrefix}/no-negated-async`]: ['error'],
    [`${pluginPrefix}/no-positive-tabindex`]: ['error'],
};

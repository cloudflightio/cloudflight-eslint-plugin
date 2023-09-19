import {TSESLint} from '@typescript-eslint/utils';

const pluginPrefix = '@angular-eslint/template';

export const angularTemplateEslintRules: TSESLint.Linter.RulesRecord = {
    [`${pluginPrefix}/button-has-type`]: ['error'],
    [`${pluginPrefix}/eqeqeq`]: [
        'off', // disable it for now since it does not work correctly
        {
            allowNullOrUndefined: true,
        },
    ],
    // does not work with custom input components
    [`${pluginPrefix}/label-has-associated-control`]: 'off',
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
    [`${pluginPrefix}/no-positive-tabindex`]: ['error'],
    [`${pluginPrefix}/prefer-ngsrc`]: 'error',
    // does not provide any value for primitive types
    // it is fine to not have this automated for now
    // since it is a performance improvement and not a bug
    [`${pluginPrefix}/use-track-by-function`]: 'off',
};

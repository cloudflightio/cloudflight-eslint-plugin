import {TSESLint} from '@typescript-eslint/utils';

const pluginPrefix = '@angular-eslint/template';

export const formatAngularTemplateEslintRules: TSESLint.Linter.RulesRecord = {
    [`${pluginPrefix}/attributes-order`]: 'error',
    [`${pluginPrefix}/no-interpolation-in-attributes`]: 'error',
};

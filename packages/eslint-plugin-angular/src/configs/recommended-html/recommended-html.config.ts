import {TSESLint} from '@typescript-eslint/utils';

import {angularTemplateEslintRules} from './rules/angular-eslint-template';
import {customRules} from './rules/custom';
import {formatAngularTemplateEslintRules} from './rules/format';

export const RecommendedHtmlConfig: TSESLint.Linter.Config = {
    plugins: ['@cloudflight/angular', '@angular-eslint/template'],
    parser: '@angular-eslint/template-parser',
    extends: ['plugin:@angular-eslint/template/accessibility', 'plugin:@angular-eslint/template/recommended'],
    rules: {
        ...angularTemplateEslintRules,
        ...customRules,
    },
};

export const FormattingHtmlConfig: TSESLint.Linter.Config = {
    plugins: ['@cloudflight/angular', '@angular-eslint/template'],
    parser: '@angular-eslint/template-parser',
    extends: [],
    rules: {
        ...formatAngularTemplateEslintRules,
    },
};

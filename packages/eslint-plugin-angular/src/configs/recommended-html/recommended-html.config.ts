import {TSESLint} from '@typescript-eslint/utils';

import {angularTemplateEslintRules} from './rules/angular-eslint-template';
import {customRules} from './rules/custom';

export const RecommendedHtmlConfig: TSESLint.Linter.Config = {
    plugins: ['@cloudflight/angular', '@angular-eslint/template'],
    parser: '@angular-eslint/template-parser',
    extends: [],
    rules: {
        ...angularTemplateEslintRules,
        ...customRules,
    },
};

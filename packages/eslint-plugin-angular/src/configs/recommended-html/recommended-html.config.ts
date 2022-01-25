import { Linter } from 'eslint';
import { angularTemplateEslintRules } from './rules/angular-eslint-template';

export const RecommendedHtmlConfig: Linter.BaseConfig = {
    plugins: ['@clf-internal/angular', '@angular-eslint/template'],
    parser: '@angular-eslint/template-parser',
    extends: [],
    rules: {
        ...angularTemplateEslintRules,
    },
};

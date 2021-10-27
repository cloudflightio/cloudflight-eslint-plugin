import { Linter } from 'eslint';

export const RecommendedHtmlConfig: Linter.BaseConfig = {
    plugins: ['@cloudflight/angular', '@angular-eslint/template-parser'],
    parser: '@angular-eslint/template-parser',
    extends: [],
    rules: {
        '@angular-eslint/template/banana-in-box': 'error',
        '@angular-eslint/template/no-negated-async': 'error',
    },
};

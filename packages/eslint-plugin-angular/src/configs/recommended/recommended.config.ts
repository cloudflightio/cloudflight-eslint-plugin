import {TSESLint} from '@typescript-eslint/utils';

export const RecommendedConfig: TSESLint.Linter.Config = {
    plugins: ['@cloudflight/angular'],
    overrides: [
        {
            files: ['*.html'],
            extends: ['plugin:@cloudflight/angular/recommended-html'],
        },
        {
            files: ['*.ts'],
            extends: ['plugin:@cloudflight/angular/recommended-typescript'],
        },
    ],
};

export const FormatConfig: TSESLint.Linter.Config = {
    plugins: ['@cloudflight/angular'],
    overrides: [
        {
            files: ['*.html'],
            extends: ['plugin:@cloudflight/angular/html-formatting'],
        },
        {
            files: ['*.ts'],
            extends: ['plugin:@cloudflight/typescript/formatting'],
        },
    ],
};

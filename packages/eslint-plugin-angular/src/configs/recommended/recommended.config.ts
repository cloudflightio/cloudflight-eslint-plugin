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

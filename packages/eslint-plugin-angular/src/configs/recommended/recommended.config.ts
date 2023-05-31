import {Linter} from 'eslint';

export const RecommendedConfig: Linter.BaseConfig = {
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

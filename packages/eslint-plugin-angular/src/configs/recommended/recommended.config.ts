import { Linter } from 'eslint';

export const RecommendedConfig: Linter.BaseConfig = {
    plugins: ['@clf-internal/angular'],
    overrides: [
        {
            files: ['*.html'],
            extends: ['plugin:@clf-internal/angular/recommended-html'],
        },
        {
            files: ['*.ts'],
            extends: ['plugin:@clf-internal/angular/recommended-typescript'],
        },
    ],
};

import { Linter } from 'eslint';

export const RecommendedConfig: Linter.BaseConfig = {
    plugins: ['@clf-internal/typescript'],
    overrides: [
        {
            files: ['tsconfig*(.*).json'],
            extends: ['plugin:@clf-internal/typescript/recommended-json'],
        },
        {
            files: ['*.ts'],
            extends: ['plugin:@clf-internal/typescript/recommended-typescript'],
        },
    ],
};

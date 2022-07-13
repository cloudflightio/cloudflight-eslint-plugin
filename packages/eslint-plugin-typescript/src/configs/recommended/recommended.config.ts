import { Linter } from 'eslint';

export const RecommendedConfig: Linter.BaseConfig = {
    plugins: ['@cloudflight/typescript'],
    overrides: [
        {
            files: ['tsconfig*(.*).json'],
            extends: ['plugin:@cloudflight/typescript/recommended-json'],
        },
        {
            files: ['*.ts'],
            extends: ['plugin:@cloudflight/typescript/recommended-typescript'],
        },
    ],
};

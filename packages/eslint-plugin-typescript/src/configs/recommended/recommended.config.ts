import { Linter } from 'eslint';

export const RecommendedConfig: Linter.BaseConfig = {
    plugins: ['@cloudflight/typescript'],
    overrides: [
        {
            files: ['tsconfig*(.*).json'],
            extends: ['plugin:@cloudflight/typescript/recommended-json'],
        },
        {
            files: ['*.ts', '*.tsx'],
            extends: ['plugin:@cloudflight/typescript/recommended-typescript'],
        },
        {
            files: ['package.json'],
            extends: ['plugin:@cloudflight/typescript/recommended-package'],
        },
    ],
};

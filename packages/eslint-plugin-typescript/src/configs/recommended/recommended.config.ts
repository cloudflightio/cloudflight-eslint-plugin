import {TSESLint} from '@typescript-eslint/utils';

export const RecommendedConfig: TSESLint.Linter.Config = {
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

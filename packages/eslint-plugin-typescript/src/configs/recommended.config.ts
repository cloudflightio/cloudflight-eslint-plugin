import { Linter } from 'eslint';

export const RecommendedConfig: Linter.BaseConfig = {
    plugins: ['@cloudflight/typescript'],
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            files: ['*.ts'],
            rules: {
                '@cloudflight/typescript/test-rule': 'warn',
            },
        },
    ],
};

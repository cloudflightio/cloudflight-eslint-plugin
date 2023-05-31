import {Linter} from 'eslint';
import {angularEslintRules} from './rules/angular-eslint';

export const RecommendedTypescriptConfig: Linter.BaseConfig = {
    plugins: ['@cloudflight/angular', '@cloudflight/typescript', '@angular-eslint'],
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@cloudflight/typescript/recommended'],
    rules: {
        ...angularEslintRules,
    },
};

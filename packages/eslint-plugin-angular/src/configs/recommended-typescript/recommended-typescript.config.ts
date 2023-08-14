import {TSESLint} from '@typescript-eslint/utils';

import {angularEslintRules} from './rules/angular-eslint';
import {typescriptEslintRules} from './rules/typescript-eslint';

export const RecommendedTypescriptConfig: TSESLint.Linter.Config = {
    plugins: ['@cloudflight/angular', '@cloudflight/typescript', '@angular-eslint'],
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@cloudflight/typescript/recommended'],
    rules: {
        ...angularEslintRules,
        ...typescriptEslintRules,
    },
};

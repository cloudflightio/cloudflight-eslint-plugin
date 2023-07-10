import {Linter} from 'eslint';
import {typescriptEslintRules} from './rules/typescript-eslint';
import {eslintRules} from './rules/eslint';
import {formatEslintRules} from './rules/format';
import {importEslintRules} from './rules/import';
import {customRules} from './rules/custom';
import {rxjsRules} from './rules/rxjs';

export const RecommendedTypescriptConfig: Linter.BaseConfig = {
    plugins: ['@cloudflight/typescript', '@typescript-eslint', 'import', 'rxjs'],
    parser: '@typescript-eslint/parser',
    extends: ['plugin:import/typescript'],
    rules: {
        ...formatEslintRules,
        ...eslintRules,
        ...typescriptEslintRules,
        ...importEslintRules,
        ...customRules,
        ...rxjsRules,
    },
};

export const FormattingTypescriptConfig: Linter.BaseConfig = {
    plugins: [],
    parser: '@typescript-eslint/parser',
    extends: [],
    rules: {
        ...formatEslintRules
    },
};

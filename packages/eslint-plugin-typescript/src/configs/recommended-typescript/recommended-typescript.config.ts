import {Linter} from 'eslint';

import {customRules} from './rules/custom';
import {eslintRules} from './rules/eslint';
import {formatEslintRules} from './rules/format';
import {importEslintRules} from './rules/import';
import {rxjsRules} from './rules/rxjs';
import {typescriptEslintRules} from './rules/typescript-eslint';

export const RecommendedTypescriptConfig: Linter.BaseConfig = {
    plugins: ['@cloudflight/typescript', '@typescript-eslint', 'import', 'rxjs'],
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:import/typescript',
    ],
    rules: {
        ...eslintRules,
        ...typescriptEslintRules,
        ...importEslintRules,
        ...customRules,
        ...rxjsRules,
    },
};

export const FormattingTypescriptConfig: Linter.BaseConfig = {
    plugins: ['import', 'simple-import-sort'],
    parser: '@typescript-eslint/parser',
    extends: [],
    rules: {
        ...formatEslintRules,
    },
};

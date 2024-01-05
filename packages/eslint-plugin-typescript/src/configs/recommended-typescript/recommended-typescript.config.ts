import {TSESLint} from '@typescript-eslint/utils';

import {customRules} from './rules/custom';
import {eslintRules} from './rules/eslint';
import {formatEslintRules} from './rules/format';
import {importEslintRules} from './rules/import';
import {rxjsRules} from './rules/rxjs';
import {typescriptEslintRules} from './rules/typescript-eslint';

/**
 * all plugins should be imported by both configs so eslint does not
 * complain about unknown rules when disabling some of them
 */

export const RecommendedTypescriptConfig: TSESLint.Linter.ConfigType = {
    plugins: ['@cloudflight/typescript', '@typescript-eslint', 'rxjs', 'import', 'simple-import-sort'],
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

export const FormattingTypescriptConfig: TSESLint.Linter.ConfigType = {
    plugins: ['@cloudflight/typescript', '@typescript-eslint', 'rxjs', 'import', 'simple-import-sort'],
    parser: '@typescript-eslint/parser',
    extends: [],
    rules: {
        ...formatEslintRules,
    },
};

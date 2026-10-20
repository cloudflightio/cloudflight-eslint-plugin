import type {TSESLint} from '@typescript-eslint/utils';

export const customRules: TSESLint.Linter.RulesRecord = {
    '@cloudflight/typescript/no-on-event-assign': 'error',
};

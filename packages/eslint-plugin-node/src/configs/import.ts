import {TSESLint} from '@typescript-eslint/utils';

export const importRules: TSESLint.Linter.RulesRecord = {
    // the node ecosystem loves to use default exports for some reason
    'import-x/no-named-as-default-member': 'off',
};

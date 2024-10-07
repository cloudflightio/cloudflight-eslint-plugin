import {TSESLint} from '@typescript-eslint/utils';

export const eslintRules: TSESLint.Linter.RulesRecord = {
    // router guards in angular accept the any type
    // making the parameters of declaration style guards unsafe
    // that is why we turn it off
    'func-style': 'off',
};

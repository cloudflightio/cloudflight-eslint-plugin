import {TSESLint} from '@typescript-eslint/utils';

const pluginPrefix = '@typescript-eslint';

export const typescriptEslintRules: TSESLint.Linter.RulesRecord = {
    // angular modules are usually empty, so this rule is turned off just for them
    [`${pluginPrefix}/no-extraneous-class`]: 'off',
};

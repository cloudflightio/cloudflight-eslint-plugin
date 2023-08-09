import type {Linter} from 'eslint';

const pluginPrefix = '@typescript-eslint';

export const typescriptEslintRules: Linter.RulesRecord = {
    // angular modules are usually empty, so this rule is turned off just for them
    [`${pluginPrefix}/no-extraneous-class`]: 'off',
};

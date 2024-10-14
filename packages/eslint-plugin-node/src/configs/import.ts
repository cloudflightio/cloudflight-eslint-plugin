import {TSESLint} from '@typescript-eslint/utils';

const pluginPrefix = 'import-x';

export const importEslintRules: TSESLint.Linter.RulesRecord = {
    // the node ecosystem loves to use default exports for some reason
    [`${pluginPrefix}/no-named-as-default-member`]: 'off',
};

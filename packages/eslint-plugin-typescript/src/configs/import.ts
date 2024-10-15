import {TSESLint} from '@typescript-eslint/utils';

const pluginPrefix = 'import-x';

export const importEslintRules: TSESLint.Linter.RulesRecord = {
    // computationally expensive and checked by typescript already
    [`${pluginPrefix}/namespace`]: 'off',
    [`${pluginPrefix}/first`]: ['error'],
    [`${pluginPrefix}/no-absolute-path`]: ['error'],
    [`${pluginPrefix}/no-cycle`]: ['error', {ignoreExternal: true}],
    [`${pluginPrefix}/no-mutable-exports`]: ['error'],
    [`${pluginPrefix}/no-useless-path-segments`]: ['error'],
    [`${pluginPrefix}/no-duplicates`]: ['error'],
    [`${pluginPrefix}/no-self-import`]: ['error'],
    [`${pluginPrefix}/export`]: ['error'],
};

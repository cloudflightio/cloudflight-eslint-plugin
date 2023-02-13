import { Linter } from 'eslint';

const pluginPrefix = 'import';

export const importEslintRules: Linter.RulesRecord = {
    [`${pluginPrefix}/first`]: ['error'],
    [`${pluginPrefix}/no-absolute-path`]: ['error'],
    [`${pluginPrefix}/no-cycle`]: ['error', { ignoreExternal: true }],
    [`${pluginPrefix}/no-mutable-exports`]: ['error'],
    [`${pluginPrefix}/no-unresolved`]: ['error'],
    [`${pluginPrefix}/no-useless-path-segments`]: ['error'],
};

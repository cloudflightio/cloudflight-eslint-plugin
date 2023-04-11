import { Linter } from 'eslint';

const pluginPrefix = '@cloudflight/typescript';

export const customRules: Linter.RulesRecord = {
    [`${pluginPrefix}/tsc-allow-unreachable-code`]: ['error'],
    [`${pluginPrefix}/tsc-allow-unused-labels`]: ['error'],
    [`${pluginPrefix}/tsc-es-module-interop`]: ['error'],
    [`${pluginPrefix}/tsc-exact-optional-property-types`]: ['error'],
    [`${pluginPrefix}/tsc-force-consistent-casing-in-file-names`]: ['error'],
    [`${pluginPrefix}/tsc-import-helpers`]: ['error'],
    [`${pluginPrefix}/tsc-imports-not-used-as-values`]: ['error'],
    [`${pluginPrefix}/tsc-isolated-modules`]: ['error'],
    [`${pluginPrefix}/tsc-no-fall-through-cases-in-switch`]: ['error'],
    [`${pluginPrefix}/tsc-no-implicit-override`]: ['error'],
    [`${pluginPrefix}/tsc-no-implicit-returns`]: ['error'],
    [`${pluginPrefix}/tsc-no-property-access-from-index-signature`]: ['error'],
    [`${pluginPrefix}/tsc-no-unchecked-indexed-access`]: ['error'],
    [`${pluginPrefix}/tsc-strict`]: ['error'],
    [`${pluginPrefix}/tsc-use-define-for-class-fields`]: ['error'],
};

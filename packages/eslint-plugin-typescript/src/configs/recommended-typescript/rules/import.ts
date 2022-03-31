import { Linter } from 'eslint';
import { noUnresolved } from './import/no-unresolved';
import { noAbsolutePath } from './import/no-absolute-path';
import { noCycle } from './import/no-cycle';
import { noUselessPathSegments } from './import/no-useless-path-segments';
import { noMutableExports } from './import/no-mutable-exports';
import { first } from './import/first';

const pluginPrefix = 'import';

export const importEslintRules: Linter.RulesRecord = {
    [`${pluginPrefix}/${first.name}`]: first.options,
    [`${pluginPrefix}/${noUnresolved.name}`]: noUnresolved.options,
    [`${pluginPrefix}/${noAbsolutePath.name}`]: noAbsolutePath.options,
    [`${pluginPrefix}/${noCycle.name}`]: noCycle.options,
    [`${pluginPrefix}/${noUselessPathSegments.name}`]: noUselessPathSegments.options,
    [`${pluginPrefix}/${noMutableExports.name}`]: noMutableExports.options,
};

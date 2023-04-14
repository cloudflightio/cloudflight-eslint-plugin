import { Linter } from 'eslint';

const pluginPrefix = 'rxjs';

export const rxjsRules: Linter.RulesRecord = {
    [`${pluginPrefix}/finnish`]: ['error'],
    [`${pluginPrefix}/no-async-subscribe`]: ['error'],
    [`${pluginPrefix}/no-connectable`]: ['error'],
    [`${pluginPrefix}/no-cyclic-action`]: ['error'],
    [`${pluginPrefix}/no-exposed-subjects`]: ['error'],
    [`${pluginPrefix}/no-ignored-observable`]: ['error'],
    [`${pluginPrefix}/no-ignored-replay-buffer`]: ['error'],
    [`${pluginPrefix}/no-ignored-subscribe`]: ['error'],
    [`${pluginPrefix}/no-ignored-subscription`]: ['error'],
    [`${pluginPrefix}/no-ignored-takewhile-value`]: ['error'],
    [`${pluginPrefix}/no-implicit-any-catch`]: ['error'],
    [`${pluginPrefix}/no-index`]: ['error'],
    [`${pluginPrefix}/no-internal`]: ['error'],
    [`${pluginPrefix}/no-nested-subscribe`]: ['error'],
    [`${pluginPrefix}/no-redundant-notify`]: ['error'],
    [`${pluginPrefix}/no-subclass`]: ['error'],
    [`${pluginPrefix}/no-subject-unsubscribe`]: ['error'],
    [`${pluginPrefix}/no-unbound-methods`]: ['error'],
    [`${pluginPrefix}/no-unsafe-catch`]: ['error'],
    [`${pluginPrefix}/no-unsafe-first`]: ['error'],
    [`${pluginPrefix}/no-unsafe-subject-next`]: ['error'],
    [`${pluginPrefix}/no-unsafe-switchmap`]: ['error'],
    [`${pluginPrefix}/no-unsafe-takeuntil`]: ['error'],
    [`${pluginPrefix}/throw-error`]: ['error'],
};

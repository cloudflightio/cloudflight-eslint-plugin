import {Linter} from 'eslint';

const pluginPrefix = '@angular-eslint';

export const angularEslintRules: Linter.RulesRecord = {
    [`${pluginPrefix}/component-class-suffix`]: [
        'error',
        {
            suffixes: ['Component', 'Page'],
        },
    ],
    [`${pluginPrefix}/contextual-decorator`]: ['error'],
    [`${pluginPrefix}/contextual-lifecycle`]: ['error'],
    [`${pluginPrefix}/directive-class-suffix`]: ['error'],
    [`${pluginPrefix}/no-attribute-decorator`]: ['error'],
    [`${pluginPrefix}/no-conflicting-lifecycle`]: ['error'],
    [`${pluginPrefix}/no-empty-lifecycle-method`]: ['error'],
    [`${pluginPrefix}/no-host-metadata-property`]: ['error'],
    [`${pluginPrefix}/no-input-rename`]: ['error'],
    [`${pluginPrefix}/no-inputs-metadata-property`]: ['error'],
    [`${pluginPrefix}/no-output-native`]: ['error'],
    [`${pluginPrefix}/no-output-on-prefix`]: ['error'],
    [`${pluginPrefix}/no-output-rename`]: ['error'],
    [`${pluginPrefix}/no-outputs-metadata-property`]: ['error'],
    [`${pluginPrefix}/no-queries-metadata-property`]: ['error'],
    [`${pluginPrefix}/prefer-on-push-component-change-detection`]: ['error'],
    [`${pluginPrefix}/prefer-output-readonly`]: ['error'],
    [`${pluginPrefix}/relative-url-prefix`]: ['error'],
    [`${pluginPrefix}/use-lifecycle-interface`]: ['error'],
    [`${pluginPrefix}/use-pipe-transform-interface`]: ['error'],
};

import {TSESLint} from '@typescript-eslint/utils';
// @ts-expect-error .d.ts file for eslint-plugin-vue has been implemented but not released yet
// if the following line fails to build after updating the version, simply remove this comment
import pluginVue from 'eslint-plugin-vue';

// .d.ts file for eslint-plugin-vue has been implemented but not released yet, if the
// following line fails to build after updating the version, simply remove this comment
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/consistent-type-assertions
const recommendedConfigArray = pluginVue.configs['flat/recommended'] as TSESLint.FlatConfig.ConfigArray;
const recommendedRules = recommendedConfigArray
    .reduce<Record<string, TSESLint.Linter.RuleEntry | undefined>>((acc, config) => ({...acc, ...config.rules}), {});
const updatedRules = Object.entries<TSESLint.Linter.RuleEntry | undefined>(recommendedRules)
    .filter((entry): entry is [string, TSESLint.Linter.RuleEntry] => entry[1] != null)
    .map(([key, value]) => [key, warningEntryToError(value)]);

export const vueRules: TSESLint.Linter.RulesRecord = {
    // yes, we know this works correctly
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    ...Object.fromEntries(updatedRules) as TSESLint.Linter.RulesRecord,
    'vue/block-lang': [
        'error',
        {
            script: {
                lang: 'ts',
            },
            style: {
                lang: 'scss',
            },
        },
    ],
    'vue/component-api-style': ['error', ['script-setup', 'composition']],
    'vue/define-emits-declaration': ['error', 'type-based'],
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/define-macros-order': [
        'error',
        {
            order: ['defineProps', 'defineEmits'],
        },
    ],
    'vue/html-button-has-type': 'error',
    'vue/no-ref-object-destructure': 'error',
    'vue/no-undef-properties': 'error',
    // disable stylistic rules
    'vue/html-indent': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': 'off',
};

function warningEntryToError(value: TSESLint.Linter.RuleEntry): TSESLint.Linter.RuleEntry {
    const level = Array.isArray(value) ? value[0] : value;
    const updatedLevel = warningLevelToError(level);

    return Array.isArray(value) ? [updatedLevel, ...value.slice(1)] : updatedLevel;
}

function warningLevelToError(level: TSESLint.Linter.RuleLevel): TSESLint.Linter.RuleLevel {
    if (level === 'warn') {
        return 'error';
    } else if (level === 1) {
        return 'error';
    }

    return level;
}

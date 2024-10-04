import {TSESLint} from '@typescript-eslint/utils';

const htmlIndent = 4;

export const vueRules: TSESLint.Linter.RulesRecord = {
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
    'vue/html-indent': ['error', htmlIndent],
    'vue/no-ref-object-destructure': 'error',
    'vue/no-undef-properties': 'error',
};

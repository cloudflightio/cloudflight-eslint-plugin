import { Linter } from 'eslint';

export const RecommendedConfig: Linter.BaseConfig = {
    extends: [
        'plugin:@cloudflight/typescript/recommended',
        'plugin:vue/vue3-recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier',
    ],
    rules: {
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
    },
};

import {configs} from '@cloudflight/eslint-plugin-typescript';
import {TSESLint} from '@typescript-eslint/utils';

const htmlIndent = 4;

export const RecommendedConfig: TSESLint.Linter.Config = {
    extends: [
        'plugin:@cloudflight/typescript/recommended',
        'plugin:vue/vue3-recommended',
        '@vue/eslint-config-typescript',
    ],
    rules: {...configs['recommended-typescript']?.rules ?? {},
        // vue.js components have the any type when used with typescript import
        // such as `import MyComponent from './my-component.vue'`
        '@typescript-eslint/no-unsafe-assignment': 'off',
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
        'vue/no-undef-properties': 'error'},
};

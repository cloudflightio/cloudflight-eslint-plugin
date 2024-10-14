import {TSESLint} from '@typescript-eslint/utils';

export const typescriptRules: TSESLint.Linter.RulesRecord = {
    // vue.js components have the any type when used with typescript import
    // such as `import MyComponent from './my-component.vue'`
    '@typescript-eslint/no-unsafe-assignment': 'off',
    // we still want to have one emit definition per line for `defineEmits`
    '@typescript-eslint/unified-signatures': 'off',
};

import { Linter } from 'eslint';

export const RecommendedTypescriptConfig: Linter.BaseConfig = {
    plugins: ['@cloudflight/angular', '@cloudflight/typescript', '@angular-eslint'],
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@cloudflight/typescript/recommended'],
    rules: {
        '@angular-eslint/contextual-lifecycle': 'error',
        '@angular-eslint/no-conflicting-lifecycle': 'error',
        '@angular-eslint/no-host-metadata-property': 'error',
        '@angular-eslint/no-input-rename': 'error',
        '@angular-eslint/no-inputs-metadata-property': 'error',
        '@angular-eslint/no-output-native': 'error',
        '@angular-eslint/no-output-on-prefix': 'error',
        '@angular-eslint/no-output-rename': 'error',
        '@angular-eslint/no-outputs-metadata-property': 'error',
        '@angular-eslint/use-lifecycle-interface': 'error',
        '@angular-eslint/use-pipe-transform-interface': 'error',
        '@angular-eslint/component-class-suffix': [
            'error',
            {
                suffixes: [
                    'Component',
                    'Page'
                ]
            }
        ],
        '@angular-eslint/directive-class-suffix': [
            'error',
            {
                suffixes: [
                    'Directive'
                ]
            }
        ],
    }
};

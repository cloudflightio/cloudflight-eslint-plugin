import {TSESLint} from '@typescript-eslint/utils';

export const angularRules: TSESLint.Linter.RulesRecord = {
    // the angular cli generates classes without suffix since angular 20
    '@angular-eslint/component-class-suffix': 'off',
    '@angular-eslint/contextual-decorator': 'error',
    '@angular-eslint/contextual-lifecycle': 'error',
    // like component-class-suffix
    '@angular-eslint/directive-class-suffix': 'off',
    '@angular-eslint/no-attribute-decorator': 'error',
    // no-conflicting-lifecycle was removed in angular-eslint v22
    '@angular-eslint/no-empty-lifecycle-method': 'error',
    '@angular-eslint/no-input-rename': 'error',
    '@angular-eslint/no-inputs-metadata-property': 'error',
    '@angular-eslint/no-output-native': 'error',
    '@angular-eslint/no-output-on-prefix': 'error',
    '@angular-eslint/no-output-rename': 'error',
    '@angular-eslint/no-outputs-metadata-property': 'error',
    '@angular-eslint/no-queries-metadata-property': 'error',
    '@angular-eslint/prefer-on-push-component-change-detection': 'error',
    '@angular-eslint/prefer-output-readonly': 'error',
    '@angular-eslint/relative-url-prefix': 'error',
    '@angular-eslint/use-lifecycle-interface': 'error',
    '@angular-eslint/use-pipe-transform-interface': 'error',
    '@angular-eslint/prefer-standalone': 'error',
    '@angular-eslint/prefer-signals': 'error',
    // angular does not await lifecycle hooks
    '@angular-eslint/no-async-lifecycle-method': 'error',
    // duplicates in imports or providers are mistakes
    '@angular-eslint/no-duplicates-in-metadata-arrays': 'error',
    // a signal without () in a condition is always truthy
    '@angular-eslint/no-uncalled-signals': 'error',
    // a computed without return is always undefined
    '@angular-eslint/computed-must-return': 'error',
    // takeUntilDestroyed() without a DestroyRef throws outside an injection context
    '@angular-eslint/no-implicit-take-until-destroyed': 'error',
    // angular does not call hooks defined as arrow function properties
    '@angular-eslint/require-lifecycle-on-prototype': 'error',
    // prefer-signals covers inputs and queries, this covers @Output
    '@angular-eslint/prefer-output-emitter-ref': 'error',
};

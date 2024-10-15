import type { Linter } from 'eslint';

declare const jsxA11y: {
    readonly flatConfigs: {
        readonly recommended: { readonly rules: Readonly<Linter.RulesRecord> };
        readonly strict: { readonly rules: Readonly<Linter.RulesRecord> };
    };
};

export = jsxA11y;

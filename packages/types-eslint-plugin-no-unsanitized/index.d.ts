import type { Linter } from 'eslint';

declare const nounsanitized: {
    readonly configs: {
        readonly recommended: { readonly rules: Readonly<Linter.RulesRecord> };
    };
};

export = nounsanitized;

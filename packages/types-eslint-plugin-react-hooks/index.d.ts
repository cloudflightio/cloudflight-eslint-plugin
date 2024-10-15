import type { Linter } from 'eslint';

declare const pluginReactHooks: {
    readonly configs: {
        readonly recommended: { readonly rules: Readonly<Linter.RulesRecord> };
    };
};

export = pluginReactHooks;

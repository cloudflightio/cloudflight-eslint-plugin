import type {Linter, Rule} from 'eslint';

declare const pluginSecurity: {
    readonly configs: {
        readonly recommended: {
            readonly rules: Readonly<Linter.RulesRecord>;
        };
    };
    readonly rules: Record<string, Rule.RuleModule>;
};

export = pluginSecurity;

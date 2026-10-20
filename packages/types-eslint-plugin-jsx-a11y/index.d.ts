import type {ESLint, Linter} from 'eslint';

declare const jsxA11y: {
    readonly flatConfigs: {
        readonly recommended: {
            readonly plugins: Readonly<Record<string, ESLint.Plugin>>;
            readonly rules: Readonly<Linter.RulesRecord>;
        };
        readonly strict: {
            readonly plugins: Readonly<Record<string, ESLint.Plugin>>;
            readonly rules: Readonly<Linter.RulesRecord>;
        };
    };
};

export = jsxA11y;

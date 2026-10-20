# Cleancode ESLint Plugin

[![License](https://img.shields.io/badge/License-Apache_2.0-green.svg)](https://opensource.org/licenses/Apache-2.0)
![main](https://github.com/cloudflightio/cloudflight-eslint-plugin/actions/workflows/build.yml/badge.svg?branch=main)
[![@cloudflight/eslint-plugin-typescript](https://img.shields.io/npm/v/@cloudflight/eslint-plugin-typescript?label=@cloudflight/eslint-plugin-typescript)](https://www.npmjs.com/package/@cloudflight/eslint-plugin-typescript)
[![@cloudflight/eslint-plugin-angular](https://img.shields.io/npm/v/@cloudflight/eslint-plugin-angular?label=@cloudflight/eslint-plugin-angular)](https://www.npmjs.com/package/@cloudflight/eslint-plugin-angular)
[![@cloudflight/eslint-plugin-vue](https://img.shields.io/npm/v/@cloudflight/eslint-plugin-vue?label=@cloudflight/eslint-plugin-vue)](https://www.npmjs.com/package/@cloudflight/eslint-plugin-vue)
[![@cloudflight/eslint-plugin-react](https://img.shields.io/npm/v/@cloudflight/eslint-plugin-react?label=@cloudflight/eslint-plugin-react)](https://www.npmjs.com/package/@cloudflight/eslint-plugin-react)
[![@cloudflight/eslint-plugin-node](https://img.shields.io/npm/v/@cloudflight/eslint-plugin-node?label=@cloudflight/eslint-plugin-node)](https://www.npmjs.com/package/@cloudflight/eslint-plugin-node)

This repository contains multiple ESLint plugins & configs to enforce rules for clean code across Cloudflight projects.

## Installation

Please refer to the README's of each plugin to get started:

-   [@cloudflight/eslint-plugin-angular](packages/eslint-plugin-angular/README.md)
-   [@cloudflight/eslint-plugin-typescript](packages/eslint-plugin-typescript/README.md)
-   [@cloudflight/eslint-plugin-vue](packages/eslint-plugin-vue/README.md)
-   [@cloudflight/eslint-plugin-react](packages/eslint-plugin-react/README.md)
-   [@cloudflight/eslint-plugin-node](packages/eslint-plugin-node/README.md)

## Upgrading from 1.x

Version 2 requires ESLint 10.4 or newer (flat config only), update `eslint` together with the packages; stay on 1.3.3
for ESLint 9. The Angular package requires Angular 22 and Node `^22.22.3 || ^24.15.0 || >=26.0.0`; stay on 1.3.3 for
Angular 21 and older.

1. **Deduplicate typescript-eslint.** Every `@typescript-eslint/utils` copy must be 8.56 or newer, the first release
   with ESLint 10 support. Older copies that an existing lockfile keeps nested, for example under angular-eslint or
   eslint-plugin-storybook, fail at config load with
   `TypeError: Class extends value undefined is not a constructor or null`.
   Yarn: `yarn dedupe '@typescript-eslint/*' typescript-eslint`; npm: check `npm ls @typescript-eslint/utils`.
2. **Remove your own `parserOptions.project` blocks.** Typed linting now uses the typescript-eslint project service. An
   own `parserOptions.project` after the Cloudflight config fails every TypeScript file with
   `Parsing error: Enabling "project" does nothing when "projectService" is enabled`. Move its list into `tsConfigFiles`
   (see [Custom Configuration](CUSTOM_CONFIGURATION.md)) to keep the old behaviour; projects that already pass
   `tsConfigFiles` keep it too. Without `tsConfigFiles`, a file is reported as `… was not found by the project service`
   when no `tsconfig.json` includes it or the root `tsconfig.json` does not reference the one that does; being imported
   by an included file is not enough.
3. Remove `/* eslint-env */` comments. ESLint 10 reports them as errors, in the format run too, where they block the
   pre-commit hook.
4. Import `includeIgnoreFile` from `eslint/config` instead of `@eslint/compat`, in the same import as `defineConfig` if
   your config already has one. The packages do not need `@eslint/compat`; remove it if nothing else in your config
   uses it.
5. If you import `cloudflightTypescriptImportConfig` or `cloudflightTypescriptDisableTypeCheckedConfig`, use
   `cloudflightTypescriptConfig` instead; both are no longer exported.
6. If your project uses the format config, switch `eslint.format.mjs` to the format config of your framework package;
   `cloudflightAngularFormatConfig` also formats the templates and `cloudflightReactFormatConfig` the JSX. Vue has no
   format config of its own and keeps `cloudflightTypescriptFormatConfig`. If your project lists
   `@cloudflight/eslint-plugin-typescript` itself, update it to the same version, otherwise the format run silently
   stays on the 1.x rules.
7. Then reformat once with `eslint -c eslint.format.mjs --fix .`: multiline enums get a trailing comma, the `?` and `:`
   of multiline conditionals start the line and React projects get their JSX formatted. Imports are sorted by
   import-x/order now: type imports first, then packages, aliases and relative imports, with a blank line between the
   groups and `./` before `../`. An import that would have to move across a side-effect import such as a polyfill or a
   stylesheet is reported instead, move it by hand. Move comments that sit between an operator and its operand above the
   line first, the fixer cannot handle them.

### Rule changes

**All packages**

-   rules of eslint-plugin-security and eslint-plugin-no-unsanitized are part of every config, three of them as
    warnings; the Node config had them before
-   the base, security, import and format rules also apply to `.jsx` and `.tsx` files
-   JavaScript files are linted without type information and keep the core rules the compiler covers in
    TypeScript files, such as `no-undef`
-   `.cjs` files are linted as CommonJS and may use `require`
-   ESLint 10 adds `no-unassigned-vars`, `no-useless-assignment` and `preserve-caught-error` to its recommended rules,
    and `no-shadow-restricted-names` also reports `globalThis`
-   typescript-eslint 8.70 adds `@typescript-eslint/no-generated-empty-object-type` to its strict preset
-   `no-duplicate-imports` is replaced by `import-x/no-duplicates`, which accepts an `import type` next to a value
    import from the same module
-   `@typescript-eslint/non-nullable-type-assertion-style` is off, its fix wrote a `!` that `no-non-null-assertion`
    reports
-   `no-magic-numbers` ignores enum values, numeric literal types, readonly class properties and type indexes
-   unused disable comments are no longer reported, in the lint run a comment for a format rule looks unused and
    `--fix` would delete it

**Angular**

-   `@angular-eslint/no-conflicting-lifecycle` no longer exists, remove disable comments naming it
-   `prefer-inject` and the template rule `prefer-control-flow` come with the recommended presets of angular-eslint 22
-   `prefer-on-push-component-change-detection` no longer reports components without a `changeDetection` setting,
    OnPush is the default in Angular 22; `ng update` adds `ChangeDetectionStrategy.Eager` to existing components,
    which it reports
-   newly enabled are `no-uncalled-signals`, `no-async-lifecycle-method`, `no-duplicates-in-metadata-arrays`,
    `computed-must-return`, `require-lifecycle-on-prototype`, `no-implicit-take-until-destroyed`,
    `prefer-output-emitter-ref` and the template rules `eqeqeq`, `conditional-complexity`, `cyclomatic-complexity`,
    `prefer-class-binding`, `prefer-style-binding`, `prefer-template-literal`, `no-non-null-assertion`,
    `no-empty-control-flow`, `no-nested-tags` and `no-outerhtml`
-   the template rule `no-inline-styles` no longer reports style bindings to a non-constant value such as
    `[style.width.px]="width"`, which `prefer-style-binding` asks for instead of `[ngStyle]`
-   the new `cloudflightAngularFormatConfig` also formats templates: attribute order, self-closing tags and
    `title="text"` instead of `[title]="'text'"`
-   `component-class-suffix` and `directive-class-suffix` are off, the Angular CLI generates classes without
    suffixes since Angular 20
-   the `bypassSecurityTrust*` methods of the `DomSanitizer` are reported, they insert the value without sanitizing

**React**

-   `react-hooks/component-hook-factories` is no longer part of the react-hooks preset
-   `react-hooks/void-use-memo` is off, the config uses the stable `recommended` preset instead of
    `recommended-latest`
-   `react/no-danger` reports `dangerouslySetInnerHTML`, like `no-unsanitized` reports `innerHTML`
-   `react/jsx-fragments` is off, `<>` is allowed

**Node**

-   `n/no-unpublished-bin` is no longer part of the eslint-plugin-n preset
-   `n/no-sync` is off in JavaScript files, eslint-plugin-n 18 needs type information for it
-   the `.js` files of a CommonJS package are linted as CommonJS too
-   `n/hashbang` is off in TypeScript files, its fix deleted the shebang of a CLI

## Contributing

-   [Contributing to the project](CONTRIBUTING.md)

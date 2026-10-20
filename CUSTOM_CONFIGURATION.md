
# Custom Configuration
These configs are intended to be used as is without any customization, but we do recognize that some projects may have special requirements.

## Custom tsconfig files
By default, typed linting uses the [typescript-eslint project service](https://typescript-eslint.io/packages/parser/#projectservice),
which automatically discovers the closest `tsconfig.json` for every linted file. Most projects should not need any tsconfig configuration.

If automatic discovery does not fit your layout (for example when linting relies on tsconfig files
not named `tsconfig.json`), you can provide explicit tsconfig files like this:

```js
// this applies to all configs, not just typescript
import {cloudflightTypescriptConfig} from '@cloudflight/eslint-plugin-typescript';

export default [
    ...cloudflightTypescriptConfig({
        rootDirectory: import.meta.dirname,
        tsConfigFiles: ['./packages/*/tsconfig.json', './packages/*/tsconfig.spec.json'],
    }),
];
```
**Try to keep the list of TSConfig files as short as possible, they have a negative effect on performance**

`rootDirectory` must be the absolute project/config directory. Explicit `tsConfigFiles` paths and globs
are resolved against it for both typed parsing and import resolution, independently of the shell's
working directory. Without `tsConfigFiles`, files below a nested `tsconfig.json` resolve their imports
through that project, like the project service, so the aliases of nested projects resolve in monorepos
and unrelated projects do not take part.
Setting `tsConfigFiles` switches typed linting back to `parserOptions.project` (the 1.x behaviour), including in Vue.
Do not set `parserOptions.project` or `projectService` yourself: an own `parserOptions.project` after the Cloudflight
config fails with `Parsing error: Enabling "project" does nothing when "projectService" is enabled`.
JavaScript/JSX tooling files use untyped linting and do not need to be included in a TypeScript project.
They keep the core rules that the compiler covers in TypeScript files, such as `no-undef`, with Node.js and
browser globals declared. Files that rely on other globals declare them in the project config (install `globals`
as your own devDependency), for example Jest test files:

```js
import {cloudflightTypescriptConfig} from '@cloudflight/eslint-plugin-typescript';
import globals from 'globals';

export default [
    ...cloudflightTypescriptConfig({rootDirectory: import.meta.dirname}),
    {files: ['**/*.spec.js'], languageOptions: {globals: globals.jest}},
];
```

Typed files outside their selected project are deliberately reported as configuration errors
(`… was not found by the project service`); add such files to a `tsconfig.json` or list your tsconfig files in `tsConfigFiles`.

## Adding additional plugins
Add additional things before the Cloudflight config, this prevents these plugins from overriding important config options.

**Note:** This might not work for all Plugins

```js
// this applies to all configs, not just typescript
import {cloudflightTypescriptConfig} from '@cloudflight/eslint-plugin-typescript';
import storybook from 'eslint-plugin-storybook';

export default [
    ...storybook.configs['flat/recommended'],
    ...cloudflightTypescriptConfig({
        rootDirectory: import.meta.dirname,
    }),
];
```

If your code has disable comments for the rules of such a plugin, register the plugin in `eslint.format.mjs` as well, without
rules. Otherwise the format run fails with `Definition for rule '…' was not found`.

```js
import {cloudflightTypescriptFormatConfig} from '@cloudflight/eslint-plugin-typescript';
import storybook from 'eslint-plugin-storybook';

export default [
    ...cloudflightTypescriptFormatConfig({
        rootDirectory: import.meta.dirname,
    }),
    {
        plugins: {storybook},
    },
];
```

## Disabling rules

```js
// this applies to all configs, not just typescript
import {cloudflightTypescriptConfig} from '@cloudflight/eslint-plugin-typescript';

export default [
    ...cloudflightTypescriptConfig({
        rootDirectory: import.meta.dirname,
    }),
    {
        rules: {
            'no-magic-numbers': 'off',
        },
    },
];
```

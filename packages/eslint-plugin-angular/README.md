# `@cloudflight/eslint-plugin-angular`

The Cloudflight ESLint Plugin for Angular provides multiple configurations of ESLint rules recommended by Cloudflight.

You can find the directory of all rules including their reasoning [here](src/configs).

## Dependencies

The following dependencies are required:

```
"eslint": "^10.4.0",
"typescript": ">=5.0.0 <6.1.0"
```

Node.js must satisfy `^22.22.3 || ^24.15.0 || >=26.0.0`.

Upgrading from 1.x? See [Upgrading from 1.x](https://github.com/cloudflightio/cloudflight-eslint-plugin#upgrading-from-1x).

This version requires Angular 22; stay on 1.3.3 for Angular 21 and older. Angular 22 applications must use TypeScript 6.0.x; the wider TypeScript peer covers the configuration library, not the Angular compiler.

## Usage

In your `package.json` add the following:

```json
"devDependencies": {
    ...
    "@cloudflight/eslint-plugin-angular": "<version>",
    ...
}
```

The plugin provides 2 different main configurations (linting and formatting):

- `cloudflightAngularConfig(settings)`: Both of the below 2 configurations
    - `cloudflightAngularTypescriptConfig(settings)`: The TypeScript config plus the Angular rules for TS files, inline templates are linted with the template rules
    - `cloudflightAngularTemplateConfig`: Only contains rules for HTML files
- `cloudflightAngularFormatConfig(settings)`: Both of the below 2 configurations
    - `cloudflightTypescriptFormatConfig(settings)` from `@cloudflight/eslint-plugin-typescript`: Only contains formatting rules for JavaScript and TypeScript files
    - `cloudflightAngularTemplateFormatConfig`: Only contains formatting rules for HTML files, inline templates are not format-checked

Now open your `eslint.config.mjs` and add one of the configurations:

```js
import {cloudflightAngularConfig} from '@cloudflight/eslint-plugin-angular';
import {includeIgnoreFile} from 'eslint/config';
import {resolve} from 'node:path';

export default [
    includeIgnoreFile(resolve(import.meta.dirname, '.gitignore')),
    ...cloudflightAngularConfig({
        rootDirectory: import.meta.dirname,
    }),
];
```
See [Custom Configuration](../../CUSTOM_CONFIGURATION.md) for more complicated project setups.

## Formatting

Create a new file called `eslint.format.mjs` and add the following:

```js
import {cloudflightAngularFormatConfig} from '@cloudflight/eslint-plugin-angular';
import {includeIgnoreFile} from 'eslint/config';
import {resolve} from 'node:path';

export default [
    includeIgnoreFile(resolve(import.meta.dirname, '.gitignore')),
    ...cloudflightAngularFormatConfig({
        rootDirectory: import.meta.dirname,
    }),
];
```

With the command `eslint -c eslint.format.mjs .` your project can be checked for formatting violations.

### Pre-Commit Hook

The reason we created another eslint config file just for formatting instead of adding it to the existing one is to separate between linting and formatting, which are two different concerns. Furthermore, with the separation we also gain the ability to fix the formatting automatically before commit. Automatically fixing linting bugs with `eslint --fix` is not recommended, since it changes the intent of the code.

To automatically format your code before committing, set up [husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged) with the following content in your `package.json`.

```json
{
    // ...
    "lint-staged": {
        "*.{js,jsx,mjs,cjs,ts,mts,cts,tsx,html}": "eslint -c eslint.format.mjs --fix"
    }
}
```

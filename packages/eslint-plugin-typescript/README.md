# `@cloudflight/eslint-plugin-typescript`

The Cloudflight ESLint Plugin Typescript provides a configuration of ESLint rules recommended by Cloudflight.

You can find the directory of all rules including their reasoning [here](src/configs).

## Dependencies

The following dependencies are required:

```
"eslint": "^10.4.0",
"typescript": ">=5.0.0 <6.1.0"
```

Node.js must satisfy `^20.19.0 || ^22.13.0 || >=24`.

Upgrading from 1.x? See [Upgrading from 1.x](https://github.com/cloudflightio/cloudflight-eslint-plugin#upgrading-from-1x).

## Usage

In your `package.json` add the following:

```json
"devDependencies": {
    ...
    "@cloudflight/eslint-plugin-typescript": "<version>",
    ...
}
```

Now open your `eslint.config.mjs` and add one of the configurations:

```js
import {cloudflightTypescriptConfig} from '@cloudflight/eslint-plugin-typescript';
import {includeIgnoreFile} from 'eslint/config';
import {resolve} from 'node:path';

export default [
    includeIgnoreFile(resolve(import.meta.dirname, '.gitignore')),
    ...cloudflightTypescriptConfig({
        rootDirectory: import.meta.dirname,
    }),
];
```
See [Custom Configuration](../../CUSTOM_CONFIGURATION.md) for more complicated project setups.

When executing your next `eslint .` it will now validate your code against the cloudflight-recommended rules.

## Formatting

This package also includes configs for formatting typescript.

In your `package.json` add the following:

```
"devDependencies": {
    ...
    "@cloudflight/eslint-plugin-typescript": "<version>",
    ...
  }
```

Create a new file called `eslint.format.mjs` and add the following:

```js
import {cloudflightTypescriptFormatConfig} from '@cloudflight/eslint-plugin-typescript';
import {includeIgnoreFile} from 'eslint/config';
import {resolve} from 'node:path';

export default [
    includeIgnoreFile(resolve(import.meta.dirname, '.gitignore')),
    ...cloudflightTypescriptFormatConfig({
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
        "*.{js,jsx,mjs,cjs,ts,mts,cts,tsx}": "eslint -c eslint.format.mjs --fix"
    }
}
```

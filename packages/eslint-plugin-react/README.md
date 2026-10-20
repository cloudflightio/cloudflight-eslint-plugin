# `@cloudflight/eslint-plugin-react`

The Cloudflight ESLint Plugin for React provides multiple configurations of ESLint rules recommended by Cloudflight.

You can find the directory of all rules including their reasoning [here](src/configs).

## Dependencies

The following dependencies are required:

```
"eslint": "^10.4.0",
"typescript": ">=5.0.0 <6.1.0"
```

Node.js must satisfy `^20.19.0 || ^22.13.0 || >=24`.

Upgrading from 1.x? See [Upgrading from 1.x](https://github.com/cloudflightio/cloudflight-eslint-plugin#upgrading-from-1x).

React uses a temporary official compatibility wrapper. eslint-plugin-react and eslint-plugin-jsx-a11y do not list ESLint 10 as a peer yet, so Yarn and npm report peer warnings. With npm's `strict-peer-deps`, allow ESLint 10 for both in your `package.json`:

```json
"overrides": {
    "eslint-plugin-react": {"eslint": "^10.4.0"},
    "eslint-plugin-jsx-a11y": {"eslint": "^10.4.0"}
}
```

## Usage

In your `package.json` add the following:

```json
"devDependencies": {
    ...
    "@cloudflight/eslint-plugin-react": "<version>",
    ...
}
```

Now open your `eslint.config.mjs` and add one of the configurations:

```js
import {cloudflightReactConfig} from '@cloudflight/eslint-plugin-react';
import {includeIgnoreFile} from 'eslint/config';
import {resolve} from 'node:path';

export default [
    includeIgnoreFile(resolve(import.meta.dirname, '.gitignore')),
    ...cloudflightReactConfig({
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
    "@cloudflight/eslint-plugin-react": "<version>",
    ...
  }
```

Create a new file called `eslint.format.mjs` and add the following:

```js
import {cloudflightReactFormatConfig} from '@cloudflight/eslint-plugin-react';
import {includeIgnoreFile} from 'eslint/config';
import {resolve} from 'node:path';

export default [
    includeIgnoreFile(resolve(import.meta.dirname, '.gitignore')),
    ...cloudflightReactFormatConfig({
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

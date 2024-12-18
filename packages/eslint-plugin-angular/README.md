# `@cloudflight/eslint-plugin-angular`

The Cloudflight ESLint Plugin for Angular provides multiple configurations of ESLint rules recommended by Cloudflight.

You can find the directory of all rules including their reasoning [here](src/configs).

## Dependencies

The following dependencies are required:

```
"eslint": ">=9.0.0 < 10.0.0"
```

## Usage

In your `package.json` add the following:

```json
"devDependencies": {
    ...
    "@cloudflight/eslint-plugin-angular": "<version>",
    ...
}
```

The plugin provides 3 different configurations:

-   cloudflightAngularConfig
    -   Both of the below 2 configurations
-   cloudflightAngularTemplateConfig
    -   Only contains rules for HTML files
-   cloudflightAngularTypescriptConfig
    -   Only contains rules for TS files

Now open your `eslint.config.mjs` and add one of the configurations:

```ts
import { cloudflightAngularConfig } from '@cloudflight/eslint-plugin-angular';
import { includeIgnoreFile } from '@eslint/compat';
import { dirname, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const directory = dirname(fileURLToPath(import.meta.url));
const gitignorePath = normalize(resolve(directory, '.gitignore'));

export default [
    includeIgnoreFile(gitignorePath),
    ...cloudflightAngularConfig({
        rootDirectory: import.meta.dirname,
    }),
];
```
See [Custom Configuration](../../CUSTOM_CONFIGURATION.md) for more complicated project setups.

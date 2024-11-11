# `@cloudflight/eslint-plugin-react`

The Cloudflight ESLint Plugin for React provides multiple configurations of ESLint rules recommended by Cloudflight.

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
    "@cloudflight/eslint-plugin-react": "<version>",
    ...
}
```

Now open your `eslint.config.mjs` and add one of the configurations:

```ts
import { cloudflightReactConfig } from '@cloudflight/eslint-plugin-react';
import { includeIgnoreFile } from '@eslint/compat';
import { dirname, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const directory = dirname(fileURLToPath(import.meta.url));
const gitignorePath = normalize(resolve(directory, '.gitignore'));

export default [
    includeIgnoreFile(gitignorePath),
    ...cloudflightReactConfig({
        rootDirectory: import.meta.dirname,
    }),
];
```
See [Custom Configuration](../../CUSTOM_CONFIGURATION.md) for more complicated project setups.

When executing your next `eslint .` it will now validate your code against the cloudflight-recommended rules.

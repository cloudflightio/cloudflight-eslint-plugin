# `@cloudflight/eslint-plugin-vue`

The Cloudflight ESLint Plugin for Vue provides multiple configurations of ESLint rules recommended by Cloudflight.

You can find the directory of all rules including their reasoning [here](src/configs).

## Dependencies

The following dependencies are required:

```
"eslint": ">=9.0.0 < 10.0.0"
```

## Usage

In your `package.json` add the following:

```
"devDependencies": {
    ...
    "@cloudflight/eslint-plugin-vue": "<version>",
    ...
  }
```

Now open your `eslint.config.mts` and add one of the configurations:

```ts
import { cloudflightVueConfig } from '@cloudflight/eslint-plugin-vue';
import { includeIgnoreFile } from '@eslint/compat';
import { dirname, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const directory = dirname(fileURLToPath(import.meta.url));
const gitignorePath = normalize(resolve(directory, '.gitignore'));

export default [
    includeIgnoreFile(gitignorePath),
    ...cloudflightVueConfig,
    {
        languageOptions: {
            parserOptions: {
                project: ['tsconfig*(.*).json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
];
```

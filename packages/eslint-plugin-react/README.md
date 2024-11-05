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

export default cloudflightReactConfig({
    rootDirectory: import.meta.dirname,
});
```
See [Custom Configuration](../../CUSTOM_CONFIGURATION.md) for more complicated project setups.

When executing your next `eslint .` it will now validate your code against the cloudflight-recommended rules.

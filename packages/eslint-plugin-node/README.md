# `@cloudflight/eslint-plugin-node`

The Cloudflight ESLint Plugin for Node provides multiple configurations of ESLint rules recommended by Cloudflight.

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
    "@cloudflight/eslint-plugin-node": "<version>",
    ...
}
```

Now open your `eslint.config.mjs` and add one of the configurations:

```ts
import { cloudflightNodeConfig } from '@cloudflight/eslint-plugin-node';

export default cloudflightNodeConfig({
    rootDirectory: import.meta.dirname,
});
```
See [Custom Configuration](../../CUSTOM_CONFIGURATION.md) for more complicated project setups.

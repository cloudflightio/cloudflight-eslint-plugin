# `@cloudflight/eslint-plugin-node`

The Cloudflight ESLint Plugin for Node provides multiple configurations of ESLint rules recommended by Cloudflight.

You can find the directory of all rules including their reasoning [here](src/configs).

## Dependencies

The following dependencies are required:

```
"@cloudflight/eslint-plugin-typescript": ">=0.10.0",
"@rushstack/eslint-patch": "1.2.0",
"eslint": ">=8.0.0 <9.0.0"
```

## Usage

In your `package.json` add the following:

```
"devDependencies": {
    ...
    "@cloudflight/eslint-plugin-node": "<version>",
    ...
  }
```

The plugin provides 1 configuration:

-   @cloudflight/node/recommended
    -   Contains rules for Node files

Now open your `.eslintrc.js` and add one of the configurations:

```
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    ...
    extends: ['plugin:@cloudflight/node/recommended'],
    ...
};
```

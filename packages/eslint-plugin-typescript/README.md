# `@cloudflight/eslint-plugin-typescript`

The Cloudflight ESLint Plugin Typescript provides a configuration of ESLint rules recommended by Cloudflight.

You can find the directory of all rules including their reasoning [here](src/configs/recommended-typescript/rules).

## Dependencies

The following dependencies are required:

```
"@rushstack/eslint-patch": "1.1.4",
"eslint": ">=8.0.0 <9.0.0"
```

## Usage

In your `package.json` add the following:

```
"devDependencies": {
    ...
    "@cloudflight/eslint-plugin-typescript": "<version>",
    ...
  }
```

Now open your `.eslintrc.js` and add the following:

```
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    ...
    extends: ['plugin:@cloudflight/typescript/recommended'],
    ...
};
```

When executing your next `ng lint` it will now validate your code against the cloudflight-recommended rules.

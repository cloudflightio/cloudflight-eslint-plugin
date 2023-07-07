# `@cloudflight/eslint-plugin-angular`

The Cloudflight ESLint Plugin for Angular provides multiple configurations of ESLint rules recommended by Cloudflight.

You can find the directory of all rules including their reasoning [here](src/configs).

## Dependencies

The following dependencies are required:

```
"@cloudflight/eslint-plugin-typescript": ">=0.17.1",
"@rushstack/eslint-patch": "1.2.0",
"eslint": ">=8.0.0 <9.0.0"
```

## Usage

In your `package.json` add the following:

```
"devDependencies": {
    ...
    "@cloudflight/eslint-plugin-angular": "<version>",
    ...
  }
```

The plugin provides 3 different configurations:

-   @cloudflight/angular/recommended
    -   Both of the below 2 configurations
-   @cloudflight/angular/recommended-html
    -   Only contains rules for HTML files
-   @cloudflight/angular/recommended-typescript
    -   Only contains rules for TS files

Now open your `.eslintrc.js` and add one of the configurations:

```
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    ...
    extends: ['plugin:@cloudflight/angular/recommended'],
    ...
};
```

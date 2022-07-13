# `@cloudflight/eslint-plugin-angular`

The Cloudflight ESLint Plugin for Angular provides multiple configurations of ESLint rules recommended by Cloudflight.

You can find the directory of all rules including their reasoning [here](src/configs).

## Dependencies

The following dependencies are required:

```
"@angular-eslint/eslint-plugin": ">=13.0.0",
"@angular-eslint/eslint-plugin-template": ">=13.0.0",
"@angular-eslint/template-parser": ">=13.0.0",
"@cloudflight/eslint-plugin-typescript": ">=0.1.0",
"@typescript-eslint/parser": ">=5.0.0 <6.0.0",
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

Now open your `.eslintrc.json` (or JS equivalent) and add one of the configurations:

```
{
    ...
    "extends": ["plugin:@cloudflight/angular/recommended"]
    ...
}
```

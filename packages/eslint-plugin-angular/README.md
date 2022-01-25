# `@clf-internal/eslint-plugin-angular`

> The Cloudflight ESLint Plugin for Angular provides a multiple configurations of ESLint rules recommended by the Cloudflight Frontend Service.

> You can find the directory of all rules including their reasoning [here](src/configs).

## Dependencies

The following dependencies are required:

```
"@angular-eslint/eslint-plugin": ">=13.0.0",
"@angular-eslint/eslint-plugin-template": ">=13.0.0",
"@angular-eslint/template-parser": ">=13.0.0",
"@clf-internal/eslint-plugin-typescript": ">=1.0.0 <2.0.0",
"@typescript-eslint/parser": ">=5.0.0 <6.0.0",
"eslint": ">=8.0.0 <9.0.0"
```

## Usage

In your `package.json` add the following:

```
"devDependencies": {
    ...
    "@clf-internal/eslint-plugin-angular": "<version>",
    ...
  }
```

In your projects `.npmrc` add the following (no authentication necessary):

```
@clf-internal:registry=https://artifacts.cloudflight.io/repository/cloudflight-npm-public/
```

The plugin provides 3 different configurations:

-   @clf-internal/angular/recommended
    -   Both of the below 2 configurations
-   @clf-internal/angular/recommended-html
    -   Only contains rules for HTML files
-   @clf-internal/angular/recommended-typescript
    -   Only contains rules for TS files

Now open your `.eslintrc.json` (or JS equivalent) and add one of the configurations:

```
{
    ...
    "extends": ["plugin:@clf-internal/angular/recommended"]
    ...
}
```

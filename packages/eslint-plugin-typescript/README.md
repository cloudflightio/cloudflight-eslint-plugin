# `@cloudflight/eslint-plugin-typescript`

> The Cloudflight ESLint Plugin Typescript provides a configuration of ESLint rules recommended by the Cloudflight Frontend Service.

> You can find the directory of all rules including their reasoning [here](src/configs/recommended/rules).

## Dependencies

The following dependencies are required:

```
"@typescript-eslint/eslint-plugin": ">=4.0.0 <5.0.0",
"@typescript-eslint/parser": ">=4.0.0 <5.0.0",
"eslint": ">=7.0.0 <8.0.0",
"eslint-plugin-import": ">=2.0.0"
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

In your projects `.npmrc` add the following (no authentication necessary):

```
@cloudflight:registry=https://artifacts.cloudflight.io/repository/cloudflight-npm-public/
```

Now open your `.eslintrc.json` (or JS equivalent) and add the following:

```
{
    ...
    "extends": ["plugin:@cloudflight/typescript/recommended"]
    ...
}
```

When executing your next `ng lint` it will now validate your code against the cloudflight-recommended rules.

# `@cloudflight/eslint-plugin-typescript`

The Cloudflight ESLint Plugin Typescript provides a configuration of ESLint rules recommended by Cloudflight.

You can find the directory of all rules including their reasoning [here](src/configs/recommended-typescript/rules).

## Dependencies

The following dependencies are required:

```
"@typescript-eslint/eslint-plugin": ">=5.0.0 <6.0.0",
"@typescript-eslint/parser": ">=5.0.0 <6.0.0",
"eslint": ">=8.0.0 <9.0.0",
"eslint-plugin-import": ">=2.0.0",
"eslint-plugin-json-es": ">=1.5.0"
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

Now open your `.eslintrc.json` (or JS equivalent) and add the following:

```
{
    ...
    "extends": ["plugin:@cloudflight/typescript/recommended"]
    ...
}
```

When executing your next `ng lint` it will now validate your code against the cloudflight-recommended rules.

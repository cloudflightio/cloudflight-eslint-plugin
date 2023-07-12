# Deprecated

After using prettier for some time, we found it its formatting is not good for accessibility. The biggest concern is the lack of context awareness, which formats code with certain patterns in a way that is unreadable. One such example is the builder pattern.

Thus, we have decided to drop prettier and use eslint for formatting instead. Please check out https://www.npmjs.com/package/@cloudflight/eslint-plugin-typescript for how to set it up.

# @cloudflight/prettier-config

The Cloudflight Prettier config provides a configuration of Prettier recommended by Cloudflight.

You can find the configured options [here](src).

## Dependencies

The following dependencies are required:

```
"prettier": ">=2.0.0 <3.0.0"
```

## Usage

In your `package.json` add the following:

```
"devDependencies": {
    ...
    "@cloudflight/prettier-config": "<version>",
    ...
  }
```

Now open your `.prettierrc` and add the following:

```
"@cloudflight/prettier-config"
```

# `@cloudflight/prettier-config

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

Now open your `.prettierrc.cjs` and add the following:

```
module.exports = {
    ...require('@cloudflight/prettier-config/src'),
};
```

# package-force-private

Enforces that all packages are private and therefore not publishable. This prevents accidental publishing of libraries to the public npm registry.

## Options

| option          | default | description                                                                                                                           |
|-----------------|---------|---------------------------------------------------------------------------------------------------------------------------------------|
| ignorePublished | true    | Allow packages with an [`publishConfig`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#publishconfig) to not be private. |

```json
{
  "rules": {
    "@cloudflight/typescript/package-force-private": [
      "error",
      {
        "ignorePublished": true
      }
    ]
  }
}
```

## ❌ Invalid Code

```json
{
    "name": "package"
}
```

```json
{
    "private": false
}
```

### ignorePublished: false

```json
{
    "name": "package",
    "publishConfig": {}
}
```

```json
{
    "name": "package",
    "private": false,
    "publishConfig": {}
}
```

## ✔ Valid Code

```json
{
    "private": true
}
```

```json
{
    "name": "package",
    "publishConfig": {}
}
```

```json
{
    "name": "package",
    "private": false,
    "publishConfig": {}
}
```

### ignorePublished: false

```json
{
    "name": "package",
    "private": true,
    "publishConfig": {}
}
```

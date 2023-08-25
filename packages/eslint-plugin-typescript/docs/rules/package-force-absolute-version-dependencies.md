# package-force-absolute-version-dependencies

Some libraries do not apply semantic-versioning consistently and can break the API with minor or even patch versions. Because of this it's recommended to use explicit versions of your dependencies.   
In addition, it can also minimize issues where you automatically update to a compromised package: https://github.com/faisalman/ua-parser-js/issues/536#issuecomment-949742904   
**But you can never mitigate it completely with that alone, since transitive dependencies might use version ranges!**

## ❌ Invalid Code

```json
{
    "dependencies": {
        "some-dependency-1": "^1.0.0",
        "some-dependency-2": "~1.0.0",
        "some-dependency-3": "*",
        "some-dependency-4": ">1.0.0",
        "some-dependency-5": ">=1.0.0",
        "some-dependency-6": "1.0.0 - 2.0.0",
        "some-dependency-7": "1.0.x",
        "some-dependency-8": "1.x.0"
    },
    "devDependencies": {
        "some-dependency-1": "^1.0.0",
        "some-dependency-2": "~1.0.0",
        "some-dependency-3": "*",
        "some-dependency-4": ">1.0.0",
        "some-dependency-5": ">=1.0.0",
        "some-dependency-6": "1.0.0 - 2.0.0",
        "some-dependency-7": "1.0.x",
        "some-dependency-8": "1.x.0"
    }
}
```

## ✔ Valid Code

```json
{
    "dependencies": {
        "some-dependency": "1.0.0"
    },
    "devDependencies": {
        "some-dependency": "1.0.0"
    }
}
```

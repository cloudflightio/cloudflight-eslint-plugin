
# Custom Configuration
These configs are intended to be used as is without any customization, but we do recognize that some projects may have special requirements.

## Custom tsconfig files
By default, only tsconfig files in the root directory are used. You can provide custom tsconfig files like this:

```ts
// this applies to all configs, not just typescript
import { cloudflightTypescriptConfig } from '@cloudflight/eslint-plugin-typescript';

export default cloudflightTypescriptConfig({
    rootDirectory: import.meta.dirname,
    tsConfigFiles: ['./packages/*/tsconfig.json', './packages/*/tsconfig.spec.json'],
});
```
**Try to keep the list of TSConfig files as short as possible, they have a negative effect on performance**

## Adding additional plugins
Add additional things before the Cloudflight config, this prevents these plugins from overriding important config options.

**Note:** This might not work for all Plugins

```ts
// this applies to all configs, not just typescript
import { cloudflightTypescriptConfig } from '@cloudflight/eslint-plugin-typescript';

export default [
    ...storybook.configs['flat/recommended'],
    ...cloudflightTypescriptConfig({
        rootDirectory: import.meta.dirname,
        tsConfigFiles: ['./packages/*/tsconfig.json', './packages/*/tsconfig.spec.json'],
    })
];
```

## Disabling rules

```ts
// this applies to all configs, not just typescript
import { cloudflightTypescriptConfig } from '@cloudflight/eslint-plugin-typescript';

export default [
    ...cloudflightTypescriptConfig({
        rootDirectory: import.meta.dirname,
        tsConfigFiles: ['./packages/*/tsconfig.json', './packages/*/tsconfig.spec.json'],
    }),
    {
        rules: {
            'no-magic-numbers': 'off',
        },
    },
];
```

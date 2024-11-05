import {cloudflightTypescriptConfig} from '@cloudflight/eslint-plugin-typescript';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    ...cloudflightTypescriptConfig({
        rootDirectory: import.meta.dirname,
        tsConfigFiles: ['./packages/*/tsconfig.json', './packages/*/tsconfig.spec.json'],
    }),
    {
        // these files are temporarily disabled for linting
        // until we are done with migrating everything to v9
        ignores: [
            'packages/eslint-plugin-angular/src/configs/format-template.ts',
            'packages/eslint-plugin-typescript/src/configs/index.ts',
            'packages/eslint-plugin-typescript/src/configs/json.ts',
            'packages/eslint-plugin-typescript/src/configs/package.ts',
            'packages/eslint-plugin-typescript/src/rules/package/*',
            'packages/eslint-plugin-typescript/src/rules/ts-config/*',
            'packages/eslint-plugin-typescript/src/rules/typescript/*.spec.ts',
            'scripts/*',
            'eslint.config.mjs',
            'eslint.format.mjs',
            'jest.config*.ts',
        ],
    },
    {
        rules: {
            'import-x/no-named-as-default-member': 'off',
        },
    },
);

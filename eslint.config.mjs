import tseslint from 'typescript-eslint';
import {includeIgnoreFile} from '@eslint/compat';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import { cloudflightTypescriptConfig } from '@cloudflight/eslint-plugin-typescript';

const filename = fileURLToPath(import.meta.url);
const directory = dirname(filename);
const gitignorePath = resolve(directory, '.gitignore');

export default tseslint.config(
    includeIgnoreFile(gitignorePath),
    {
        // these files are temporarily disabled for linting
        // until we are done with migrating everything to v9
        ignores: [
            'packages/eslint-plugin-angular/src/configs/format-template.ts',
            'packages/eslint-plugin-typescript/src/configs/index.ts',
            'packages/eslint-plugin-typescript/src/configs/json.ts',
            'packages/eslint-plugin-typescript/src/configs/package.ts',
            'packages/eslint-plugin-typescript/src/configs/format.ts',
            'packages/eslint-plugin-typescript/src/configs/rxjs.ts',
            'packages/eslint-plugin-typescript/src/rules/package/*',
            'packages/eslint-plugin-typescript/src/rules/ts-config/*',
            'packages/eslint-plugin-typescript/src/rules/typescript/*.spec.ts',
            'scripts/*',
            '.eslintrc.format.js',
            'eslint.config.mjs',
            'jest.config*.ts',
        ]
    },
    ...cloudflightTypescriptConfig,
    {
        languageOptions: {
            parserOptions: {
                project: ['./packages/*/tsconfig.json', './packages/*/tsconfig.spec.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        rules: {
            'import-x/no-named-as-default-member': 'off',
        },
    },
);

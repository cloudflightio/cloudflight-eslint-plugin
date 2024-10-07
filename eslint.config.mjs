import tseslint from 'typescript-eslint';
import {includeIgnoreFile} from '@eslint/compat';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import { config } from '@cloudflight/eslint-plugin-typescript';

const filename = fileURLToPath(import.meta.url);
const directory = dirname(filename);
const gitignorePath = resolve(directory, '.gitignore');

export default tseslint.config(
    includeIgnoreFile(gitignorePath),
    {
        // these files are temporarily disabled for linting
        // until we are done with migrating everything to v9
        ignores: [
            'packages/eslint-plugin-angular/*',
            'packages/eslint-plugin-node/*',
            'packages/eslint-plugin-react/*',
            'packages/eslint-plugin-vue/*',
            'packages/eslint-plugin-typescript/src/configs/index.ts',
            'packages/eslint-plugin-typescript/src/configs/recommended/*',
            'packages/eslint-plugin-typescript/src/configs/recommended-json/*',
            'packages/eslint-plugin-typescript/src/configs/recommended-package/*',
            'packages/eslint-plugin-typescript/src/configs/recommended-typescript/recommended-typescript.config.ts',
            'packages/eslint-plugin-typescript/src/configs/recommended-typescript/rules/format.ts',
            'packages/eslint-plugin-typescript/src/configs/recommended-typescript/rules/import.ts',
            'packages/eslint-plugin-typescript/src/configs/recommended-typescript/rules/rxjs.ts',
            'packages/eslint-plugin-typescript/src/rules/ts-config/*',
            'scripts/*',
            '.eslintrc.format.js',
            'eslint.config.mjs',
        ]
    },
    ...config,
    {
        languageOptions: {
            parserOptions: {
                project: ['./packages/*/tsconfig.json', './packages/*/tsconfig.spec.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
);
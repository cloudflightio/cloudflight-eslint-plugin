import {defineConfig, includeIgnoreFile} from 'eslint/config';
import {dirname, normalize, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

import {cloudflightTypescriptFormatConfig} from '@cloudflight/eslint-plugin-typescript';

const directory = dirname(fileURLToPath(import.meta.url));
const gitignorePath = normalize(resolve(directory, '.gitignore'));

export default defineConfig(
    includeIgnoreFile(gitignorePath),
    ...cloudflightTypescriptFormatConfig({
        rootDirectory: import.meta.dirname,
    }),
    {
        ignores: [
            // the private type packages have no tsconfig.json
            'packages/types-eslint-plugin-*/**',
            // the fixtures contain violations on purpose
            'packages/*/fixtures/**',
        ],
    },
);

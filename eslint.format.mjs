import {cloudflightTypescriptFormatConfig} from '@cloudflight/eslint-plugin-typescript';
import {includeIgnoreFile} from '@eslint/compat';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import tseslint from 'typescript-eslint';

const filename = fileURLToPath(import.meta.url);
const directory = dirname(filename);
const gitignorePath = resolve(directory, '.gitignore');

export default tseslint.config(
    includeIgnoreFile(gitignorePath),
    ...cloudflightTypescriptFormatConfig,
);

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
    ...config,
);

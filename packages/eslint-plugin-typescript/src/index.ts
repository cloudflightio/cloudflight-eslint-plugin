import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import {eslintRules} from './configs/recommended-typescript/rules/eslint';
import {typescriptEslintRules} from './configs/recommended-typescript/rules/typescript-eslint';
import {customRules} from './configs/recommended-typescript/rules/custom';
import {cloudflightTypescriptPlugin} from './rules';

export const cloudflightTypescriptConfig = tseslint.config(
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        plugins: {
            '@cloudflight/typescript': cloudflightTypescriptPlugin,
        },
        extends: [
            pluginJs.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked,
        ],
        rules: {
            ...eslintRules,
            ...typescriptEslintRules,
            ...customRules,
        }
    },
    {
        files: ['**/*.{js,mjs,cjs}'],
        extends: [tseslint.configs.disableTypeChecked],
    },
);

import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import {eslintRules} from './configs/eslint';
import {typescriptEslintRules, typescriptEslintRulesDisableTypeChecked} from './configs/typescript-eslint';
import {customRules} from './configs/custom';
import {cloudflightTypescriptPlugin} from './rules';

export const cloudflightTypescriptConfig = tseslint.config(
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        plugins: {
            '@cloudflight/typescript': cloudflightTypescriptPlugin,
        },
        extends: [
            pluginJs.configs.recommended,
            ...tseslint.configs.strictTypeChecked,
            ...tseslint.configs.stylisticTypeChecked,
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
        rules: {
            ...typescriptEslintRulesDisableTypeChecked,
        }
    },
);

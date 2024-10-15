import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginImportX from 'eslint-plugin-import-x';
import * as tsParser from '@typescript-eslint/parser';
import {eslintRules} from './configs/eslint';
import {typescriptEslintRules, typescriptEslintRulesDisableTypeChecked} from './configs/typescript-eslint';
import {customRules} from './configs/custom';
import {cloudflightTypescriptPlugin} from './rules';
import {importEslintRules} from './configs/import';

/**
 * @deprecated Use `cloudflightTypescriptConfig` instead
 * This is only for internal use because eslint-plugin-import-x cannot work with vue-eslint-parser
 */
export const cloudflightTypescriptBaseConfig = tseslint.config(
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

export const cloudflightTypescriptConfig = tseslint.config(
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    ...cloudflightTypescriptBaseConfig,
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        extends: [
            eslintPluginImportX.flatConfigs.recommended,
            eslintPluginImportX.flatConfigs.typescript,
        ],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            ...importEslintRules,
        },
    }
);

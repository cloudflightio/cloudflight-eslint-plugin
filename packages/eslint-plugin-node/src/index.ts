import tseslint from 'typescript-eslint';
import { cloudflightTypescriptConfig } from '@cloudflight/eslint-plugin-typescript';
import nounsanitized from 'eslint-plugin-no-unsanitized';
import pluginSecurity from 'eslint-plugin-security';
import pluginNode from 'eslint-plugin-n';
import {securityRules} from './configs/security';
import {nodeRules} from './configs/node';
import {importEslintRules} from './configs/import';

export const cloudflightNodeConfig = tseslint.config(
    ...cloudflightTypescriptConfig,
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        extends: [
            pluginNode.configs['flat/recommended'],
            nounsanitized.configs.recommended,
            pluginSecurity.configs.recommended,
        ],
        name: 'cloudflight/node/rules',
        rules: {
            ...nodeRules,
            ...securityRules,
            ...importEslintRules,
        }
    },
);

import tseslint from 'typescript-eslint';
import { cloudflightTypescriptConfig } from '@cloudflight/eslint-plugin-typescript';
import nounsanitized from 'eslint-plugin-no-unsanitized';
import pluginSecurity from 'eslint-plugin-security';
import pluginNode from 'eslint-plugin-n';
import {securityRules} from './configs/security';
import {nodeRules} from './configs/node';

export const cloudflightNodeConfig = tseslint.config(
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        extends: [
            ...cloudflightTypescriptConfig,
            pluginNode.configs['flat/recommended'],
            nounsanitized.configs.recommended,
            pluginSecurity.configs.recommended,
        ],
        rules: {
            ...nodeRules,
            ...securityRules,
        }
    },
);

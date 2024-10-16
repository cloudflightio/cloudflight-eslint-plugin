import {cloudflightTypescriptConfig} from '@cloudflight/eslint-plugin-typescript';
import pluginNode from 'eslint-plugin-n';
import nounsanitized from 'eslint-plugin-no-unsanitized';
import pluginSecurity from 'eslint-plugin-security';
import tseslint from 'typescript-eslint';

import {importEslintRules} from './configs/import';
import {nodeRules} from './configs/node';
import {securityRules} from './configs/security';

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
        },
    },
);

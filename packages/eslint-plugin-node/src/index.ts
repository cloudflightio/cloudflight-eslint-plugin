import type {FlatConfig} from '@typescript-eslint/utils/ts-eslint';

import {CloudflightEslintPluginSettings, cloudflightTypescriptConfig} from '@cloudflight/eslint-plugin-typescript';
import pluginNode from 'eslint-plugin-n';
import nounsanitized from 'eslint-plugin-no-unsanitized';
import pluginSecurity from 'eslint-plugin-security';
import tseslint from 'typescript-eslint';

import {importEslintRules} from './configs/import';
import {nodeRules} from './configs/node';
import {securityRules} from './configs/security';

export function cloudflightNodeConfig(settings: CloudflightEslintPluginSettings): FlatConfig.ConfigArray {
    return tseslint.config(
        ...cloudflightTypescriptConfig(settings),
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
}

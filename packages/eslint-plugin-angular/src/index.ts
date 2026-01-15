import type {FlatConfig} from '@typescript-eslint/utils/ts-eslint';

import {CloudflightEslintPluginSettings, cloudflightTypescriptConfig} from '@cloudflight/eslint-plugin-typescript';
import angular from 'angular-eslint';
import tseslint from 'typescript-eslint';

import {angularEslintRules} from './configs/angular-eslint';
import {angularTemplateEslintRules} from './configs/angular-eslint-template';
import {eslintRules} from './configs/eslint';
import {typescriptEslintRules} from './configs/typescript-eslint';

export function cloudflightAngularTypescriptConfig(settings: CloudflightEslintPluginSettings): FlatConfig.ConfigArray {
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- tseslint.config is deprecated but defineConfig has type incompatibilities with typescript-eslint
    return tseslint.config(
        ...cloudflightTypescriptConfig(settings),
        {
            files: ['**/*.{ts,mts,cts}'],
            extends: [
                ...angular.configs.tsRecommended,
            ],
            processor: angular.processInlineTemplates,
            name: 'cloudflight/angular/typescript/rules',
            rules: {
                ...eslintRules,
                ...typescriptEslintRules,
                ...angularEslintRules,
            },
        },
    );
}

// eslint-disable-next-line @typescript-eslint/no-deprecated -- tseslint.config is deprecated but defineConfig has type incompatibilities with typescript-eslint
export const cloudflightAngularTemplateConfig = tseslint.config(
    {
        files: ['**/*.html'],
        extends: [
            ...angular.configs.templateRecommended,
            ...angular.configs.templateAccessibility,
        ],
        name: 'cloudflight/angular/template/rules',
        rules: {
            ...angularTemplateEslintRules,
            // todo: this should be its own config
            // ...formatAngularTemplateEslintRules,
        },
    },
);

export function cloudflightAngularConfig(settings: CloudflightEslintPluginSettings): FlatConfig.ConfigArray {
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- tseslint.config is deprecated but defineConfig has type incompatibilities with typescript-eslint
    return tseslint.config(
        ...cloudflightAngularTypescriptConfig(settings),
        ...cloudflightAngularTemplateConfig,
    );
}

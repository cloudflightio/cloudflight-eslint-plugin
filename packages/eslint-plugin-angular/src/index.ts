import type {FlatConfig} from '@typescript-eslint/utils/ts-eslint';
import type {Linter} from 'eslint';

import {CloudflightEslintPluginSettings, cloudflightTypescriptConfig, cloudflightTypescriptFormatConfig} from '@cloudflight/eslint-plugin-typescript';
import angularEslint from 'angular-eslint';
import tseslint from 'typescript-eslint';

import {angularRules} from './configs/angular';
import {angularTemplateRules} from './configs/angular-template';
import {angularTemplateFormatRules} from './configs/angular-template-format';
import {eslintRules} from './configs/eslint';
import {typescriptRules} from './configs/typescript';

export function cloudflightAngularTypescriptConfig(settings: CloudflightEslintPluginSettings): Linter.Config[] {
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- tseslint.config is deprecated but defineConfig has type incompatibilities with typescript-eslint
    return eslintConfigs(tseslint.config(
        ...cloudflightTypescriptConfig(settings),
        {
            files: ['**/*.{ts,mts,cts}'],
            extends: [
                ...angularEslint.configs.tsRecommended,
            ],
            processor: angularEslint.processInlineTemplates,
            name: 'cloudflight/angular/typescript/rules',
            rules: {
                ...eslintRules,
                ...typescriptRules,
                ...angularRules,
            },
        },
    ));
}

// eslint-disable-next-line @typescript-eslint/no-deprecated -- tseslint.config is deprecated but defineConfig has type incompatibilities with typescript-eslint
export const cloudflightAngularTemplateConfig: Linter.Config[] = eslintConfigs(tseslint.config(
    {
        files: ['**/*.html'],
        extends: [
            ...angularEslint.configs.templateRecommended,
            ...angularEslint.configs.templateAccessibility,
        ],
        name: 'cloudflight/angular/template/rules',
        rules: {
            ...angularTemplateRules,
        },
    },
));

// eslint-disable-next-line @typescript-eslint/no-deprecated -- tseslint.config is deprecated but defineConfig has type incompatibilities with typescript-eslint
export const cloudflightAngularTemplateFormatConfig: Linter.Config[] = eslintConfigs(tseslint.config(
    {
        files: ['**/*.html'],
        plugins: {
            '@angular-eslint/template': angularEslint.templatePlugin,
        },
        languageOptions: {
            parser: angularEslint.templateParser,
        },
        // the template lint rules do not run here, --fix would remove their disable comments as unused
        linterOptions: {
            reportUnusedDisableDirectives: 'off',
        },
        name: 'cloudflight/angular/template/format-rules',
        rules: {
            ...angularTemplateFormatRules,
        },
    },
));

export function cloudflightAngularConfig(settings: CloudflightEslintPluginSettings): Linter.Config[] {
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- tseslint.config is deprecated but defineConfig has type incompatibilities with typescript-eslint
    return eslintConfigs(tseslint.config(
        ...cloudflightAngularTypescriptConfig(settings),
        ...cloudflightAngularTemplateConfig,
    ));
}

export function cloudflightAngularFormatConfig(settings: CloudflightEslintPluginSettings): Linter.Config[] {
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- tseslint.config is deprecated but defineConfig has type incompatibilities with typescript-eslint
    return eslintConfigs(tseslint.config(
        ...cloudflightTypescriptFormatConfig(settings),
        {
            files: ['**/*.{ts,mts,cts}'],
            // no rules, only so that disable comments for angular rules are known in the format run
            plugins: {
                '@angular-eslint': angularEslint.tsPlugin,
            },
            name: 'cloudflight/angular/typescript/format-plugins',
        },
        ...cloudflightAngularTemplateFormatConfig,
    ));
}

// typescript-eslint's config type is not accepted by eslint's defineConfig or a typed eslint.config.ts
function eslintConfigs(configs: FlatConfig.ConfigArray): Linter.Config[] {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return configs as Linter.Config[];
}

import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import {cloudflightTypescriptConfig} from '@cloudflight/eslint-plugin-typescript';
import {eslintRules} from './configs/eslint';
import {typescriptEslintRules} from './configs/typescript-eslint';
import {angularEslintRules} from './configs/angular-eslint';
import {angularTemplateEslintRules} from './configs/angular-eslint-template';

export const cloudflightAngularTypescriptConfig = tseslint.config(
    ...cloudflightTypescriptConfig,
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
        }
    },
);

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
        }
    }
);

export const cloudflightAngularConfig = tseslint.config(
    ...cloudflightAngularTypescriptConfig,
    ...cloudflightAngularTemplateConfig,
);

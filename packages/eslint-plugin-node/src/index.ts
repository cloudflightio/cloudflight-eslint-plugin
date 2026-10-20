import type {FlatConfig} from '@typescript-eslint/utils/ts-eslint';
import type {Linter} from 'eslint';

import {CloudflightEslintPluginSettings, cloudflightTypescriptConfig, cloudflightTypescriptFormatConfig} from '@cloudflight/eslint-plugin-typescript';
import pluginNode from 'eslint-plugin-n';
import {existsSync, readFileSync} from 'node:fs';
import {join} from 'node:path';
import tseslint from 'typescript-eslint';

import {importRules} from './configs/import';
import {nodeRules} from './configs/node';
import {securityRules} from './configs/security';

export function cloudflightNodeConfig(settings: CloudflightEslintPluginSettings): Linter.Config[] {
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- tseslint.config is deprecated but defineConfig has type incompatibilities with typescript-eslint
    return eslintConfigs(tseslint.config(
        ...cloudflightTypescriptConfig(settings),
        {
            files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
            extends: [
                nodeRecommendedConfig(settings.rootDirectory),
            ],
            name: 'cloudflight/node/rules',
            rules: {
                ...nodeRules,
                ...securityRules,
                ...importRules,
            },
        },
        {
            files: ['**/*.{js,mjs,cjs}'],
            name: 'cloudflight/node/javascript-rules',
            rules: {
                // eslint-plugin-n 18 asks for type information here and throws without a program
                'n/no-sync': 'off',
            },
        },
        {
            files: ['**/*.{ts,mts,cts}'],
            name: 'cloudflight/node/typescript-rules',
            rules: {
                // the shebang of a typescript cli is for the built file, n/hashbang only sees the source and its fix deletes it
                'n/hashbang': 'off',
            },
        },
        // .cjs and .mjs do not depend on the package type
        {
            files: ['**/*.{cjs,cts}'],
            name: 'cloudflight/node/commonjs',
            languageOptions: {...pluginNode.configs['flat/recommended-script'].languageOptions},
        },
        {
            files: ['**/*.{mjs,mts}'],
            name: 'cloudflight/node/module',
            languageOptions: {...pluginNode.configs['flat/recommended-module'].languageOptions},
        },
        ...commonjsJavascriptConfig(settings.rootDirectory),
    ));
}

export function cloudflightNodeFormatConfig(settings: CloudflightEslintPluginSettings): Linter.Config[] {
    return eslintConfigs([
        ...cloudflightTypescriptFormatConfig(settings),
        {
            files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
            name: 'cloudflight/node/format-plugins',
            // no rules, only so that disable comments for the node rules are known in the format run
            plugins: {
                n: pluginNode,
            },
        },
    ]);
}

// typescript-eslint's config type is not accepted by eslint's defineConfig or a typed eslint.config.ts
function eslintConfigs(configs: FlatConfig.ConfigArray): Linter.Config[] {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return configs as Linter.Config[];
}

// eslint-plugin-n picks its module or script preset by the package.json of the working directory,
// the project's own package.json decides here
function nodeRecommendedConfig(rootDirectory: string): typeof pluginNode.configs['flat/recommended-script'] {
    return isModulePackage(rootDirectory) ? pluginNode.configs['flat/recommended-module'] : pluginNode.configs['flat/recommended-script'];
}

// the .js files of a commonjs package are commonjs too, like .cjs in the base config
function commonjsJavascriptConfig(rootDirectory: string): FlatConfig.ConfigArray {
    if (isModulePackage(rootDirectory)) {
        return [];
    }

    return [
        {
            files: ['**/*.js'],
            name: 'cloudflight/node/commonjs-javascript',
            languageOptions: {
                parserOptions: {ecmaFeatures: {globalReturn: true}},
            },
            rules: {
                '@typescript-eslint/no-require-imports': 'off',
                strict: 'off',
            },
        },
    ];
}

function isModulePackage(rootDirectory: string): boolean {
    const manifestPath = join(rootDirectory, 'package.json');
    const manifest: unknown = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')) : undefined;

    return typeof manifest === 'object' && manifest !== null && Reflect.get(manifest, 'type') === 'module';
}

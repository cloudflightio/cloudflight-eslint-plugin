import type {FlatConfig} from '@typescript-eslint/utils/ts-eslint';
import type {Linter} from 'eslint';

import {
    CloudflightEslintPluginSettings,
    cloudflightTypedParserOptions,
    cloudflightTypescriptBaseConfig,
    cloudflightTypescriptConfig,
    cloudflightTypescriptJavascriptRules,
    cloudflightTypescriptSecurityConfig,
} from '@cloudflight/eslint-plugin-typescript';
import {TSESLint} from '@typescript-eslint/utils';
import {configureVueProject, defineConfigWithVueTs, vueTsConfigs} from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import {readdirSync, readFileSync} from 'node:fs';
import {join} from 'node:path';
import tseslint from 'typescript-eslint';

import {typescriptRules} from './configs/typescript';
import {vueRules} from './configs/vue';

export function cloudflightVueConfig(settings: CloudflightEslintPluginSettings): Linter.Config[] {
    // the helper searches the .vue files below rootDir, the cwd by default, and keeps its options for the whole process,
    // so rootDir is set on every call
    // its allowComponentTypeUnsafety turns the no-unsafe rules off for .ts and .vue files,
    // we keep them and only relax no-unsafe-assignment for .vue
    configureVueProject({rootDir: settings.rootDirectory, allowComponentTypeUnsafety: false});
    const configs = defineConfigWithVueTs(
        ...cloudflightTypescriptConfig(settings),
        {
            files: ['**/*.vue'],
            extends: [
                // we can only import the base and security configs here because eslint-plugin-import-x
                // does not work with vue-eslint-parser properly
                ...cloudflightTypescriptBaseConfig,
                ...cloudflightTypescriptSecurityConfig,
                // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                ...pluginVue.configs['flat/recommended'] as TSESLint.FlatConfig.ConfigArray,
                vueTsConfigs.recommended,
            ],
            name: 'cloudflight/vue/rules',
            rules: {
                ...typescriptRules,
                ...vueRules,
            },
            languageOptions: {
                parserOptions: cloudflightTypedParserOptions(settings),
            },
        },
    );

    // with two typescript-eslint copies installed, e.g. when the lockfile keeps an older one for the helper,
    // eslint aborts with "Cannot redefine plugin @typescript-eslint", so the helper's configs get the base plugin object,
    // and our parser, so that the rules and the parser of a file come from one copy
    const typescriptPlugin = cloudflightTypescriptBaseConfig.find((config) => config.plugins?.['@typescript-eslint'])?.plugins?.['@typescript-eslint'];
    const sharedPluginConfigs = configs
        .filter((config) => !isHelperUntypedSfcConfig(config))
        .map((config) => config.plugins?.['@typescript-eslint'] && typescriptPlugin
            ? {...config, plugins: {...config.plugins, '@typescript-eslint': typescriptPlugin}}
            : config)
        .map(withTypescriptParser);

    return eslintConfigs([
        ...sharedPluginConfigs,
        {
            files: ['**/*.{ts,mts,cts,tsx,vue}'],
            name: 'cloudflight/vue/typed-parser',
            languageOptions: {
                // the helper enables the project service, the base parser options are applied after it
                parserOptions: cloudflightTypedParserOptions(settings),
            },
        },
        untypedSfcConfig(settings.rootDirectory),
    ]);
}

// typescript-eslint's config type is not accepted by eslint's defineConfig or a typed eslint.config.ts
function eslintConfigs(configs: FlatConfig.ConfigArray): Linter.Config[] {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return configs as Linter.Config[];
}

// the helper lists the SFCs without lang="ts" relative to the cwd and with double quotes only,
// cloudflight/vue/untyped-sfc replaces that list
function isHelperUntypedSfcConfig(config: FlatConfig.Config): boolean {
    return config.name === 'typescript-eslint/disable-type-checked' && (config.files ?? []).some((file) => typeof file === 'string' && file.endsWith('.vue'));
}

function isTypescriptSfc(file: string): boolean {
    try {
        // only real script tags count, not a lang="ts" inside an html comment
        const source = readFileSync(file, 'utf8').replace(/<!--[\s\S]*?-->/gu, '');

        return /<script\b[^>]*\blang\s*=\s*["']?tsx?\b/iu.test(source);
    }
    catch {
        // a file that cannot be read is linted without type information
        return false;
    }
}

// .vue files are linted without type information except the typescript SFCs listed when the config is created, like the
// helper does; a new SFC is type-checked after the next config load, dot directories are not searched;
// the **/ prefix keeps the patterns working when eslint runs from a parent directory of rootDirectory
function untypedSfcConfig(rootDirectory: string): FlatConfig.Config {
    return {
        ...tseslint.configs.disableTypeChecked,
        files: ['**/*.vue'],
        ignores: vueFiles(rootDirectory, '')
            .filter((file) => isTypescriptSfc(join(rootDirectory, file)))
            .map((file) => `**/${escapeGlob(file)}`),
        name: 'cloudflight/vue/untyped-sfc',
        // like javascript files: the core rules instead of the typed ones
        rules: {...tseslint.configs.disableTypeChecked.rules, ...cloudflightTypescriptJavascriptRules},
    };
}

// the .vue files below the root, without node_modules and dot directories, like the helper
function vueFiles(root: string, directory: string): string[] {
    try {
        return readdirSync(join(root, directory), {withFileTypes: true}).flatMap((entry) => {
            const file = directory === '' ? entry.name : `${directory}/${entry.name}`;

            if (entry.isDirectory()) {
                return entry.name === 'node_modules' || entry.name.startsWith('.') ? [] : vueFiles(root, file);
            }

            return entry.isFile() && entry.name.endsWith('.vue') ? [file] : [];
        });
    }
    catch {
        // an unreadable directory has no files to list
        return [];
    }
}

// glob metacharacters in a path are escaped, e.g. pages/[id].vue or {a,b}.vue; the helper's character classes break braces
function escapeGlob(file: string): string {
    return file.replace(/[*?{}[\]()!+@\\]/gu, '\\$&');
}

function isTypescriptParser(parser: unknown): boolean {
    if (typeof parser !== 'object' || parser === null || !('meta' in parser)) {
        return false;
    }

    const meta: unknown = parser.meta;

    return typeof meta === 'object' && meta !== null && 'name' in meta && meta.name === 'typescript-eslint/parser';
}

// the parser of another typescript-eslint copy becomes ours, also as the script parser of vue-eslint-parser
function withTypescriptParser(config: FlatConfig.Config): FlatConfig.Config {
    const languageOptions = config.languageOptions;

    if (languageOptions === undefined) {
        return config;
    }

    const shared: FlatConfig.LanguageOptions = {...languageOptions};
    const scriptParser: unknown = languageOptions.parserOptions?.['parser'];

    if (isTypescriptParser(languageOptions.parser)) {
        shared.parser = tseslint.parser;
    }

    if (isTypescriptParser(scriptParser)) {
        shared.parserOptions = {...languageOptions.parserOptions, parser: tseslint.parser};
    }
    else if (typeof scriptParser === 'object' && scriptParser !== null && !('parseForESLint' in scriptParser)) {
        // a parser per script language, e.g. {js: 'espree', ts: parser}
        const parsers = Object.entries(scriptParser).map(([language, parser]: [string, unknown]): [string, unknown] => [language, isTypescriptParser(parser) ? tseslint.parser : parser]);

        shared.parserOptions = {...languageOptions.parserOptions, parser: Object.fromEntries(parsers)};
    }

    return {...config, languageOptions: shared};
}

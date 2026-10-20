import type {FlatConfig, SharedConfigurationSettings} from '@typescript-eslint/utils/ts-eslint';
import type {Linter} from 'eslint';

import pluginJs from '@eslint/js';
import pluginStylistic from '@stylistic/eslint-plugin';
import {createTypeScriptImportResolver} from 'eslint-import-resolver-typescript';
import pluginImportX from 'eslint-plugin-import-x';
import pluginNoUnsanitized from 'eslint-plugin-no-unsanitized';
import pluginPerfectionist from 'eslint-plugin-perfectionist';
import pluginSecurity from 'eslint-plugin-security';
import globals from 'globals';
import {type Dirent, existsSync, readdirSync} from 'node:fs';
import {createRequire} from 'node:module';
import {join, resolve} from 'node:path';
import tseslint from 'typescript-eslint';

import {customRules} from './configs/custom';
import {eslintRules} from './configs/eslint';
import {formatRules} from './configs/format';
import {importRules} from './configs/import';
import {securityRules} from './configs/security';
import {javascriptRecommendedRules, typescriptEslintDisableTypeCheckedRules, typescriptEslintRules} from './configs/typescript-eslint';
import {cloudflightTypescriptPlugin} from './rules';

/**
 * Only the ESLint and typescript-eslint rules, without import rules, security rules and parser options.
 * For the framework packages, projects use `cloudflightTypescriptConfig`.
 */
// eslint-disable-next-line @typescript-eslint/no-deprecated -- tseslint.config is deprecated but defineConfig has type incompatibilities with typescript-eslint
export const cloudflightTypescriptBaseConfig: Linter.Config[] = eslintConfigs(tseslint.config(
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,mts,cts,tsx}'],
        plugins: {
            '@cloudflight/typescript': cloudflightTypescriptPlugin,
        },
        extends: [
            pluginJs.configs.recommended,
            ...tseslint.configs.strictTypeChecked,
            ...tseslint.configs.stylisticTypeChecked,
        ],
        name: 'cloudflight/typescript/base-rules',
        rules: {
            ...eslintRules,
            ...typescriptEslintRules,
            ...customRules,
        },
    },
));

/**
 * The rules of eslint-plugin-security and eslint-plugin-no-unsanitized. For the framework packages,
 * projects use `cloudflightTypescriptConfig`.
 */
// eslint-disable-next-line @typescript-eslint/no-deprecated -- tseslint.config is deprecated but defineConfig has type incompatibilities with typescript-eslint
export const cloudflightTypescriptSecurityConfig: Linter.Config[] = eslintConfigs(tseslint.config(
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,mts,cts,tsx}'],
        // the rules are listed, a plugin update cannot add one
        plugins: {
            'security': pluginSecurity,
            'no-unsanitized': pluginNoUnsanitized,
        },
        name: 'cloudflight/typescript/security-rules',
        rules: {
            ...securityRules,
        },
    },
));

// import-x loads the parser of its typescript preset by name, from eslint's or the linted file's directory; npm and pnpm can
// keep @typescript-eslint/parser below typescript-eslint, so the preset gets the path of our own parser instead
const typescriptParserPath = createRequire(require.resolve('typescript-eslint')).resolve('@typescript-eslint/parser');
const importXTypescriptConfig = {
    ...pluginImportX.flatConfigs.typescript,
    settings: {
        ...pluginImportX.flatConfigs.typescript.settings,
        'import-x/parsers': {[typescriptParserPath]: ['.ts', '.tsx', '.cts', '.mts']},
    },
};

function cloudflightTypescriptImportConfig(settings: CloudflightEslintPluginSettings): FlatConfig.ConfigArray {
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- tseslint.config is deprecated but defineConfig has type incompatibilities with typescript-eslint
    return tseslint.config(
        {
            files: ['**/*.{js,jsx,mjs,cjs,ts,mts,cts,tsx}'],
            extends: [
                pluginImportX.flatConfigs.recommended,
                importXTypescriptConfig,
            ],
            languageOptions: {
                parser: tseslint.parser,
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            name: 'cloudflight/typescript/import-rules',
            rules: {
                ...importRules,
            },
            settings: importXSettings(settings),
        },
    );
}

/**
 * The rules javascript files get on top of typescript-eslint's disableTypeChecked: the core rules instead of the typed ones
 * and the core rules the compiler covers in TypeScript. For the framework packages, projects use `cloudflightTypescriptConfig`.
 */
export const cloudflightTypescriptJavascriptRules: FlatConfig.Rules = {
    ...javascriptRecommendedRules,
    ...typescriptEslintDisableTypeCheckedRules,
};

// eslint-disable-next-line @typescript-eslint/no-deprecated -- tseslint.config is deprecated but defineConfig has type incompatibilities with typescript-eslint
const cloudflightTypescriptDisableTypeCheckedConfig = tseslint.config({
    files: ['**/*.{js,jsx,mjs,cjs}'],
    extends: [tseslint.configs.disableTypeChecked],
    name: 'cloudflight/typescript/disable-type-checked-rules',
    languageOptions: {
        // javascript files are tooling or browser scripts, both environments are declared
        globals: {...globals.node, ...globals.browser},
    },
    rules: cloudflightTypescriptJavascriptRules,
});

// .cjs files are commonjs, whatever the package type says
const cloudflightTypescriptCommonjsConfig: FlatConfig.Config[] = [
    {
        files: ['**/*.cjs'],
        name: 'cloudflight/typescript/commonjs',
        languageOptions: {
            sourceType: 'commonjs',
            // top-level declarations belong to the module, not to the global scope
            parserOptions: {ecmaFeatures: {globalReturn: true}},
        },
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
            // in commonjs 'use strict' changes the semantics of the file
            strict: 'off',
        },
    },
    {
        files: ['**/*.cts'],
        name: 'cloudflight/typescript/commonjs-typescript',
        rules: {
            // import x = require('x') is how a .cts file imports a commonjs module
            '@typescript-eslint/no-require-imports': ['error', {allowAsImport: true}],
        },
    },
];

export interface CloudflightEslintPluginSettings {
    /**
     * Absolute path of the project directory, usually `import.meta.dirname`. tsconfig paths and the
     * import resolver's project globs are relative to it; glob metacharacters in the path break those globs.
     */
    rootDirectory: string;
    /**
     * The tsconfig files of the project, relative to the rootDirectory. Without it the project service finds
     * the closest tsconfig.json of each file and imports resolve through the tsconfig*.json
     * files of the rootDirectory and of each nested project. Set it only when the layout needs other file
     * names, and keep the list short, every entry costs performance.
     */
    tsConfigFiles?: string[];
}

/**
 * Typed parser options for TypeScript files: the project service when `tsConfigFiles` is omitted,
 * otherwise `parserOptions.project`. Used by the Cloudflight framework packages; project configs get
 * them through `cloudflightTypescriptConfig`.
 */
export function cloudflightTypedParserOptions(settings: CloudflightEslintPluginSettings): FlatConfig.ParserOptions {
    // both set explicitly, a later block like the vue helper must not leave both on
    if (settings.tsConfigFiles == null) {
        return {
            project: false,
            projectService: true,
            tsconfigRootDir: settings.rootDirectory,
        };
    }

    return {
        project: settings.tsConfigFiles,
        projectService: false,
        tsconfigRootDir: settings.rootDirectory,
    };
}

export function cloudflightTypescriptFormatConfig(settings: CloudflightEslintPluginSettings): Linter.Config[] {
    return eslintConfigs([
        {
            ignores: ['.yarn/**'],
        },
        {
            files: ['**/*.{js,jsx,mjs,cjs,ts,mts,cts,tsx}'],
            plugins: {
                '@typescript-eslint': tseslint.plugin,
                'import-x': pluginImportX,
                '@cloudflight/typescript': cloudflightTypescriptPlugin,
                '@stylistic': pluginStylistic,
                'perfectionist': pluginPerfectionist,
                // no security rules in the format config, but the plugins have to be known for disable comments
                'security': pluginSecurity,
                'no-unsanitized': pluginNoUnsanitized,
            },
            languageOptions: {
                parser: tseslint.parser,
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            linterOptions: {
                reportUnusedDisableDirectives: 'off',
            },
            name: 'cloudflight/typescript/format-rules',
            rules: {
                ...formatRules,
            },
            settings: importXSettings(settings),
        },
        {
            files: ['**/*.tsx'],
            name: 'cloudflight/typescript/format-tsx',
            languageOptions: {
                // comma-dangle keeps the comma of <T,> only when it knows the file has jsx
                parserOptions: {ecmaFeatures: {jsx: true}},
            },
        },
    ]);
}

export function cloudflightTypescriptConfig(settings: CloudflightEslintPluginSettings): Linter.Config[] {
    return eslintConfigs([
        ...cloudflightTypescriptBaseConfig,
        ...cloudflightTypescriptSecurityConfig,
        ...cloudflightTypescriptImportConfig(settings),
        ...cloudflightTypescriptDisableTypeCheckedConfig,
        ...cloudflightTypescriptCommonjsConfig,
        {
            files: ['**/*.{js,jsx,mjs,cjs,ts,mts,cts,tsx}'],
            name: 'cloudflight/typescript/format-plugins',
            // no rules, only so that disable comments for the format rules are known in the lint run
            plugins: {
                '@stylistic': pluginStylistic,
                'perfectionist': pluginPerfectionist,
            },
        },
        {
            name: 'cloudflight/typescript/linter-options',
            linterOptions: {
                // a disable comment for a format rule suppresses nothing in the lint run,
                // --fix and the fix-all of an editor would delete it as unused
                reportUnusedDisableDirectives: 'off',
            },
        },
        {
            files: ['**/*.{ts,mts,cts,tsx}'],
            name: 'cloudflight/typescript/typed-parser',
            languageOptions: {
                parserOptions: cloudflightTypedParserOptions(settings),
            },
        },
    ]);
}

// typescript-eslint's config type is not accepted by eslint's defineConfig or a typed eslint.config.ts
function eslintConfigs(configs: FlatConfig.ConfigArray): Linter.Config[] {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return configs as Linter.Config[];
}

function importXSettings(settings: CloudflightEslintPluginSettings): SharedConfigurationSettings {
    return {
        // as an object, import-x cannot load the resolver by name when npm nests it below this package
        'import-x/resolver-next': [
            createTypeScriptImportResolver({
                alwaysTryTypes: true,
                // without tsConfigFiles also the tsconfig files of the nested projects, in the lint and in the format run;
                // the resolver takes the closest project that includes the file, like the project service does
                project: (settings.tsConfigFiles ?? projectTsConfigFiles(settings.rootDirectory))
                    .map((file) => resolve(settings.rootDirectory, file).replace(/\\/g, '/')),
                // the default glob matches every tsconfig*.json on purpose
                noWarnOnMultipleProjects: true,
            }),
        ],
    };
}

// never hold projects of the consumer
const skippedDirectories = new Set([
    'node_modules',
    '.git',
    '.hg',
    '.svn',
    '.yarn',
    'dist',
    'build',
    'coverage',
    'target',
    '.angular',
    '.gradle',
    '.next',
    '.nuxt',
    '.nx',
    '.svelte-kit',
    '.venv',
]);

// the tsconfig files of the root and of each directory below it with its own tsconfig.json
function projectTsConfigFiles(rootDirectory: string): string[] {
    return ['tsconfig*(.*).json', ...collectProjectDirectories(rootDirectory, '').map((directory) => `${directory}/tsconfig*(.*).json`)];
}

function isUnreadableDirectory(error: unknown): boolean {
    return error instanceof Error && 'code' in error && ['EACCES', 'EPERM', 'ENOENT', 'ENOTDIR'].includes(String(error.code));
}

// an unreadable directory is skipped instead of failing every run
function readNestedDirectory(root: string, directory: string): Dirent[] {
    try {
        return readdirSync(join(root, directory), {withFileTypes: true});
    }
    catch (error) {
        if (directory !== '' && isUnreadableDirectory(error)) {
            return [];
        }

        throw error;
    }
}

function collectProjectDirectories(root: string, directory: string): string[] {
    const directories: string[] = [];

    for (const entry of readNestedDirectory(root, directory)) {
        if (!entry.isDirectory() || skippedDirectories.has(entry.name)) {
            continue;
        }

        const child = directory === '' ? entry.name : `${directory}/${entry.name}`;

        if (existsSync(join(root, child, 'tsconfig.json'))) {
            directories.push(child);
        }
        directories.push(...collectProjectDirectories(root, child));
    }

    return directories;
}

import {ESLint, type Linter} from 'eslint';
import {readdirSync, readFileSync} from 'node:fs';
import {extname, join} from 'node:path';

// one name per extension, the configs select their files by extension
export const typescriptFiles = ['file.ts', 'file.mts', 'file.cts', 'file.tsx'];
export const javascriptFiles = ['file.js', 'file.mjs', 'file.cjs', 'file.jsx'];

export function createEslint(cwd: string, config: Linter.Config[], fix = false): ESLint {
    return new ESLint({
        cwd,
        fix,
        overrideConfigFile: true,
        overrideConfig: config,
    });
}

// eslint reports the severities of a calculated config as numbers
function severityName(severity: unknown): string {
    if (severity === 2 || severity === 'error') {
        return 'error';
    }

    return severity === 1 || severity === 'warn' ? 'warn' : 'off';
}

// every enabled rule with its severity and options, and the file types it applies to
export async function appliedRules(eslint: ESLint, cwd: string, files: string[]): Promise<string> {
    const extensionsBySetting = new Map<string, string[]>();

    for (const file of files) {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const config = await eslint.calculateConfigForFile(join(cwd, file)) as Linter.Config | undefined;

        for (const [rule, entry] of Object.entries(config?.rules ?? {})) {
            const [severity, ...options] = Array.isArray(entry) ? entry : [entry];
            const name = severityName(severity);

            if (name !== 'off') {
                const setting = options.length > 0 ? `${rule}: ${name} ${JSON.stringify(options)}` : `${rule}: ${name}`;

                extensionsBySetting.set(setting, [...extensionsBySetting.get(setting) ?? [], extname(file).slice(1)]);
            }
        }
    }

    return [...extensionsBySetting]
        .map(([setting, extensions]) => setting.replace(': ', ` [${extensions.join(', ')}]: `))
        .sort()
        .join('\n');
}

export async function lintMessages(eslint: ESLint, file: string): Promise<Linter.LintMessage[]> {
    const results = await eslint.lintFiles([file]);

    return results.flatMap((result) => result.messages);
}

export async function ruleIds(eslint: ESLint, file: string): Promise<(string | null)[]> {
    const messages = await lintMessages(eslint, file);

    return messages.map((message) => message.ruleId);
}

// a format case is a file in format/input, its fixed version has the same name in format/expected
export function formatCases(inputDirectory: string): string[] {
    return readdirSync(inputDirectory).sort();
}

// the fixes insert \n, a windows checkout has \r\n in the rest of the file
export function readWithUnixLineEndings(path: string): string {
    return readFileSync(path, 'utf8').replace(/\r\n/gu, '\n');
}

// the fixed text, or the file itself when nothing changed
export async function fixFile(eslint: ESLint, path: string): Promise<{messages: Linter.LintMessage[]; output: string}> {
    const [result] = await eslint.lintFiles([path]);

    return {
        messages: result?.messages ?? [],
        output: result?.output === undefined ? readWithUnixLineEndings(path) : result.output.replace(/\r\n/gu, '\n'),
    };
}

import {readFile} from 'node:fs/promises';

export async function loadConfigFile(): Promise<string> {
    const content = await readFile('config.json', 'utf8');

    return content;
}

import {readFileSync} from 'node:fs';

async function fetchRemote(): Promise<string> {
    return Promise.resolve('data');
}

export function load(): string {
    // @typescript-eslint/no-floating-promises, needs type information
    fetchRemote();

    // n/no-sync
    return readFileSync('config.json', 'utf8');
}

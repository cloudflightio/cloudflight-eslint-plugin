import {readFileSync} from 'node:fs';

// n/no-sync must not throw here, javascript files have no program
export const config = readFileSync('config.json', 'utf8');

import {readFileSync} from 'node:fs';
import {join} from 'node:path';

interface PackageManifest {
    name: string;
    version: string;
}

function isPackageManifest(value: unknown): value is PackageManifest {
    return typeof value === 'object' && value !== null &&
        'name' in value && typeof value.name === 'string' &&
        'version' in value && typeof value.version === 'string';
}

/**
 * Name and version of the package that owns the given dist directory.
 */
export function packageManifest(distDirectory: string): PackageManifest {
    const manifest: unknown = JSON.parse(readFileSync(join(distDirectory, '..', 'package.json'), 'utf8'));

    if (!isPackageManifest(manifest)) {
        throw new Error(`No package manifest found next to ${distDirectory}`);
    }

    return manifest;
}

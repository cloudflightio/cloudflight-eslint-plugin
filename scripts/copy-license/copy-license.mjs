import {copyFileSync, readdirSync, statSync} from 'node:fs';
import {join, normalize} from 'node:path';

const licenseFileName = 'LICENSE';
const rootDir = normalize(`${import.meta.dirname}/../../`);
const packagesDir = join(rootDir, 'packages');
const rootLicenseFile = join(rootDir, licenseFileName);

function isNpmPackage(path) {
    const files = readdirSync(path);

    return files.some((fileName) => fileName === 'package.json');
}

export function copyLicenses() {
    const packages = readdirSync(packagesDir);

    for (const packageDirName of packages) {
        const packagePath = join(packagesDir, packageDirName);
        const packageStat = statSync(packagePath);

        if (packageStat.isDirectory() && isNpmPackage(packagePath)) {
            const packageLicenseFile = join(packagePath, licenseFileName);

            copyFileSync(rootLicenseFile, packageLicenseFile);
        }
    }
}

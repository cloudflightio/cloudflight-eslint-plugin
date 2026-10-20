import {TSESLint} from '@typescript-eslint/utils';
import {join} from 'node:path';

import {packageManifest} from '../package-manifest';
import {NoOnEventAssign, NoOnEventAssignName} from './typescript/no-on-event-assign';

const rules: Record<string, TSESLint.RuleModule<string, readonly unknown[]>> = {
    [NoOnEventAssignName]: NoOnEventAssign,
};

export const cloudflightTypescriptPlugin: TSESLint.FlatConfig.Plugin = {
    meta: {
        name: '@cloudflight/typescript',
        // eslint keys its cache by plugin name and version, so the real version invalidates it on updates
        version: packageManifest(join(__dirname, '..')).version,
    },
    rules,
};

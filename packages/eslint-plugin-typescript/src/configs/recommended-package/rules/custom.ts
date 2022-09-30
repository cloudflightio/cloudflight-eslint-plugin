import { Linter } from 'eslint';
import { packageForcePrivate } from './custom/package-force-private';

const pluginPrefix = '@cloudflight/typescript';

export const customRules: Linter.RulesRecord = {
    [`${pluginPrefix}/${packageForcePrivate.name}`]: packageForcePrivate.options,
};

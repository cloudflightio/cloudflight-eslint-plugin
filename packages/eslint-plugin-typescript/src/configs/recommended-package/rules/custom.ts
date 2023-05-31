import {Linter} from 'eslint';

const pluginPrefix = '@cloudflight/typescript';

export const customRules: Linter.RulesRecord = {
    [`${pluginPrefix}/package-force-private`]: ['error'],
    [`${pluginPrefix}/package-force-absolute-version-dependencies`]: ['error'],
};

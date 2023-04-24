import {Linter} from 'eslint';

const pluginPrefix = '@cloudflight/typescript';

export const customRules: Linter.RulesRecord = {
    [`${pluginPrefix}/no-moment-js`]: ['error'],
    [`${pluginPrefix}/no-promise-all`]: ['error'],
};

import {Linter} from 'eslint';

const pluginPrefix = '@cloudflight/angular';

export const customRules: Linter.RulesRecord = {
    [`${pluginPrefix}/img-uses-ngsrc`]: ['error'],
};

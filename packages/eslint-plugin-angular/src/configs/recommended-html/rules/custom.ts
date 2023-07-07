import {Linter} from 'eslint';

const pluginPrefix = '@cloudflight/angular/template';

export const customRules: Linter.RulesRecord = {
    [`${pluginPrefix}/img-uses-ngsrc`]: ['error'],
};

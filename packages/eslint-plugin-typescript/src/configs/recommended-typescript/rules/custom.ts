import { Linter } from 'eslint';
import { noMomentJs } from './custom/no-moment-js';

const pluginPrefix = '@cloudflight/typescript';

export const customRules: Linter.RulesRecord = {
    [`${pluginPrefix}/${noMomentJs.name}`]: noMomentJs.options,
};

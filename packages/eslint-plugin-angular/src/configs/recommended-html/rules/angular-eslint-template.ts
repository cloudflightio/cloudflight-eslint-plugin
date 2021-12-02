import { Linter } from 'eslint';
import { bananaInBox } from './@angular-eslint-template/banana-in-box';
import { eqeqeq } from './@angular-eslint-template/eqeqeq';
import { noAny } from './@angular-eslint-template/no-any';
import { noNegatedAsync } from './@angular-eslint-template/no-negated-async';

const pluginPrefix = '@angular-eslint/template';

export const angularTemplateEslintRules: Linter.RulesRecord = {
    [`${pluginPrefix}/${bananaInBox.name}`]: bananaInBox.options,
    [`${pluginPrefix}/${eqeqeq.name}`]: eqeqeq.options,
    [`${pluginPrefix}/${noAny.name}`]: noAny.options,
    [`${pluginPrefix}/${noNegatedAsync.name}`]: noNegatedAsync.options,
};

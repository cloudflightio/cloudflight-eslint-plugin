import {Rule} from 'eslint';
import {imgUsesNgsrcRule} from './img-uses-ngsrc';

export const rules: Record<string, Rule.RuleModule> = {
    'img-uses-ngsrc': imgUsesNgsrcRule as unknown as Rule.RuleModule,
};

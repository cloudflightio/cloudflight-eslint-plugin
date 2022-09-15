import { Rule } from 'eslint';
import { jsonRule } from '../json-util';

export const PackagForcePrivateRule: Rule.RuleModule = {
    create: (context) => jsonRule(context, { key: 'private', expectedValue: true }, 'package.json'),
    meta: {
        type: 'problem',
        fixable: 'code',
    },
};

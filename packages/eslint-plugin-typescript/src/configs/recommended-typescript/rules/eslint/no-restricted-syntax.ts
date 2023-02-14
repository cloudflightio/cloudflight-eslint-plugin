import type { RuleDefinition } from '../../../rule-definition';

export const noRestrictedSyntax: RuleDefinition = {
    name: 'no-restricted-syntax',
    options: [
        'error',
        {
            selector: 'LabeledStatement',
            message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        },
        {
            selector: 'WithStatement',
            message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        },
    ],
};

import type { RuleDefinition } from '../../../rule-definition';

export const maxLen: RuleDefinition = {
    name: 'max-len',
    options: [
        'error',
        {
            ignorePattern: '^import [^,]+ from',
            ignoreRegExpLiterals: true,
            code: 140,
        },
    ],
};

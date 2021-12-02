import type { RuleDefinition } from '../../../rule-definition';

export const maxLen: RuleDefinition = {
    name: 'max-len',
    options: [
        'error',
        {
            ignorePattern: '^(import|export) [^,]+ from',
            ignoreRegExpLiterals: true,
            ignoreTemplateLiterals: true,
            code: 140,
        },
    ],
};

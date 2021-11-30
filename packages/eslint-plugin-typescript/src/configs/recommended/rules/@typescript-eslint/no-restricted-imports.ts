import type { RuleDefinition } from '../../../rule-definition';

export const noRestrictedImports: RuleDefinition = {
    name: 'no-restricted-imports',
    options: [
        'error',
        {
            name: 'rxjs/Rx',
            message: "Please import directly from 'rxjs' instead",
        },
    ],
};

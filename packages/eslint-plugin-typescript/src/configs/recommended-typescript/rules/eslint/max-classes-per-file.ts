import type { RuleDefinition } from '../../../rule-definition';

export const maxClassesPerFile: RuleDefinition = {
    name: 'max-classes-per-file',
    options: ['error', 1],
};

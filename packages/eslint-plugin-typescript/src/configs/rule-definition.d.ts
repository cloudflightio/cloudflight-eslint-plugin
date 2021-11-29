import { Linter } from 'eslint';

export interface RuleDefinition {
    name: string;
    options: Linter.RuleEntry;
}

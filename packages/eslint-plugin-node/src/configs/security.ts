import {TSESLint} from '@typescript-eslint/utils';
import pluginSecurity from 'eslint-plugin-security';

const recommendedRules = pluginSecurity.configs.recommended.rules;
const updatedRules = Object.entries<TSESLint.Linter.RuleEntry>(recommendedRules)
    .map(([key, value]) => [key, warningEntryToError(value)]);

// yes, we know this works correctly
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const securityRules = Object.fromEntries(updatedRules) as TSESLint.Linter.RulesRecord;

function warningEntryToError(value: TSESLint.Linter.RuleEntry): TSESLint.Linter.RuleEntry {
    const level = Array.isArray(value) ? value[0] : value;
    const updatedLevel = warningLevelToError(level);

    return Array.isArray(value) ? [updatedLevel, value.slice(1)] : updatedLevel;
}

function warningLevelToError(level: TSESLint.Linter.RuleLevel): TSESLint.Linter.RuleLevel {
    if (level === 'warn') {
        return 'error';
    } else if (level === 1) {
        return 'error';
    }

    return level;
}

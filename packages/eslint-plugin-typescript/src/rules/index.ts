import { Rule } from 'eslint';
import { TestRule } from './test/test.rule';

export const rules: Record<string, Rule.RuleModule> = {
    'test-rule': TestRule,
};

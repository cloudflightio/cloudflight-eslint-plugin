import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscNoFallThroughCasesInSwitchRuleName = 'tsc-no-fall-through-cases-in-switch';
/**
 * Comment needed to prevent type declaration generation, which is broken.
 * @internal
 */
export const TscNoFallThroughCasesInSwitchRule = createTscRule({
    name: TscNoFallThroughCasesInSwitchRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#noFallthroughCasesInSwitch',
            recommended: 'strict',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'noFallthroughCasesInSwitch', expectedValue: true}),
});

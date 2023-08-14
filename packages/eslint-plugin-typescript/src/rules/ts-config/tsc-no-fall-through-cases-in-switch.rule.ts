import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscNoFallThroughCasesInSwitchRuleName = 'tsc-no-fall-through-cases-in-switch';
export const TscNoFallThroughCasesInSwitchRule = createTscRule({
    name: TscNoFallThroughCasesInSwitchRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#noFallthroughCasesInSwitch',
            recommended: 'error',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'noFallthroughCasesInSwitch', expectedValue: true}),
});

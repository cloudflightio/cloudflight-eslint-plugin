import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscAllowUnreachableCodeRuleName = 'tsc-allow-unreachable-code';
/**
 * Comment needed to prevent type declaration generation, which is broken.
 * @internal
 */
export const TscAllowUnreachableCodeRule = createTscRule({
    name: TscAllowUnreachableCodeRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#allowUnreachableCode',
            recommended: 'strict',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'allowUnreachableCode', expectedValue: false}),
});

import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscAllowUnreachableCodeRuleName = 'tsc-allow-unreachable-code';
export const TscAllowUnreachableCodeRule = createTscRule({
    name: TscAllowUnreachableCodeRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#allowUnreachableCode',
            recommended: 'error',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'allowUnreachableCode', expectedValue: false}),
});

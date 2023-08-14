import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscForceConsistentCasingInFileNamesRuleName = 'tsc-force-consistent-casing-in-file-names';
export const TscForceConsistentCasingInFileNamesRule = createTscRule({
    name: TscForceConsistentCasingInFileNamesRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#forceConsistentCasingInFileNames',
            recommended: 'error',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'forceConsistentCasingInFileNames', expectedValue: true}),
});

import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscImportHelpersRuleName = 'tsc-import-helpers';
export const TscImportHelpersRule = createTscRule({
    name: TscImportHelpersRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#importHelpers',
            recommended: 'error',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'importHelpers', expectedValue: true}),
});

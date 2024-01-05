import {createTscRule} from '../../util/create-rule';
import {tscRule} from '../../util/tsc-util';

export const TscImportHelpersRuleName = 'tsc-import-helpers';
/**
 * Comment needed to prevent type declaration generation, which is broken.
 * @internal
 */
export const TscImportHelpersRule = createTscRule({
    name: TscImportHelpersRuleName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'https://www.typescriptlang.org/tsconfig/#importHelpers',
            recommended: 'strict',
        },
        schema: [],
        messages: {},
    },
    defaultOptions: [],
    create: (context) => tscRule(context, {key: 'importHelpers', expectedValue: true}),
});

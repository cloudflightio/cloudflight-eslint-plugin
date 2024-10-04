import {AST_NODE_TYPES, TSESLint} from '@typescript-eslint/utils';

import {NoOnEventAssign, NoOnEventAssignName} from './no-on-event-assign';

const ruleTester = new TSESLint.RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
});

ruleTester.run(NoOnEventAssignName, NoOnEventAssign, {
    valid: ["target.addEventlistener('click', () => {})"],
    invalid: [
        {
            code: 'target.onclick = function(){}',
            errors: [{type: AST_NODE_TYPES.AssignmentExpression, messageId: 'noAssign'}],
        },
        {
            code: 'target.onclick = () => {}',
            errors: [{type: AST_NODE_TYPES.AssignmentExpression, messageId: 'noAssign'}],
        },
        {
            code: 'target.onclick = undefined',
            errors: [{type: AST_NODE_TYPES.AssignmentExpression, messageId: 'noAssign'}],
        },
    ],
});

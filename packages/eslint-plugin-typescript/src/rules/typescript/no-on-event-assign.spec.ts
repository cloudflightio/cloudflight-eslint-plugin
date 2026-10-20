import {RuleTester} from '@typescript-eslint/rule-tester';
import {AST_NODE_TYPES} from '@typescript-eslint/utils';

import {NoOnEventAssign, NoOnEventAssignName} from './no-on-event-assign';

const ruleTester = new RuleTester();

ruleTester.run(NoOnEventAssignName, NoOnEventAssign, {
    valid: [
        "target.addEventListener('click', () => {})",
        'count = 1',
        'target.title = "no event"',
        // a variable named like an event does not make the assigned key an event
        'const onclick = "title"; target[onclick] = 1;',
        // a template literal with expressions is a dynamic key
        `target[\`on\${name}\`] = 1`,
        // an attribute that is no event, and one whose name is not constant
        "target.setAttribute('title', 'no event')",
        'target.setAttribute(name, value)',
    ],
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
        {
            code: "target['onclick'] = () => {}",
            errors: [{type: AST_NODE_TYPES.AssignmentExpression, messageId: 'noAssign'}],
        },
        {
            code: 'target[`onclick`] = () => {}',
            errors: [{type: AST_NODE_TYPES.AssignmentExpression, messageId: 'noAssign'}],
        },
        {
            code: 'window.onmessage = () => {}',
            errors: [{type: AST_NODE_TYPES.AssignmentExpression, messageId: 'noAssign'}],
        },
        {
            code: "target.setAttribute('onClick', 'run()')",
            errors: [{type: AST_NODE_TYPES.CallExpression, messageId: 'noAttribute'}],
        },
    ],
});

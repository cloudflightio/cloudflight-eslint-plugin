import {RuleTester} from 'eslint';
import {NoOnEventAssign} from './no-on-event-assign';

const ruleTester = new RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
});

ruleTester.run('no-on-event-assign', NoOnEventAssign, {
    valid: ["target.addEventlistener('click', () => {})"],
    invalid: [
        {
            code: 'target.onclick = function(){}',
            errors: [{type: 'AssignmentExpression'}],
        },
        {
            code: 'target.onclick = () => {}',
            errors: [{type: 'AssignmentExpression'}],
        },
        {
            code: 'target.onclick = undefined',
            errors: [{type: 'AssignmentExpression'}],
        },
    ],
});

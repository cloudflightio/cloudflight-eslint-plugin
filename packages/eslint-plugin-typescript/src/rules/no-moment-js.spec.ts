import { RuleTester } from 'eslint';
import { NoMomentJsRule } from './no-moment-js';

const ruleTester = new RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
});

ruleTester.run('no-moment-js', NoMomentJsRule, {
    valid: ["import('foo').then()", "import { fn } from 'foo'", "const { fn } = require('foo')"],
    invalid: [
        {
            code: "import('moment').then(()=>{})",
            errors: [{ type: 'ImportExpression' }],
        },
        {
            code: "const fn = await import('moment')",
            errors: [{ type: 'ImportExpression' }],
        },
        {
            code: "import moment from 'moment'",
            errors: [{ type: 'ImportDeclaration' }],
        },
        {
            code: "import * as moment from 'moment'",
            errors: [{ type: 'ImportDeclaration' }],
        },
        {
            code: "const moment = require('moment')",
            errors: [{ type: 'CallExpression' }],
        },
        {
            code: "const format = require('moment').format",
            errors: [{ type: 'CallExpression' }],
        },
    ],
});

import {AST_NODE_TYPES, TSESLint} from '@typescript-eslint/utils';

import {NoMomentJsRule, NoMomentJsRuleName} from './no-moment-js';

const ruleTester = new TSESLint.RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
});

ruleTester.run(NoMomentJsRuleName, NoMomentJsRule, {
    valid: ["import('foo').then()", "import { fn } from 'foo'", "const { fn } = require('foo')"],
    invalid: [
        {
            code: "import('moment').then(()=>{})",
            errors: [{type: AST_NODE_TYPES.ImportExpression, messageId: 'noMomentJs'}],
        },
        {
            code: "const fn = await import('moment')",
            errors: [{type: AST_NODE_TYPES.ImportExpression, messageId: 'noMomentJs'}],
        },
        {
            code: "import moment from 'moment'",
            errors: [{type: AST_NODE_TYPES.ImportDeclaration, messageId: 'noMomentJs'}],
        },
        {
            code: "import * as moment from 'moment'",
            errors: [{type: AST_NODE_TYPES.ImportDeclaration, messageId: 'noMomentJs'}],
        },
        {
            code: "const moment = require('moment')",
            errors: [{type: AST_NODE_TYPES.CallExpression, messageId: 'noMomentJs'}],
        },
        {
            code: "const format = require('moment').format",
            errors: [{type: AST_NODE_TYPES.CallExpression, messageId: 'noMomentJs'}],
        },
    ],
});

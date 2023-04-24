import {RuleTester} from 'eslint';
import {NoPromiseAllRule} from './no-promise-all';

const ruleTester = new RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
});

ruleTester.run('no-promise-all', NoPromiseAllRule, {
    valid: ['const fn = Promise.allSettled', 'const fn = Promise.allSettled.bind(Promise)', 'const result = Promise.allSettled([a, b, c])'],
    invalid: [
        {
            code: 'const fn = Promise.all',
            errors: [{type: 'MemberExpression'}],
        },
        {
            code: 'const fn = Promise.all.bind(Promise)',
            errors: [{type: 'MemberExpression'}],
        },
        {
            code: 'const result = Promise.all([a, b, c])',
            errors: [{type: 'MemberExpression'}],
        },
    ],
});

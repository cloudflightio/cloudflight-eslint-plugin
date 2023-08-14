import {TSESLint} from '@typescript-eslint/utils';

import {TscAllowUnreachableCodeRule, TscAllowUnreachableCodeRuleName} from './tsc-allow-unreachable-code.rule';

const ruleTester = new TSESLint.RuleTester({
    parser: require.resolve('eslint-plugin-json-es'),
});

ruleTester.run(TscAllowUnreachableCodeRuleName, TscAllowUnreachableCodeRule, {
    valid: [
        {
            code: '{"compilerOptions": {"allowUnreachableCode": false}}',
        },
    ],
    invalid: [
        {
            code: '{"compilerOptions": {"allowUnreachableCode": true}}',
            output: '{"compilerOptions": {"allowUnreachableCode": false}}',
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: 'TS compiler option \'allowUnreachableCode\' must be set to \'false\'!'}],
        },
        {
            code: '{"compilerOptions": {}}',
            output: '{"compilerOptions": {"allowUnreachableCode": false}}',
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: "TS compiler option 'allowUnreachableCode' is missing!"}],
        },
        {
            code: '{}',
            output: '{"compilerOptions": {}}',
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: "TS Config option 'compilerOptions' is missing!"}],
        },
    ],
});

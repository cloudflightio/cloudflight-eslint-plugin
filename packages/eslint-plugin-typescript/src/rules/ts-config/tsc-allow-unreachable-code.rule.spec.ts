import {RuleTester} from 'eslint';
import {TscAllowUnreachableCodeRule} from './tsc-allow-unreachable-code.rule';

const ruleTester = new RuleTester({
    parser: require.resolve('eslint-plugin-json-es'),
});
ruleTester.run('tsc-allow-unreachable-code', TscAllowUnreachableCodeRule, {
    valid: [
        {
            code: `{"compilerOptions": {"allowUnreachableCode": false}}`,
        },
    ],
    invalid: [
        {
            code: `{"compilerOptions": {"allowUnreachableCode": true}}`,
            output: `{"compilerOptions": {"allowUnreachableCode": false}}`,
            errors: [{message: `TS compiler option 'allowUnreachableCode' must be set to 'false'!`}],
        },
        {
            code: `{"compilerOptions": {}}`,
            output: `{"compilerOptions": {"allowUnreachableCode": false}}`,
            errors: [{message: "TS compiler option 'allowUnreachableCode' is missing!"}],
        },
        {
            code: `{}`,
            output: `{"compilerOptions": {}}`,
            errors: [{message: "TS Config option 'compilerOptions' is missing!"}],
        },
    ],
});

import { RuleTester } from 'eslint';
import { PackagForcePrivateRule } from './package-force-private.rule';

const ruleTester = new RuleTester({
    parser: require.resolve('eslint-plugin-json-es'),
});
ruleTester.run('package-force-private', PackagForcePrivateRule, {
    valid: [
        {
            code: '{"private": true, "name": "package-private-test"}',
        },
    ],
    invalid: [
        {
            code: '{}',
            output: '{"private": true}',
            errors: [{ message: "package.json option 'private' is missing!" }],
        },
        {
            code: '{"private": false, "name": "package-private-test"}',
            output: '{"private": true, "name": "package-private-test"}',
            errors: [{ message: `package.json option 'private' must be set to 'true'!` }],
        },
        {
            code: '{"name": "package-private-test"}',
            output: '{"name": "package-private-test",\n"private": true}',
            errors: [{ message: "package.json option 'private' is missing!" }],
        },
    ],
});

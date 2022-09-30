import { RuleTester } from 'eslint';
import { PackageForcePrivateRule } from './package-force-private.rule';

const ruleTester = new RuleTester({
    parser: require.resolve('eslint-plugin-json-es'),
});
ruleTester.run('package-force-private', PackageForcePrivateRule, {
    valid: [
        {
            code: '{"private": true, "name": "package-private-test"}',
        },
        {
            code: '{"private": true, "publishConfig": {}, "name": "package-private-with-publish-test"}',
        },
        {
            code: '{"private": false, "publishConfig": {}, "name": "package-public-with-publish-test"}',
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
            code: '{"private": false, "name": "package-private-test", "publishConfig": {}}',
            options: [{ ignorePublished: false }],
            output: '{"private": true, "name": "package-private-test", "publishConfig": {}}',
            errors: [{ message: `package.json option 'private' must be set to 'true'!` }],
        },
        {
            code: '{"name": "package-private-test"}',
            output: '{"name": "package-private-test",\n"private": true}',
            errors: [{ message: "package.json option 'private' is missing!" }],
        },
    ],
});

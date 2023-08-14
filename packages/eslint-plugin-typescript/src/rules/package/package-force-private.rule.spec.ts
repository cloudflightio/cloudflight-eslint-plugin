import {TSESLint} from '@typescript-eslint/utils';

import {PackageForcePrivateRule, PackageForcePrivateRuleName} from './package-force-private.rule';

const ruleTester = new TSESLint.RuleTester({
    parser: require.resolve('eslint-plugin-json-es'),
});

ruleTester.run(PackageForcePrivateRuleName, PackageForcePrivateRule, {
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
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: "package.json option 'private' is missing!"}],
        },
        {
            code: '{"private": false, "name": "package-private-test"}',
            output: '{"private": true, "name": "package-private-test"}',
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: 'package.json option \'private\' must be set to \'true\'!'}],
        },
        {
            code: '{"private": false, "name": "package-private-test", "publishConfig": {}}',
            options: [{ignorePublished: false}],
            output: '{"private": true, "name": "package-private-test", "publishConfig": {}}',
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: 'package.json option \'private\' must be set to \'true\'!'}],
        },
        {
            code: '{"name": "package-private-test"}',
            output: '{"name": "package-private-test",\n"private": true}',
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: "package.json option 'private' is missing!"}],
        },
    ],
});

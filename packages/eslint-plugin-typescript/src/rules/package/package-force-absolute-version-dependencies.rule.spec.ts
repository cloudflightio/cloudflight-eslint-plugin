import {TSESLint} from '@typescript-eslint/utils';

import {
    PackageForceAbsoluteVersionDependenciesRule,
    PackageForceAbsoluteVersionDependenciesRuleName,
} from './package-force-absolute-version-dependencies.rule';

const ruleTester = new TSESLint.RuleTester({
    parser: require.resolve('eslint-plugin-json-es'),
});

ruleTester.run(PackageForceAbsoluteVersionDependenciesRuleName, PackageForceAbsoluteVersionDependenciesRule, {
    valid: [
        {
            code: '{"dependencies": { "dependency": "1.0.0"}}',
        },
        {
            code: '{"devDependencies": { "devDependency": "1.0.0"}}',
        },
        {
            code: '{"dependencies": { "dependency": "1.0.0"}, "devDependencies": { "devDependency": "1.0.0"}}',
        },
        {
            code: '{"dependencies": { "dependency": "http://asdf.com/asdf.tar.gz"}}',
        },
        {
            code: '{"dependencies": { "dependency": "file:../dyl"}}',
        },
        {
            code: '{"dependencies": { "dependency": "latest"}}',
        },
        {
            code: '{"dependencies": { "dependency": "git+ssh://git@github.com:npm/cli.git"}}',
        },
        {
            code: '{"dependencies": { "dependency": "user/repo#feature\\/branch"}}',
        },
    ],
    invalid: [
        {
            code: '{"dependencies": { "dependency": ">1.0.0"}}',
            output: '{"dependencies": { "dependency": "1.0.0"}}',
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: 'dependencies option \'dependency\' must be set to \'1.0.0\'!'}],
        },
        {
            code: '{"devDependencies": { "dependency": ">1.0.0"}}',
            output: '{"devDependencies": { "dependency": "1.0.0"}}',
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: 'devDependencies option \'dependency\' must be set to \'1.0.0\'!'}],
        },
        {
            code: '{"dependencies": { "dependency": ">=1.0.0"}}',
            output: '{"dependencies": { "dependency": "1.0.0"}}',
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: 'dependencies option \'dependency\' must be set to \'1.0.0\'!'}],
        },
        {
            code: '{"dependencies": { "dependency": "<1.0.0"}}',
            output: '{"dependencies": { "dependency": "1.0.0"}}',
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: 'dependencies option \'dependency\' must be set to \'1.0.0\'!'}],
        },
        {
            code: '{"dependencies": { "dependency": "<=1.0.0"}}',
            output: '{"dependencies": { "dependency": "1.0.0"}}',
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: 'dependencies option \'dependency\' must be set to \'1.0.0\'!'}],
        },
        {
            code: '{"dependencies": { "dependency": "~1.0.0"}}',
            output: '{"dependencies": { "dependency": "1.0.0"}}',
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: 'dependencies option \'dependency\' must be set to \'1.0.0\'!'}],
        },
        {
            code: '{"dependencies": { "dependency": "^1.0.0"}}',
            output: '{"dependencies": { "dependency": "1.0.0"}}',
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: 'dependencies option \'dependency\' must be set to \'1.0.0\'!'}],
        },
        {
            code: '{"dependencies": { "dependency": "1.0.x"}}',
            output: '{"dependencies": { "dependency": "1.0.0"}}',
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: 'dependencies option \'dependency\' must be set to \'1.0.0\'!'}],
        },
        {
            code: '{"dependencies": { "dependency": "1.x.0"}}',
            output: '{"dependencies": { "dependency": "1.0.0"}}',
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: 'dependencies option \'dependency\' must be set to \'1.0.0\'!'}],
        },
        {
            code: '{"dependencies": { "dependency": "1.x.x"}}',
            output: '{"dependencies": { "dependency": "1.0.0"}}',
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: 'dependencies option \'dependency\' must be set to \'1.0.0\'!'}],
        },
        {
            code: '{"dependencies": { "dependency": "*"}}',
            output: '{"dependencies": { "dependency": "*"}}',
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: 'dependencies option \'dependency\' must be set to an absolute version!'}],
        },
        {
            code: '{"dependencies": { "dependency": ""}}',
            output: '{"dependencies": { "dependency": ""}}',
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: 'dependencies option \'dependency\' must be set to an absolute version!'}],
        },
        {
            code: '{"dependencies": { "dependency": "1.0.0 - 2.0.0"}}',
            output: '{"dependencies": { "dependency": "1.0.0"}}',
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: 'dependencies option \'dependency\' must be set to \'1.0.0\'!'}],
        },
        {
            code: '{"dependencies": { "dependency": "4.0.0 || 1.0.0 - 2.0.0"}}',
            output: '{"dependencies": { "dependency": "4.0.0"}}',
            // @ts-expect-error typescript-eslint forbids this for some reason, but is fine for our case
            errors: [{message: 'dependencies option \'dependency\' must be set to \'4.0.0\'!'}],
        },
    ],
});

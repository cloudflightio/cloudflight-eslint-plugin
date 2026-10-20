import {TSESLint} from '@typescript-eslint/utils';

export const securityRules: TSESLint.Linter.RulesRecord = {
    'security/detect-bidi-characters': 'error',
    // no-eval reports every eval already
    'security/detect-eval-with-expression': 'off',
    'security/detect-non-literal-regexp': 'warn',
    'security/detect-unsafe-regex': 'warn',
    'security/detect-disable-mustache-escape': 'warn',
    'security/detect-no-csrf-before-method-override': 'off',
    'security/detect-possible-timing-attacks': 'off',
    // reports every lookup with a computed key, typed index access included
    'security/detect-object-injection': 'off',
    'security/detect-pseudoRandomBytes': 'off',
    'security/detect-buffer-noassert': 'off',
    'security/detect-new-buffer': 'off',
    'security/detect-child-process': 'off',
    'security/detect-non-literal-fs-filename': 'off',
    'security/detect-non-literal-require': 'off',
    'no-unsanitized/method': 'error',
    'no-unsanitized/property': 'error',
};

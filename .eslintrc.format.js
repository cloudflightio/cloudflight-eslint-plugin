require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    plugins: ['@cloudflight/typescript'],
    extends: ['plugin:@cloudflight/typescript/formatting'],
    ignorePatterns: ['*.json'],
    env: {
        es6: true,
        node: true,
    },
};

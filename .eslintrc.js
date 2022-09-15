require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    plugins: ['@cloudflight/typescript'],
    extends: ['plugin:@cloudflight/typescript/recommended'],
    env: {
        es6: true,
        node: true,
    },
    parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./packages/*/tsconfig.json', './packages/*/tsconfig.spec.json'],
        // Even though this should be the default according to the documentation,
        // not specifying the version causes it to be stuck on 5, breaking spread operation linting and more.
        ecmaVersion: 11,
    },
};

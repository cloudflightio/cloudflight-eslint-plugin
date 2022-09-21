require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    plugins: ['@cloudflight/typescript'],
    extends: ['plugin:@cloudflight/typescript/recommended'],
    ignorePatterns: ['jest.config*.ts'],
    rules: {
        // This package is published, so private should not be forced
        '@cloudflight/typescript/package-force-private': 0,
    },
    env: {
        es6: true,
        node: true,
    },
    parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./packages/*/tsconfig.json', './packages/*/tsconfig.spec.json'],
    },
};

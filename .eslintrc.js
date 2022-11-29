require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    plugins: ['@cloudflight/typescript'],
    extends: ['plugin:@cloudflight/typescript/recommended'],
    ignorePatterns: ['jest.config*.ts'],
    env: {
        es6: true,
        node: true,
    },
    parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./packages/*/tsconfig.json', './packages/*/tsconfig.spec.json'],
    },
    rules: {
        '@cloudflight/typescript/package-force-absolute-version-dependencies': 'off',
    },
};

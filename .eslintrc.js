module.exports = {
    root: true,
    plugins: ['@clf-internal/typescript'],
    extends: ['plugin:@clf-internal/typescript/recommended'],
    env: {
        es6: true,
        node: true,
    },
    parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./packages/*/tsconfig.json'],
    },
};

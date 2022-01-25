module.exports = {
    root: true,
    plugins: ['@clf-internal/typescript'],
    env: {
        es6: true,
        node: true,
    },
    parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
    },
    overrides: [
        {
            files: ['*.ts'],
            extends: ['plugin:@clf-internal/typescript/recommended'],
            parserOptions: {
                project: ['./packages/*/tsconfig.json'],
            },
        },
    ],
};

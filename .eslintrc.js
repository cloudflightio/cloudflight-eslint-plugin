module.exports = {
    root: true,
    plugins: ['@cloudflight/typescript'],
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
            extends: ['plugin:@cloudflight/typescript/recommended'],
            parserOptions: {
                project: ['./packages/*/tsconfig.json'],
            },
        },
    ],
};

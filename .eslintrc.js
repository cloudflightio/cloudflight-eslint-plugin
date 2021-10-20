module.exports = {
    root: true,
    plugins: ['@cloudflight/typescript', 'eslint-plugin'],
    env: {
        es6: true,
        node: true,
    },
    extends: ['plugin:@cloudflight/typescript/recommended'],
    parserOptions: {
        project: ['./packages/*/tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
};

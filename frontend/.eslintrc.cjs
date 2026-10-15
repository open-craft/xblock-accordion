module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite*.ts'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', '@typescript-eslint'],
    parserOptions: {
        requireConfigFile: true,
        project: true,
    },
    rules: {
        'class-methods-use-this': 'off',
        curly: ['error', 'all'],
        'max-len': [
            'error',
            120,
            2,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'arrow-parens': 'off',
        'jsx-a11y/label-has-associated-control': ['error', {
            labelComponents: [],
            labelAttributes: [],
            controlComponents: [],
            assert: 'htmlFor',
            depth: 25,
        }],
        'react/jsx-props-no-spreading': 'off',
        // Optional props are given defaults in the function signature, which is
        // the TypeScript-friendly equivalent of defaultProps.
        'react/require-default-props': ['error', { functions: 'defaultArguments' }],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/destructuring-assignment': 'off',
        'no-plusplus': 'off',
        strict: 'off',
    },
}

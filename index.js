module.exports = {
    parser: 'babel-eslint',
    extends: [
        'standard',
        'plugin:jest/recommended',
        'babel'
    ],
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module'
    },
    plugins: ['jest', 'unicorn', 'html', 'simple-import-sort'],
    rules: {
        strict: 'off',
        indent: ['error', 4],
        'no-cond-assign': 'off',
        'no-case-declarations': 'error',
        'no-sequences': 'off',
        'no-void': 'off',
        'no-async-promise-executor': 'off',
        'require-await': 'error',
        'unicorn/explicit-length-check': 'error',
        'unicorn/throw-new-error': 'error',
        'unicorn/custom-error-definition': 'error',
        'unicorn/import-index': 'error',
        'unicorn/error-message': 'error',
        'sort-imports': 'off',
        'import/order': 'off',
        'simple-import-sort/sort': ['error', {
            groups: [
                ['^react', '^@?\\w'],
                ['^\\.'],
                ['^\\u0000']
            ]
        }],
        'babel/new-cap': 1,
        'babel/camelcase': 1,
        'babel/no-invalid-this': 1,
        'babel/object-curly-spacing': 1,
        'babel/quotes': 1,
        'babel/semi': 1,
        'babel/no-unused-expressions': 1,
        'babel/valid-typeof': 1
    }
}

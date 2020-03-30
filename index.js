module.exports = {
    parser: 'babel-eslint',
    extends: [
        'standard',
        'plugin:jest/recommended'
    ],
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module'
    },
    plugins: ['jest', 'unicorn', 'html', 'simple-import-sort', 'babel'],
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
        'no-unused-expressions': 'off',
        'babel/no-unused-expressions': 'error',
        'jest/no-jasmine-globals': 'off'
    }
}

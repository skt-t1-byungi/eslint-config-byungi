module.exports = {
    parser: 'babel-eslint',
    extends: [
        'standard',
        'plugin:jest/recommended'
    ],
    parserOptions: {
        ecmaVersion: 11,
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
        'no-labels': 'off',
        'require-await': 'error',
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
        'promise/param-names': 'off',
        'jest/no-jasmine-globals': 'off'
    }
}

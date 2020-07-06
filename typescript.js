module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint'
    ],
    parserOptions: {
        project: './tsconfig.json'
    },
    extends: [
        './index.js',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        camelcase: 'off',
        'unicorn/custom-error-definition': 'off',
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': ['error', 'all', { nestedBinaryExpressions: false }],
        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        indent: 'off',
        '@typescript-eslint/indent': ['error', 4],
        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': ['error'],
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': ['error'],
        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
        'no-unused-expressions': 'off',
        'babel/no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': ['error'],
        quotes: 'off',
        '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
        semi: 'off',
        '@typescript-eslint/semi': ['error', 'never'],
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': ['error', 'always']
    }
}

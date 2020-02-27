module.exports = {
    extends: [
        './index.js',
        'standard-react'
    ],
    plugins: [
        'react-hooks'
    ],
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-handler-names': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    }
}

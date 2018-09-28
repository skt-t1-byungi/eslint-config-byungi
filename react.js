module.exports = {
    "parser": "babel-eslint",
    "rules": {
        "strict": 0,
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4]
    },
    extends: [
        "./index.js",
        "standard-react"
    ]
}
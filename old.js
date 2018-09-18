module.exports = {
    extends: [
        "standard",
    ],
    plugins: ["html"],
    parserOptions: {
        "ecmaVersion": 5,
        "sourceType": "script"
    },
    env: {
        "browser": true,
        "node": false,
        "jquery": true
    },
    rules:{
        "indent": ["error", 4]
    }
}
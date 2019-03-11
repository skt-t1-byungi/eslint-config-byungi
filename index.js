module.exports = {
    "parser": "babel-eslint",
    extends: [
        "standard",
        "plugin:ava/recommended"
    ],
    parserOptions: {
        ecmaVersion: 8,
        sourceType: "module"
    },
    plugins: ["ava", "unicorn", "html"],
    rules:{
        "strict": "off",
        "indent": ["error", 4],
        "no-cond-assign": "off",
        "no-case-declarations": "error",
        "no-sequences": "off",
        "require-await": "error",
        "ava/no-only-test": "off",
        "ava/no-skip-test": "off",
        "unicorn/explicit-length-check": "error",
        "unicorn/throw-new-error": "error",
        "unicorn/custom-error-definition": "error",
        "unicorn/import-index": "error",
        "unicorn/error-message": "error"
    }
}

module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint"
    ],
    extends: [
        "./index.js",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    rules: {
        "unicorn/custom-error-definition": "off",
        "@typescript-eslint/array-type": ["error", {"default": "array-simple"}],
        "camelcase": "off",
        "@typescript-eslint/camelcase": ["error", { "properties": "never" }],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-explicit-any": "off"
    }
}

module.exports = {
  extends: [
    "standard", 
    "plugin:ava/recommended"
  ],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module"
  },
  plugins: ["ava", "unicorn"],
  rules:{
    "no-cond-assign": "off",
    "no-case-declarations": "error",
    "require-await": "error",
    "ava/no-only-test": "off",
    "ava/no-skip-test": "off",
    "unicorn/catch-error-name": ["error", {"name": "err"}],
    "unicorn/explicit-length-check": "error",
    "unicorn/no-array-instanceof": "error",
    "unicorn/throw-new-error": "error",
    "unicorn/prefer-starts-ends-with": "error",
    "unicorn/prefer-type-error": "error",
    "unicorn/import-index": "error",
    "unicorn/error-message": "error"
  }
}
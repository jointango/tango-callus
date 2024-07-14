const eslint = require("@eslint/js");
const eslintConfigPrettier = require("eslint-config-prettier");
const imprt = require("eslint-plugin-import");
const tseslint = require("typescript-eslint");

module.exports = tseslint.config(
  {
    ignores: ["build/", "**/*.js", "**/*.config.ts"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },

    plugins: {
      import: imprt,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/no-floating-promises": "warn",
      "import/no-cycle": "error",
      "no-unsafe-optional-chaining": "warn",
      "@typescript-eslint/no-explicit-any": "error",
      eqeqeq: ["error"],
    },
  },
  eslintConfigPrettier
);

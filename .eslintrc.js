module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", "tab"],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/prop-types": 0,
    "no-unused-vars": 0,
    "no-undef": 0,
    "no-cond-assign": 0,
    "react/display-name": 0,
    "react/no-render-return-value": 0,
    "react/no-children-prop": 0
  },
  settings: {
    react: {
      version: "detect",
    }
  }
};

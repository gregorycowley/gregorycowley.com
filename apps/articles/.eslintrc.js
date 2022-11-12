module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  extends: [
    "next/core-web-vitals"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: 0,//["error", "tab"],
    "linebreak-style": ["error", "unix"],
    quotes: 0,//["error", "double"],
    semi: 0,//["error", "always"],
    "react/prop-types": 0,
    "no-unused-vars": 0,
    "no-undef": 0,
    "no-img-element": 0,
    "@next/next/no-img-element": 0,
    "@next/next/no-css-tags": 0,
    "no-cond-assign": 0,
    "react/display-name": 0,
    "react/no-render-return-value": 0,
    "react/no-children-prop": 0,
    "jsx-a11y/alt-text": 0,
    "react/jsx-key": "off",
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off"
  },
  settings: {
    react: {
      version: "detect",
    }
  }
};

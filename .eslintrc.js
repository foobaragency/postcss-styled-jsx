module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
}

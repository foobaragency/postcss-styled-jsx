# PostCSS styled-jsx Syntax

[PostCSS](https://github.com/postcss/postcss) syntax for parsing [styled jsx](https://github.com/vercel/styled-jsx)

### Disclaimers

1. This package is intended to be used as a custom syntax for stylelint on React or Next.js projects using styled jsx. We have no intention of supporting all postcss post-processing features.
2. We're not using the `postcss-css-in-js` from stylelint because that package is meant to be deprecated. See [this issue](https://github.com/stylelint/postcss-css-in-js/issues/225)

## Getting started

```bash
npm install --save-dev postcss-styled-jsx
```

## Using with stylelint

```js
// .stylelintrc.js
module.exports = {
  extends: ["stylelint-config-recommended"],
  customSyntax: "postcss-styled-jsx",
}
```

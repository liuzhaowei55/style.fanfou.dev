# ESLint

- [ESLint Homepage](https://eslint.org/)

## 安装

```bash
npm install eslint @umijs/fabric --save-dev
```

配置

```bash
cat <<EEE > .eslintrc.js
const fabric = require('@umijs/fabric');

module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],

  rules: {
    // your rules
  },
};
EEE
```

## 使用

```bash
eslint "src/**"
```
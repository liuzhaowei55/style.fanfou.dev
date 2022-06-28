# Stylelint

- [Stylelint Homepage](https://stylelint.io/)

## 安装

```bash npm2yarn
npm install --save-dev stylelint @umijs/fabric
```

配置

```bash
cat <<EEE > .stylelintrc.js
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/stylelint')],
  rules: {
    // your rules
  },
};
EEE
```

.lintstagedrc.json 配置

```json
{
  "*.{css}": ["npx stylelint"]
}
```

## 使用

```bash
npx stylelint "**/*.{css}"
```

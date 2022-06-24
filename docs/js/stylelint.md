# Stylelint

- [Stylelint Homepage](https://stylelint.io/)

## 安装

```bash
npm install --save-dev stylelint stylelint-config-standard stylelint-config-prettier
```

配置

```bash
cat <<EEE > .stylelintrc.js
module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
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

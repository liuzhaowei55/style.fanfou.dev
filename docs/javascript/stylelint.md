# Stylelint

- [Stylelint Homepage](https://stylelint.io/)
- [stylelint/stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

## 安装

```bash npm2yarn
npm install --save-dev stylelint stylelint-config-standard
```

配置

```bash
cat <<EEE > .stylelintrc.js
module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    // your rules
  },
};
EEE
```

.lintstagedrc.json 配置

```json
{
  "*.{css}": ["stylelint"]
}
```

## 使用

```bash
npx stylelint "src/**/*.{css}"
```

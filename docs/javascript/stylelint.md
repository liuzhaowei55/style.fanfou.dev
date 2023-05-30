# Stylelint

- [Stylelint Homepage](https://stylelint.io/)
- [stylelint/stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

## 安装

```bash npm2yarn
npm install --save-dev stylelint stylelint-config-standard
```

```bash
npm pkg set scripts.stylelint="stylelint src/**/*.css"
npm pkg set scripts.stylelint:fix="stylelint --fix src/**/*.css"
```

配置

```js title='.stylelintrc.js'
module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    // your rules
  },
};
```

配置 lint-staged 自动格式化

```json title='.lintstagedrc.json'
{
  "*.{css}": ["stylelint"]
}
```

## 使用

```bash
npx stylelint "src/**/*.{css}"
```

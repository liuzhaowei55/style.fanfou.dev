# prettier

- [Prettier Homepage](https://prettier.io/)
- [AlloyTeam/eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)

## 安装

```bash npm2yarn
npm install --save-dev prettier prettier-plugin-organize-imports prettier-plugin-packagejson eslint-config-alloy
```

```bash
npm pkg set scripts.prettier="prettier --ignore-unknown src"
npm pkg set scripts.prettier:fix="prettier -write --ignore-unknown src"
```

创建配置文件

```js title='.prettierrc.js'
module.exports = {
  ...require('eslint-config-alloy/.prettierrc.js'),
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-packagejson'],
};
```

创建 ignore 文件

```ignore title='.prettierignore'
# Ignore artifacts:
build
coverage
*.html
```

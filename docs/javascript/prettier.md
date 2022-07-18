# prettier

- [Prettier Homepage](https://prettier.io/)
- [AlloyTeam/eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)

## 安装

```bash npm2yarn
npm install --save-dev prettier prettier-plugin-organize-imports prettier-plugin-packagejson eslint-config-alloy
```

创建配置文件

```bash
cat <<EEE > .prettierrc.js
module.exports = {
  ...require('eslint-config-alloy/.prettierrc.js'),
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-packagejson'],
};
EEE
```

创建 ignore 文件

```bash
cat <<EEE > .prettierignore
# Ignore artifacts:
build
coverage
*.html
EEE
```

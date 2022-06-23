# prettier

* [Prettier Homepage](https://prettier.io/)
* [umijs/fabric](https://github.com/umijs/fabric)

## 安装

```bash
yarn add prettier prettier-plugin-organize-imports prettier-plugin-packagejson @umijs/fabric -D
```

创建配置文件

```bash
cat <<EEE > .prettierrc.js
const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
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
# commitlint

- [commitlint homepage](https://commitlint.js.org/)

## 安装

```bash npm2yarn
npm install --save-dev @commitlint/config-conventional @commitlint/cli
```

添加配置文件

```js title='.commitlintrc.js'
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

设置 husky hooks

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit ${1}'
```

# commitlint

- [commitlint homepage](https://commitlint.js.org/)

## 安装

```bash npm2yarn
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

添加配置文件

```js title='commitlint.config.js'
export default {
  extends: ['@commitlint/config-conventional'],
};
```

设置 husky hooks

```bash
echo "npx --no -- commitlint --edit ${1}" >> .husky/commit-msg
```

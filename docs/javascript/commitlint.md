---
title: Git - commitlint
---

- [commitlint homepage](https://commitlint.js.org/)

## 安装

```bash npm2yarn
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

添加配置文件

```js title='commitlint.config.mjs'
const Configuration = {
  extends: ['@commitlint/config-conventional'],
};

export default Configuration;
```

设置 husky hooks

```bash
echo "npx --no -- commitlint --edit ${1}" >> .husky/commit-msg
```

设置 Lefthook

```yaml
commit-msg:
  commands:
    commitlint:
      run: pnpm dlx commitlint --edit
```

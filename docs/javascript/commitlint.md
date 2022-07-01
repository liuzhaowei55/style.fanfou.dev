# commitlint

- [commitlint homepage](https://commitlint.js.org/)

## 安装

```bash npm2yarn
npm install --save-dev @commitlint/config-conventional @commitlint/cli
```

添加配置文件

```bash
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > .commitlintrc.js
```

添加 husky hooks

## 设置 hooks

```bash
cat <<EEE > .husky/commit-msg
#!/bin/sh
. "\$(dirname "\$0")/_/husky.sh"

npx --no -- commitlint --edit "\${1}"
EEE
```

添加文件执行权限

```bash
chmod a+x .husky/commit-msg
```

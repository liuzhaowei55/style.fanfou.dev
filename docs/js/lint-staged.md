# lint-staged

* [github.com/okonet/lint-staged](https://github.com/okonet/lint-staged)

## 安装

```bash
yarn add lint-staged -D
```

配置

```bash
cat <<EEE > .lintstagedrc.json
{
  "*": "your-cmd"
}
EEE
```

```bash
npx husky add .husky/pre-commit 'npx --no-install lint-staged --quiet'
```
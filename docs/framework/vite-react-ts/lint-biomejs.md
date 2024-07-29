# Lint - @biomejs/biome

- [github.com/biomejs/biome](https://github.com/biomejs/biome)
- [biomejs.dev/guides](https://biomejs.dev/guides/getting-started/)

## 安装

```shell npm2yarn
npm install --save-dev --save-exact @biomejs/biome
```

## 配置

下载配置文件放置在项目根目录

```json title="biome.json"
{
  "$schema": "https://biomejs.dev/schemas/1.8.3/schema.json",
  "organizeImports": {
    "enabled": true
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "lineWidth": 120
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  }
}
```

配置 pkg.scripts 命令

```shell npm2yarn
npm pkg set scripts.lint="biome check --write src"
```

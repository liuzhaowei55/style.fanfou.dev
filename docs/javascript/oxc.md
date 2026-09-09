# oxc

- https://oxc.rs/docs/guide/usage/linter/quickstart.html
- https://oxc.rs/docs/guide/usage/formatter/quickstart.html

## Oxlint

```bash npm2yarn
npm install --save-dev oxlint
```

```json title=".oxlintrc.json"
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

```json title="package.json"
{
  "scripts": {
    "lint": "oxlint",
    "lint:fix": "oxlint --fix"
  }
}
```

## Oxfmt

```bash npm2yarn
npm install --save-dev oxfmt
```

```json title=".oxfmtrc.json"
{
  "$schema": "./node_modules/oxfmt/configuration_schema.json",
  "ignorePatterns": ["index.html"],
  "printWidth": 120
}
```

```json title="package.json"
{
  "scripts": {
    "fmt": "oxfmt",
    "fmt:check": "oxfmt --check"
  }
}
```

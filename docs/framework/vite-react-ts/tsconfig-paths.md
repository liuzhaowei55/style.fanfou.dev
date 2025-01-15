---
title: tsconfig-paths
---

- [paths | TSConfig Reference](https://www.typescriptlang.org/tsconfig/#paths)
- [resolve.alias | Vite 官方中文文档](https://cn.vite.dev/config/shared-options#resolve-alias)

```bash
pnpm add -D @types/node
```

```json title="tsconfig.json"
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

```javascript title="vite.config.ts"
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
```

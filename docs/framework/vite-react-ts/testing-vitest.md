# Testing - Vitest

- [Vitest 官网](https://cn.vitest.dev/)

## 安装

```shell npm2yarn
npm install -D vitest @vitest/ui
```

```shell npm2yarn
npm install -D @testing-library/jest-dom @testing-library/react @testing-library/user-event jsdom
```

```shell
npm pkg set scripts.test="vitest --ui"
```

## 配置

```javascript title="vite.config.ts"
// highlight-next-line
/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // highlight-start
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    css: true,
  },
  // highlight-end
});
```

```javascript title="vitest.setup.ts"
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});
```

## Test

测试项目由 `npm create vite@latest my-app-react -- --template react-ts` 生成

```javascript title="src/App.test.tsx"
import { expect, it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('Input', async () => {
  it('app', () => {
    render(<App />);
    const element = screen.getByRole('heading', { level: 1 });
    expect(element).toBeInTheDocument();
  });
});
```

## 常见问题

1. Error:
   Uncaught [TypeError: Cannot destructure property 'basename' of 'React__namespace.useContext(...)' as it is null.]

如果项目中使用了 `React Router`，同时测试组件中包含 `Link` 等组件，需要将组件包裹在 `MemoryRouter`
等组件中进行测试，[V5 版本官方文档说明](https://v5.reactrouter.com/web/guides/testing)

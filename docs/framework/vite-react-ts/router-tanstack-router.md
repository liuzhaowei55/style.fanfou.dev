# Router - TanStack Router

- [TanStack Router 官网](https://tanstack.com/router/latest)
- [TanStack Router GitHub](https://github.com/TanStack/router)

基于文件系统自动生成路由

**目前不推荐使用，因为 GitHub 正在频繁提交中，且 API 正在不断变化，项目需要及时更新，否则可能导致无法使用。**

**项目框架由 `npm create vite@latest my-app-react -- --template react-ts` 提供**

## 安装

```bash npm2yarn
npm install @tanstack/react-router
```

```bash npm2yarn
npm install --save-dev @tanstack/router-vite-plugin @tanstack/router-devtools
npm install --save-dev @types/node
```

## 配置

```javascript title="vite.config.ts"
import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
});
```

```javascript title="src/main.tsx"
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

import "./index.css";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

```

## 路由文件

```javascript title="src/routes/__root.tsx"
import { createRootRoute, Outlet } from '@tanstack/react-router';
import React, { Suspense } from 'react';

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      );

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
});
```

```javascript title="src/routes/index.lazy.tsx"
import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import { createLazyFileRoute } from '@tanstack/react-router';

import './index.css';

const Component = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
};

export const Route = createLazyFileRoute('/')({
  component: Component,
});
```

```javascript title="src/routes/about.lazy.tsx"
import { createLazyFileRoute } from "@tanstack/react-router";
import type { FC } from "react";

const Component: FC = () => {
  return <div>Hello /about!</div>;
};

export const Route = createLazyFileRoute("/about")({
  component: Component,
});

```

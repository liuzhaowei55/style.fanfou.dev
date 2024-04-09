# Router - React Router

- [React Router 官网](https://reactrouter.com/en/main)
- [React Router GitHub](https://github.com/remix-run/react-router)

**项目框架由 `npm create vite@latest my-app-react -- --template react-ts` 提供**

## 安装

```bash npm2yarn
npm install react-router-dom
```

## 创建路由文件

```javascript title="src/router.tsx"
import { RouteObject, createBrowserRouter } from "react-router-dom";

const routes: RouteObject[] = [{ path: "/", lazy: () => import("./App") }];

const router = createBrowserRouter(routes);

export default router;

```

创建 Fallback 组件, 在页面加载缓慢时显示，为避免闪屏，延迟超过 300ms 才显示

```javascript title="src/fallback.tsx"
import { useEffect, useState } from 'react';

export default function Fallback() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 300);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <div>{show && <h1>Loading</h1>}</div>;
}
```

## 编辑页面

React Router 使用 lazy loading 来实现路由懒加载，因此页面文件需要导出名为 `Component` 的组件。详细说明见[官网文档](https://reactrouter.com/en/main/route/lazy#lazy)

```javascript title="src/App.tsx"
import { useState } from "react";
import type { FC } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

export const Component: FC = () => {
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

```

## 引入路由

```javascript title="src/main.tsx"
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// highlight-start
import FallbackElement from "./fallback.tsx";
import router from "./router.ts";
// highlight-end

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    // highlight-start
    <RouterProvider router={router} fallbackElement={<FallbackElement />} />
    // highlight-end
  </React.StrictMode>
);

```

# Router - React Router

- [React Router 官网](https://reactrouter.com/en/main)
- [React Router GitHub](https://github.com/remix-run/react-router)

**项目框架由 `npm create vite@latest my-app-react -- --template react-ts` 提供**

## 安装

```bash npm2yarn
npm install react-router
```

## 创建路由文件

```javascript title="src/routes.tsx"
import type { RouteObject } from "react-router";
import Fallback from "./fallback";

export const routes: RouteObject[] = [
  {
    path: "/",
    HydrateFallback: Fallback,
    children: [
      {
        index: true,
        lazy: () => import("./App"),
      },
    ],
  },
  {
    path: "*",
    HydrateFallback: Fallback,
    element: <>404</>,
  },
];

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
import type { FC } from "react";

// 所有组件导出须以 Component 作为名称
export const Component: FC = () => {
  return <>App Page.</>;
};

```

## 引入路由

```javascript title="src/main.tsx"
import React from "react";
import ReactDOM from "react-dom/client";

// highlight-start
import { RouterProvider, createBrowserRouter } from "react-router";
import { routes } from "./routes.tsx";
// highlight-end

const router = createBrowserRouter(routes);

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    // highlight-start
    <RouterProvider router={router} />
    // highlight-end
  </React.StrictMode>,
);

```

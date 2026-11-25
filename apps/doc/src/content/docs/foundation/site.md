---
title: 文档站与在线演示
description: 知道去哪里写文档、改导航、接组件演示。
---

Astro 把文档和演示打成一个静态站。Starlight 提供侧栏和搜索，React 集成负责渲染组件。

## 加一页文档

1. 在 `apps/doc/src/content/docs/` 新增文件。例如 `components/example.mdx` 对应 `/components/example/`。
2. 写好 `title` 和 `description`，再到 `apps/doc/astro.config.mjs` 的 `sidebar` 加上 `components/example`。

站点标题、中文根路径和 Rapide 主题都在 `astro.config.mjs`。文档布局样式放在 `src/styles/custom.css`。

## 演示怎么接组件

`src/pages/playground.astro` 对应 [`/playground/`](../../playground/)。它渲染 `src/components/demo.tsx`，后者从组件包名导入 Button 和 Input。演示要用 React 状态或事件时，`client:load` 会在浏览器激活它。

```astro
---
import Demo from "../components/demo";
---

<Demo client:load />
```

正文链接用相对路径，Astro 页面用 `import.meta.env.BASE_URL` 拼站内链接。这样部署到 Pages 子路径时也能打开。

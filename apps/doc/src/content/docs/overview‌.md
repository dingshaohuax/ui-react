---
title: 概述
description: xxx
sidebar:
  order: 1
---

从 **pnpm workspace 的 Monorepo** 开始，把核心库、演示应用、文档站分开管理。


```text
tpl-fe-comp/
├── packages/
│   └── core/             # React + TypeScript，Vite 库模式构建
├── apps/
│   ├── playground/       # React + Vite，开发调试与完整场景演示
│   └── docs/             # Starlight 做文档项目
├── pnpm-workspace.yaml
├── package.json          # 统一开发、构建、检查命令
└── tsconfig.base.json
```




核心库把 React 放入 `peerDependencies`，构建时排除 React 及相关运行时，避免给使用方打包另一份 React。[Vite 库模式文档](https://vite.dev/guide/build#library-mode)
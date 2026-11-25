---
title: 模板概览
description: 跑起来，再看组件库、文档和发布是怎么接起来的。
---

## 先跑起来

用 Node.js 24 和根 `package.json` 指定的 pnpm，在仓库根目录运行。

```bash
pnpm install --frozen-lockfile
pnpm dev
```

`pnpm dev` 先构建组件库，再启动组件监听和文档站。打开终端给的地址，点[在线演示](../playground/)看看按钮和输入框。

## 再看三个地方

| 从哪看 | 能看到什么 |
| --- | --- |
| `packages/core/` | 组件怎么导出，tsdown 怎么把源码打成包。 |
| `apps/doc/` | 文档和演示怎么通过 `workspace:*` 用到刚构建的包。 |
| `.github/workflows/` | 文档发到 GitHub Pages，组件包发到 npm。 |

## 复制成自己的项目

1. [换包名，跑构建](./workspace/)。一起改根脚本、站点依赖和发布校验。
2. [换站点标题和导航](./site/)。新文档放进 `src/content/docs/`。
3. [按需接发布](./delivery/)。Pages 跟分支走，npm 跟版本标签走。

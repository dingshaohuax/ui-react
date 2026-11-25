---
title: 工作区与组件构建
description: 看 pnpm 怎么把组件库和文档站接起来，以及 tsdown 打出了什么。
---

## 两个项目怎么接起来

`pnpm-workspace.yaml` 把 `packages/*` 和 `apps/*` 放进同一个工作区。文档站依赖里的 `"@dingshaohuax/ui-react": "workspace:*"` 会链接本地组件包，导入时走包的公开入口。

```text
packages/core/src/index.ts → tsdown → packages/core/dist/ → apps/doc
```

## 组件包看哪里

从 `packages/core/src/index.ts` 导出组件并引入样式。这里用 tsdown 一次构建 JS、类型声明和 CSS，配置在 `packages/core/package.json`。

| 配置 | 作用 |
| --- | --- |
| `exports` | 包名指向 `dist/index.js`。 |
| `tsdown.dts` | 生成 `dist/index.d.ts`。 |
| `tsdown.css.inject` | 让 JS 入口导入构建出来的 `style.css`。 |
| `peerDependencies` | React 由使用方提供。 |
| `files` | npm 包带上 `dist`。 |

## 换包名时一起改

改组件包的 `name` 和仓库地址，再同步根脚本中的 `-F`、`apps/doc` 的依赖和导入、`publish-npm.yml` 的包名校验。运行 `pnpm install` 更新锁文件。

```bash
pnpm build          # 先生成组件包
pnpm -F doc build   # 再用组件包构建站点
```

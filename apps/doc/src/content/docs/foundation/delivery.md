---
title: 发布与部署
description: 把文档部署到 GitHub Pages，把组件包发布到 npm。
---

## GitHub Pages 发站点

仓库 **Settings → Pages → Source** 选择 **GitHub Actions**。推送 `main` 后，`deploy-pages.yml` 先构建组件库，再部署 `apps/doc/dist/`。站点域名和路径前缀由 Pages 配置传给 Astro。[GitHub Pages 设置](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)

本地模拟项目子路径，把 `/ui-react` 换成你的仓库路径。

```bash
pnpm build
PAGES_BASE_PATH=/ui-react pnpm -F doc build
PAGES_BASE_PATH=/ui-react pnpm -F doc preview
```

打开带前缀的首页，点一下文档和在线演示。

## npm 发组件包

1. 在目标 npm 包的 **Settings → Trusted publishing** 填实际 GitHub owner、repo 和 `publish-npm.yml`，允许 `npm publish`。新包先完成首发。[npm 首发](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages/) · [Trusted Publishing](https://docs.npmjs.com/trusted-publishers/)
2. 改 `packages/core/package.json` 的版本。先构建，再检查包里有入口、类型和 CSS。
3. 提交并推送和版本一致的新标签。例如 `0.2.0` 对应 `v0.2.0`，工作流会校验并发布。

```bash
pnpm build
(cd packages/core && npm pack --dry-run)
```

如果同时换包名，先[同步脚本、依赖和发布校验](../workspace/#换包名时一起改)。

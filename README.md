# ui-react
前端组件模板仓库，包含组件库和 Astro/Starlight 站点。站点提供文档和在线演示。

## 本地开发

在仓库根目录运行：

```bash
pnpm install
pnpm dev
```

`pnpm dev` 先构建组件库，再启动 Astro 站点和组件库的监听构建。打开文档首页的「在线演示」即可访问。

## GitHub Pages

在 GitHub 仓库的 **Settings → Pages** 中将 **Source** 设为 **GitHub Actions**。推送到 `main` 后，工作流会先构建组件库，再由 Astro 一起构建和发布文档与演示页。也可以从 Actions 手动运行。

Pages 站点首页是文档，首页的「在线演示」会打开同一站点下的 `playground/`。首次部署后，站点地址显示在仓库的 Pages 设置中。

## 发布 npm 包

如果 npm 上还没有 `@dingshaohuax/ui-react`，先由有 `@dsh` 发布权限的维护者按选定的可见性完成首发。然后在 npm 包设置的 **Trusted publishing** 中添加 GitHub Actions，组织填 `ding-private`，仓库名填 `tpl-fe-comp`，工作流文件名填 `publish-npm.yml`，允许直接执行 `npm publish`。

更新 `packages/core/package.json` 到尚未发布的版本并提交，再将匹配的 `vX.Y.Z` 标签推送到 GitHub。例如版本为 `0.1.0` 时推送 `v0.1.0`。工作流会校验版本、构建组件库并发布到 npm。

# ui-react 文档站

Astro + Starlight 文档站。工程怎么搭、怎么复制，见[模板概览](src/content/docs/foundation.md)。

## 本地预览

在仓库根目录运行。

```bash
pnpm install
pnpm build
pnpm -F doc astro dev --background
```

用 `pnpm -F doc astro dev status` 查地址，`pnpm -F doc astro dev stop` 停止服务。

## 编辑与构建

- 文档在 `src/content/docs/`，侧栏在 `astro.config.mjs`，演示入口是 `src/pages/playground.astro`。
- 在根目录先跑 `pnpm build`，再跑 `pnpm -F doc build`。站点产物在 `apps/doc/dist/`。

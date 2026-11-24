---
title: 手册的创建
sidebar:
  order: 2
---

选择了 Starlight，它的中立性手册工具（对比 如 React 绑死 Docusaurus和RsPress以及Nextra 和 Fumadocs、Vue 绑死 VitePress）。


## 优化css
但是它的默认布局我不太喜欢，可以做出调整

自定义css
```css title=src/styles/custom.css
/* 去掉侧边栏顶层单独链接的加粗和大号样式 */
nav.sidebar ul > li > a {
  font-weight: normal;
  font-size: var(--sl-text-sm);
}

/* Rapide 的顶层 .large 链接会覆盖选中颜色，显式恢复当前页高亮。 */
.sidebar-pane .top-level > li > a[aria-current='page'] {
  color: var(--sl-color-text-accent);
}

/* 文档三栏共享宽度上限，避免超宽屏上目录独占剩余留白。 */
:root[data-has-sidebar] {
  --sl-sidebar-width: 16rem;
  --sl-content-width: 60rem;
  --docs-toc-width: 15rem;
  --docs-layout-width: calc(
    var(--sl-sidebar-width) + var(--sl-content-width) +
    2 * var(--sl-content-pad-x) + var(--docs-toc-width)
  );
}

/* 原生 pre（例如 MDX 示例）也在块内滚动，不撑宽整个页面。 */
[data-has-sidebar] .sl-markdown-content pre:not(:where(.not-content *)) {
  overflow-x: auto;
}

@media screen and (min-width: 50rem) {
  :root[data-has-sidebar] {
    --sl-content-pad-x: 2rem;
  }

  [data-has-sidebar] .page {
    max-width: var(--docs-layout-width);
    margin-inline: auto;
  }

  /* 固定定位的导航和页头也要跟随居中的页面容器。 */
  [data-has-sidebar] .sidebar-pane {
    inset-inline-start: max(0rem, calc((100% - var(--docs-layout-width)) / 2));
  }

  [data-has-sidebar] .page > .header {
    padding-inline: max(
      var(--sl-nav-pad-x),
      calc((100% - var(--docs-layout-width)) / 2 + var(--sl-nav-pad-x))
    );
  }

  [data-has-sidebar] .header > .header {
    grid-template-columns:
      calc(var(--sl-sidebar-width) - var(--sl-nav-pad-x) - var(--sl-nav-gap))
      minmax(0, 1fr) auto;
  }

  [data-has-sidebar] .main-pane .sl-container {
    margin-inline: auto;
  }
}

/* 与 Starlight 桌面目录的显示断点一致。 */
@media screen and (min-width: 72rem) {
  [data-has-sidebar] .main-pane {
    --sl-content-margin-inline: auto;
    flex: 1;
    min-width: 0;
    width: 100%;
  }

  [data-has-sidebar] .right-sidebar-container {
    flex: 0 0 var(--docs-toc-width);
    width: var(--docs-toc-width);
    margin-inline-start: 0;
  }

  [data-has-sidebar] .right-sidebar {
    width: var(--docs-toc-width);
  }

  [data-has-sidebar] .right-sidebar-panel > .sl-container {
    width: 100%;
    max-width: none;
  }
}
```

注入使用
```js title=astro.config.mjs
export default defineConfig({
	integrations: [
		starlight({
			// ....
            // 👈 加上这行css引入
			customCss: ['./src/styles/custom.css']
		})
	],
});
```


## 使用主题
默认主题有些许粗糙了
先安装主题 `pnpm add starlight-theme-rapide`，然后使用即可
```js title=astro.config.mjs
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
                // ...
                // 👈 加上这行主题插件
				starlightThemeRapide()
			]
		})
	],
});
```


## 配置中文
```js title=astro.config.mjs
export default defineConfig({
	integrations: [
		starlight({
			title: '产品手册',
			defaultLocale: 'zh-CN',
			locales: {
				// 根路径直接映射为中文
				root: {
				label: '简体中文',
				lang: 'zh-CN',
				},
			},
		})
	],
});
```

## 自动生成导航
如果你不手动指定目录，那么自动就会根据docs内的文件和文件夹生成左侧目录
```js title=astro.config.mjs
export default defineConfig({
	integrations: [
		starlight({
			title: '产品手册',
		})
	],
});
```

md文件内支持一些元数据
```md
---
title: 我是标题
description: 我是简介
template: splash # 生成页内导航
sidebar:
  hidden: true #生成到左侧目录
  order: 1 排序
---
```
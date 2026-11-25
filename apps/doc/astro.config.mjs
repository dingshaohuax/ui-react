// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: process.env.PAGES_ORIGIN || undefined,
	base: process.env.PAGES_BASE_PATH || '/',
	vite: {
		optimizeDeps: {
			// Serve React's CommonJS client entry as ESM during development.
			include: ['react-dom/client'],
		},
	},
	integrations: [
		react(),
		starlight({
			title: 'UI-React',
			description: '从 pnpm 工作区、组件库构建到文档和发布的 React 组件库工程模板。',
			defaultLocale: 'zh-CN',
			locales: {
				// 根路径直接映射为中文
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			sidebar: [
				{
					label: '项目基建',
					items: ['foundation', 'foundation/workspace', 'foundation/site', 'foundation/delivery'],
				},
				{
					label: '组件使用',
					items: [
						'getting-started',
						'components/button',
						'components/input',
					],
				},
			],
			plugins: [starlightThemeRapide()],
			customCss: ['./src/styles/custom.css'],
		})
	],
});

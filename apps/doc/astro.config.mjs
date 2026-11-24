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
			title: '产品手册',
			defaultLocale: 'zh-CN',
			locales: {
				// 根路径直接映射为中文
				root: {
				label: '简体中文',
				lang: 'zh-CN',
				},
			},
			plugins: [
				starlightThemeRapide(), // 👈 加上这行主题插件
			],
			customCss: ['./src/styles/custom.css'],
		})
	],
});

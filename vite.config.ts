import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vitest/config'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
	},
	plugins: [vue(), Components()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})

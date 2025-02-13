import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint2';

export default defineConfig({
	server: {
		port: 3000,
		open: true,
	},
	preview: {
		port: 3002,
		open: true,
	},
	plugins: [
		{
			name: 'treat-js-files-as-jsx',
			async transform(code, id) {
				if (!id.match(/src\/.*\.js$/)) return null;
				return transformWithEsbuild(code, id, {
					loader: 'jsx',
					jsx: 'automatic',
				});
			},
		},
		react(),
		eslint({
			include: ['src/**/*.ts', 'src/**/*.tsx'],
			exclude: ['node_modules', 'dist'],
		}),
	],
	optimizeDeps: {
		force: true,
		esbuildOptions: {
			loader: {
				'.js': 'jsx',
			},
		},
	},
});

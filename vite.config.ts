import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        modules: {
            generateScopedName: '[name]__[local]__[hash:base64:5]',
            localsConvention: 'camelCase'
        }
    },
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            { find: '@entities', replacement: path.resolve(__dirname, 'src/entities') },
            { find: '@features', replacement: path.resolve(__dirname, 'src/features') },
            { find: '@widgets', replacement: path.resolve(__dirname, 'src/widgets') },
            { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
            { find: '@shared', replacement: path.resolve(__dirname, 'src/shared') },
        ],
    },
    plugins: [react(), nodePolyfills()],
})

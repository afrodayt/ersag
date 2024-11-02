import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue2';
import path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: {
                main: 'resources/js/app.js',
                styles: 'resources/less/app.less',
            },
            refresh: true,
        }),
        vue(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            'assets': path.resolve(__dirname, 'public/assets'),
            'img': path.resolve(__dirname, 'public/assets/img'),
        },
    },
});


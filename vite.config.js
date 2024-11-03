import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue2';
import path from "path";

export default defineConfig({
    base: '/',
    server: {
        https: process.env.APP_ENV === 'production', // HTTPS только на продакшене
    },
    // build: {
    //     manifest: true, // Убедитесь, что манифест включен, если он нужен вашему серверу для правильной маршрутизации
    //     outDir: 'public/build', // Путь к выходной директории
    // },
    plugins: [
        laravel({
            input: [
                'resources/js/app.js',
                'resources/less/app.less',
            ],
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


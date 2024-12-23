import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'
import { resolve } from 'path'
import React from 'react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.tsx"),
            name: "date-np",
            formats: ["es"],
        },
        outDir: "dist",
        emptyOutDir: true,
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                globals: {
                    react: 'React',
                    "react-dom": 'ReactDOM'
                },
                preserveModules: true,
                dir: 'dist',
                entryFileNames: '[name].js',
                exports: 'named'
            }
        }
    },
    plugins: [viteReact(), tailwindcss()]
})

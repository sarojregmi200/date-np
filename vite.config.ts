import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
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
            external: ['react', "react-dom"],
            output: {
                preserveModules: true,
                dir: 'dist',
                exports: 'named'
            }
        }
    },
    plugins: [tailwindcss()]
})

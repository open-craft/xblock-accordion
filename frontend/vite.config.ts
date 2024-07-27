/// <reference types="vitest" />
import {resolve} from 'path';
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {browserslistToTargets} from "lightningcss";

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    let lib = 'student-ui';
    let libName = 'AccordionBlock';
    if (process.env.COMPONENT === 'studio-ui') {
        lib = 'studio-ui';
        libName = 'AccordionEditor';
    }
    return {
        base: "",
        build: {
            outDir: '../accordion/public',
            lib: {
                entry: resolve(__dirname, `src/${lib}/index.tsx`),
                name: libName,
                fileName: lib,
                formats: ["es"]
            },
            rollupOptions: {
                output: {
                    chunkFileNames: '[name].js',
                    assetFileNames: `${lib}[extname]`,
                }
            },
        },
        define: {'process.env.NODE_ENV': '"production"'},
        plugins: [react()],
        resolve: {
            alias: [
                {
                    // this is required for the SCSS modules
                    find: /^~(.*)$/,
                    replacement: '$1',
                },
            ],
        },
        test: {},
    };
})

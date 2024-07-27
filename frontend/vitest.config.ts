/// <reference types="vitest" />

import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.ts'],
        server: {
            deps: {
                inline: [
                    "@openedx/paragon/icons"
                ]
            }
        },
        coverage: {
            provider: "istanbul",
            include: ["src"],
            exclude: [
                "src/*/dev-preview.ts",
                "src/*/index.tsx",
                "src/studio-ui/TinyMceEditor.tsx",
            ],
        }
    },
})

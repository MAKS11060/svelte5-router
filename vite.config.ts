import {svelte} from '@sveltejs/vite-plugin-svelte'
import {defineConfig} from 'vite'

export default defineConfig({
  //root: "tests",
  plugins: [svelte()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: '@maks11060/svelte5-router',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['svelte'],
      output: {
        dir: 'dist',
        format: 'es',
      },
    },
    outDir: 'dist',
  },
  resolve: {
    conditions: ['browser'],
  },
})

import {svelte} from "@sveltejs/vite-plugin-svelte"
import {defineConfig} from "vite"

export default defineConfig({
  //root: "tests",
  plugins: [svelte()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "svelte5-routing",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["svelte"],
      output: {
        dir: "dist",
        format: "es",
      },
    },
    outDir: "dist",
  },
  resolve: {
    conditions: ["browser"],
  },
});

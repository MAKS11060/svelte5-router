#!/usr/bin/env -S deno run -A

import { expandGlobSync } from 'jsr:@std/fs/expand-glob'

for (const {path} of expandGlobSync('./{dist,.svelte-kit}/**/*.{js,d.ts,svelte}')) {
  const content = Deno.readTextFileSync(path)

  // replace .ts to .js
  const updated = content.replace(/from\s+['"]([^'"]+)\.ts['"]/g, (match, p1) => {
    return `from '${p1}.js'`
  })

  if (updated !== content) {
    Deno.writeTextFileSync(path, updated)
    console.log(`✅ Fixed imports in ${path}`)
  }
}

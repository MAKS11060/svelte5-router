#!/usr/bin/env -S deno run -A

import {expandGlobSync} from '@std/fs/expand-glob'

console.group(`✅ Fix imports:`)
for (const {path} of expandGlobSync('./{dist,.svelte-kit}/**/*.{js,d.ts,svelte}')) {
  const content = Deno.readTextFileSync(path)

  // replace .ts to .js
  const updated = content.replace(/from\s+['"]([^'"]+)\.ts['"]/g, (_, p1) => {
    return `from '${p1}.js'`
  })

  if (updated !== content) {
    Deno.writeTextFileSync(path, updated)
    // console.log(`✅ Fixed imports in ${path}`)
    console.log(`${path}`)
  }
}
console.groupEnd()

// Verifies every material-symbols-rounded icon used in the source is present in
// the subsetted Google Fonts request in app/layout.tsx.
//
// The icon font is subsetted (5.1 MB unsubsetted vs 13 KB subsetted), so an icon
// that is used but not named fails silently and ugly: the browser renders the
// ligature text instead, e.g. the word "call" where a phone icon should be.
//
// Icon names appear both as literal children:
//     <span className="material-symbols-rounded">call</span>
// and inside JSX expressions:
//     <span className="material-symbols-rounded">{isOpen ? 'remove' : 'add'}</span>
//     <span className="material-symbols-rounded">{item.icon}</span>
// so this scans the whole element body for bare words and quoted strings. Names
// that come from a variable cannot be resolved statically, and are reported as
// unresolved so they can be checked by hand.
//
// Usage: npm run check:icons
import { readFileSync, readdirSync } from 'node:fs'
import { join, extname } from 'node:path'

const ROOTS = ['app', 'components', 'lib']
// Capture everything between the opening tag and the closing </span>.
const EL_RE = /material-symbols-rounded[^>]*>([\s\S]{0,200}?)<\/span>/g
const WORD_RE = /^[a-z][a-z0-9_]*$/
// Data arrays feed icons in via `icon: 'name'` and render as {item.icon},
// so collect those too rather than reporting them all as unresolved.
const DATA_ICON_RE = /\bicon: *'([a-z][a-z0-9_]*)'/g

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (!['node_modules', '.next', '.git'].includes(entry.name)) walk(full, out)
    } else if (['.ts', '.tsx'].includes(extname(entry.name))) {
      out.push(full)
    }
  }
  return out
}

const used = new Set()
const unresolved = []

for (const file of ROOTS.flatMap((r) => walk(r))) {
  const src = readFileSync(file, 'utf8')

  let d
  while ((d = DATA_ICON_RE.exec(src))) used.add(d[1])

  let m
  while ((m = EL_RE.exec(src))) {
    const body = m[1].trim()
    if (!body) continue

    if (!body.includes('{')) {
      // plain literal child
      const t = body.trim()
      if (WORD_RE.test(t)) used.add(t)
      continue
    }

    // JSX expression: pull out every quoted string literal
    const quoted = [...body.matchAll(/['"`]([a-z][a-z0-9_]*)['"`]/g)].map((q) => q[1])
    if (quoted.length) {
      quoted.forEach((q) => used.add(q))
    } else {
      const line = src.slice(0, m.index).split('\n').length
      unresolved.push(`${file}:${line}  ${body.replace(/\s+/g, ' ').slice(0, 70)}`)
    }
  }
}

const layout = readFileSync(join('app', 'layout.tsx'), 'utf8')
const block = layout.match(/export const MATERIAL_ICONS = \[([\s\S]*?)\] as const/)
if (!block) {
  console.error('check:icons  could not find MATERIAL_ICONS in app/layout.tsx')
  process.exit(1)
}
const declared = new Set([...block[1].matchAll(/'([a-z0-9_]+)'/g)].map((m) => m[1]))

const missing = [...used].filter((i) => !declared.has(i)).sort()
const unusedDeclared = [...declared].filter((i) => !used.has(i)).sort()

if (unresolved.length) {
  console.warn(`check:icons  ${unresolved.length} icon name(s) come from a variable and cannot be checked statically:`)
  unresolved.forEach((u) => console.warn('   ' + u))
  console.warn('   Verify these render as glyphs, not words, in the browser.\n')
}

if (missing.length) {
  console.error(
    `check:icons  FAIL, ${missing.length} icon(s) used in source but missing from MATERIAL_ICONS:\n` +
      missing.map((i) => `  '${i}',`).join('\n') +
      '\n\nAdd them to MATERIAL_ICONS in app/layout.tsx or they render as plain text.'
  )
  process.exit(1)
}

console.log(`check:icons  ok, ${used.size} icons used, all present in the subset.`)
if (unusedDeclared.length) {
  console.log(`             ${unusedDeclared.length} declared but unused (harmless): ${unusedDeclared.join(', ')}`)
}

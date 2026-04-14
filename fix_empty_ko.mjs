// Fix sections where ko: [] but en: [...] — clear the en array to match
import fs from 'fs';
import path from 'path';

const root = 'app/data/matchups';
let fixed = 0;

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory() && !e.name.startsWith('_')) walkDir(fp);
    else if (e.isFile() && e.name.endsWith('.ts') && !e.name.startsWith('_')) {
      fixFile(fp);
    }
  }
}

function fixFile(fp) {
  let content = fs.readFileSync(fp, 'utf8');
  const original = content;

  // Find all champion sections in highlightsByChamp
  // Pattern: champName: {\n      ko: [],\n      en: [...]
  // We want to replace en: [...] with en: [] when ko: [] in same block

  // Match: ko: [],\r\n      en: [non-empty] (Windows line endings)
  const blockRegex = /ko: \[\],\r?\n(\s+)en: \[([^\]]+)\]/g;
  content = content.replace(blockRegex, (match, indent, enContent) => {
    const nl = match.includes('\r\n') ? '\r\n' : '\n';
    return `ko: [],${nl}${indent}en: []`;
  });

  if (content !== original) {
    fs.writeFileSync(fp, content, 'utf8');
    console.log('Fixed:', fp);
    fixed++;
  }
}

walkDir(root);
console.log('\nTotal fixed:', fixed);

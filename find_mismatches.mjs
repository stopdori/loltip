import fs from 'fs';
import path from 'path';

const matchupRoot = 'app/data/matchups';
const mismatches = [];

function extractArrays(content, field) {
  // Match field: [ ... ] including multiline, non-greedy
  const pattern = field + ':\\s*\\[';
  const regex = new RegExp(pattern, 'g');
  const results = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    // Find the matching closing bracket
    let depth = 1;
    let i = match.index + match[0].length;
    let inner = '';
    while (i < content.length && depth > 0) {
      if (content[i] === '[') depth++;
      else if (content[i] === ']') depth--;
      if (depth > 0) inner += content[i];
      i++;
    }
    const items = inner.match(/"[^"]*"/g) || [];
    results.push(items);
  }
  return results;
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('_')) {
      walkDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.ts') && !entry.name.startsWith('_')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const koArrays = extractArrays(content, 'ko');
      const enArrays = extractArrays(content, 'en');

      if (koArrays.length !== enArrays.length) {
        mismatches.push({ file: fullPath, issue: 'array count mismatch' });
        continue;
      }

      for (let i = 0; i < koArrays.length; i++) {
        if (koArrays[i].length !== enArrays[i].length) {
          mismatches.push({
            file: fullPath,
            issue: `ko=${koArrays[i].length} en=${enArrays[i].length}`,
            koItems: koArrays[i],
            enItems: enArrays[i],
          });
          break;
        }
      }
    }
  }
}

walkDir(matchupRoot);
console.log('Total mismatches:', mismatches.length);
mismatches.forEach(m => {
  console.log('\n' + m.file + ' | ' + m.issue);
  if (m.koItems) {
    m.koItems.forEach((k, i) => {
      console.log('  ko[' + i + ']: ' + k);
      console.log('  en[' + i + ']: ' + (m.enItems[i] || '(missing)'));
    });
  }
});

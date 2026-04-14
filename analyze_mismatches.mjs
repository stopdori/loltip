import fs from 'fs';
import path from 'path';

const matchupRoot = 'app/data/matchups';

function extractArrays(content, field) {
  const pattern = field + ':\\s*\\[';
  const regex = new RegExp(pattern, 'g');
  const results = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    let depth = 1;
    let i = match.index + match[0].length;
    let inner = '';
    while (i < content.length && depth > 0) {
      if (content[i] === '[') depth++;
      else if (content[i] === ']') depth--;
      if (depth > 0) inner += content[i];
      i++;
    }
    const items = inner.match(/"(?:[^"\\]|\\.)*"/g) || [];
    results.push({ pos: match.index, items, endPos: i });
  }
  return results;
}

const champDirs = new Set();

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

      if (koArrays.length !== enArrays.length) return;

      let hasMismatch = false;
      for (let i = 0; i < koArrays.length; i++) {
        if (koArrays[i].items.length !== enArrays[i].items.length) {
          hasMismatch = true;
          break;
        }
        // Check for empty en strings where ko is non-empty
        for (let j = 0; j < enArrays[i].items.length; j++) {
          if (enArrays[i].items[j] === '""' && koArrays[i].items[j] !== '""') {
            hasMismatch = true;
            break;
          }
        }
        if (hasMismatch) break;
      }

      if (hasMismatch) {
        const champDir = path.dirname(fullPath).split(path.sep).pop();
        champDirs.add(champDir);
      }
    }
  }
}

walkDir(matchupRoot);
const sorted = [...champDirs].sort();
console.log('Champions with mismatches:', sorted.length);
console.log(JSON.stringify(sorted, null, 2));

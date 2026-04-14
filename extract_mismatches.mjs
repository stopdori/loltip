import fs from 'fs';
import path from 'path';

const matchupRoot = 'app/data/matchups';

function extractArraysWithPositions(content, field) {
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
    const items = [];
    const itemRegex = /"((?:[^"\\]|\\.)*)"/g;
    let m;
    while ((m = itemRegex.exec(inner)) !== null) {
      items.push(m[1]);
    }
    results.push({ startPos: match.index, endPos: i, items });
  }
  return results;
}

const output = {};

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('_')) {
      walkDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.ts') && !entry.name.startsWith('_')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const koArrays = extractArraysWithPositions(content, 'ko');
      const enArrays = extractArraysWithPositions(content, 'en');

      if (koArrays.length !== enArrays.length) return;

      const mismatches = [];
      for (let i = 0; i < koArrays.length; i++) {
        const ko = koArrays[i];
        const en = enArrays[i];
        let hasMismatch = ko.items.length !== en.items.length;
        if (!hasMismatch) {
          // Check for empty en where ko is non-empty
          for (let j = 0; j < en.items.length; j++) {
            if (en.items[j] === '' && ko.items[j] !== '') {
              hasMismatch = true;
              break;
            }
          }
        }
        if (hasMismatch) {
          mismatches.push({ arrayIndex: i, ko: ko.items, en: en.items });
        }
      }

      if (mismatches.length > 0) {
        const relPath = fullPath.replace(/\\/g, '/');
        output[relPath] = mismatches;
      }
    }
  }
}

walkDir(matchupRoot);
fs.writeFileSync('mismatches.json', JSON.stringify(output, null, 2));
console.log('Files with mismatches:', Object.keys(output).length);

import fs from 'fs';
import path from 'path';

function extractKoEnPairs(content) {
  const pairs = [];
  // 각 챔피언 섹션: champName: { ko: [...], en: [...] }
  const sectionRegex = /(\w+):\s*\{\s*ko:\s*\[([\s\S]*?)\],\s*en:\s*\[([\s\S]*?)\]/g;
  let m;
  while ((m = sectionRegex.exec(content)) !== null) {
    const itemRegex = /"((?:[^"\\]|\\.)*)"/g;
    const koItems = [...m[2].matchAll(itemRegex)].map(x => x[1]);
    const enItems = [...m[3].matchAll(itemRegex)].map(x => x[1]);
    const koHasContent = koItems.some(k => k.trim() !== '');
    const enIsEmpty = enItems.length === 0 || enItems.every(e => e.trim() === '');
    pairs.push({ champ: m[1], koItems, enItems, koHasContent, enIsEmpty });
  }
  return pairs;
}

const matchupDir = 'app/data/matchups';
const allFiles = [];
const braumDir = path.join(matchupDir, 'braum');
for (const f of fs.readdirSync(braumDir)) {
  if (f.endsWith('.ts')) allFiles.push(path.join(braumDir, f));
}
for (const dir of fs.readdirSync(matchupDir)) {
  const full = path.join(matchupDir, dir);
  if (dir === 'braum' || !fs.statSync(full).isDirectory()) continue;
  for (const f of fs.readdirSync(full)) {
    if (f.endsWith('_braum.ts')) allFiles.push(path.join(full, f));
  }
}

let needCount = 0;
for (const filePath of allFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  const pairs = extractKoEnPairs(content);
  const needs = pairs.filter(p => p.koHasContent && p.enIsEmpty);
  if (needs.length > 0) {
    needCount++;
    console.log(path.basename(filePath), '→', needs.map(p => `${p.champ}(ko:${p.koItems.length})`).join(', '));
  }
}
console.log('\n총:', needCount, '개 파일에 번역 필요한 섹션 있음');

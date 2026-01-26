// scripts/migrate-matchup-highlights.mjs
// 목적: app/data/matchups/**/**/*.ts 안의
//   highlights: { ko: [...], en: [...] }
// 를
//   highlightsByChamp: { champ1: { ko:[...], en:[...] }, champ2: { ko:[], en:[] } }
// 로 자동 변환 (ko/en 있으면 champ1에만 넣어둠)

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const TARGET_DIR = path.join(ROOT, "app", "data", "matchups");

const argv = new Set(process.argv.slice(2));
const DRY_RUN = argv.has("--dry-run") || !argv.has("--write");
const WRITE = argv.has("--write");

function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

function safeRead(p) {
  return fs.readFileSync(p, "utf8");
}

function safeWrite(p, s) {
  fs.writeFileSync(p, s, "utf8");
}

function transformOne(filePath, src) {
  // 이미 변환된 파일은 스킵
  if (src.includes("highlightsByChamp")) return { changed: false, reason: "already_migrated" };

  // champs: ["a","b"] 추출
  const champsMatch = src.match(/champs\s*:\s*\[\s*"([^"]+)"\s*,\s*"([^"]+)"\s*\]/);
  if (!champsMatch) return { changed: false, reason: "no_champs" };
  const champ1 = champsMatch[1];
  const champ2 = champsMatch[2];

  // highlights 블록 찾기 (들여쓰기 포함)
  const highlightsBlockMatch = src.match(
    /^(\s*)highlights\s*:\s*\{([\s\S]*?)^\1\}\s*,?\s*$/m
  );
  if (!highlightsBlockMatch) return { changed: false, reason: "no_highlights" };

  const indent = highlightsBlockMatch[1];
  const inner = highlightsBlockMatch[2]; // ko/en 포함될 수 있음

  // ko/en 배열 추출 (없으면 빈 배열)
  const koMatch = inner.match(/ko\s*:\s*(\[[\s\S]*?\])\s*,?/m);
  const enMatch = inner.match(/en\s*:\s*(\[[\s\S]*?\])\s*,?/m);

  const koArr = koMatch ? koMatch[1].trim() : "[]";
  const enArr = enMatch ? enMatch[1].trim() : "[]";

  // 교체 문자열 생성
  const replacement =
`${indent}highlightsByChamp: {
${indent}  ${champ1}: {
${indent}    ko: ${koArr},
${indent}    en: ${enArr},
${indent}  },
${indent}  ${champ2}: {
${indent}    ko: [],
${indent}    en: [],
${indent}  },
${indent}},`;

  const before = highlightsBlockMatch[0];
  const next = src.replace(before, replacement);

  return { changed: next !== src, next, reason: "migrated", champ1, champ2 };
}

function main() {
  if (!fs.existsSync(TARGET_DIR)) {
    console.error(`[ERR] Not found: ${TARGET_DIR}`);
    process.exit(1);
  }

  const files = walk(TARGET_DIR)
    .filter((p) => p.endsWith(".ts"))
    // 타입/인덱스 파일 등은 보통 제외하는 게 안전함 (원하면 지워도 됨)
    .filter((p) => !p.endsWith("_types.ts"))
    .filter((p) => !p.endsWith("_index.ts"));

  let changed = 0;
  let skipped = 0;
  const reasons = new Map();

  for (const p of files) {
    const src = safeRead(p);
    const res = transformOne(p, src);

    if (!res.changed) {
      skipped++;
      reasons.set(res.reason, (reasons.get(res.reason) ?? 0) + 1);
      continue;
    }

    changed++;
    reasons.set(res.reason, (reasons.get(res.reason) ?? 0) + 1);

    if (WRITE) {
      safeWrite(p, res.next);
      console.log(`[WRITE] ${path.relative(ROOT, p)}  (${res.champ1} -> ${res.champ2})`);
    } else {
      console.log(`[DRY]   ${path.relative(ROOT, p)}  (${res.champ1} -> ${res.champ2})`);
    }
  }

  console.log("");
  console.log(`Done. files=${files.length}, changed=${changed}, skipped=${skipped}`);
  for (const [k, v] of reasons.entries()) console.log(`- ${k}: ${v}`);
  if (DRY_RUN) {
    console.log("");
    console.log("Dry-run mode. To actually write files: node scripts/migrate-matchup-highlights.mjs --write");
  }
}

main();

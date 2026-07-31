// scripts/gen-matchup-json.ts
// app/data/matchups 하위 전체 매치업 파일(.ts)을 스캔해서 하나의 JSON(_compiled.json)으로 병합한다.
//
// 배경: _index.ts가 매치업 파일 하나당 import()를 하면(정적 리터럴이어도) 그 파일들이
// 전부 라우트의 모듈 그래프/파일 트레이스에 걸려 빌드 메모리를 과도하게 사용한다.
// 이 스크립트는 대신 전체 데이터를 JSON 파일 하나로 미리 합쳐두어, _index.ts가
// fs.readFileSync + JSON.parse로 그 파일 하나만 읽도록 한다.
//
// 매치업 파일 추가/삭제/수정 후에는 반드시 재실행: npm run gen:matchup-json

import fs from "node:fs";
import path from "node:path";

const MATCHUP_DIR = path.resolve("app/data/matchups");
const OUT_FILE = path.join(MATCHUP_DIR, "_compiled.json");

// app/sitemap.ts의 parseMatchupFile과 동일한 방식:
// 매치업 파일은 `export const key: MatchupSummary = {...};` 형태의 TS이므로
// 객체 리터럴 부분만 뽑아내 eval로 파싱한다.
function extractObjectLiteral(src: string): string | null {
  const trimmed = src.trimEnd();
  const match = trimmed.match(/=\s*(\{[\s\S]*\})\s*;\s*$/);
  return match ? match[1] : null;
}

function parseMatchupFile(filePath: string): unknown | null {
  const src = fs.readFileSync(filePath, "utf8");
  const literal = extractObjectLiteral(src);
  if (!literal) return null;
  try {
    // 매치업 데이터 파일은 저장소 내부 신뢰된 데이터이며, 정적 import 없이
    // 객체 리터럴만 빠르게 파싱하기 위해 eval을 사용한다. (app/sitemap.ts와 동일)
    // eslint-disable-next-line no-eval
    return (0, eval)("(" + literal + ")");
  } catch {
    return null;
  }
}

function main() {
  const compiled: Record<string, unknown> = {};
  let fileCount = 0;
  let skipped = 0;

  for (const folderEntry of fs.readdirSync(MATCHUP_DIR, { withFileTypes: true })) {
    if (!folderEntry.isDirectory()) continue;
    const champA = folderEntry.name;
    const folderPath = path.join(MATCHUP_DIR, champA);

    for (const fileEntry of fs.readdirSync(folderPath, { withFileTypes: true })) {
      if (!fileEntry.isFile() || !fileEntry.name.endsWith(".ts")) continue;

      const baseName = fileEntry.name.slice(0, -3);
      if (!baseName.startsWith(`${champA}_`)) continue;

      const data = parseMatchupFile(path.join(folderPath, fileEntry.name));
      if (!data) {
        skipped++;
        continue;
      }

      compiled[baseName] = data;
      fileCount++;
    }
  }

  if (fileCount === 0) {
    throw new Error(`매치업 파일을 찾지 못함: ${MATCHUP_DIR}`);
  }

  fs.writeFileSync(OUT_FILE, JSON.stringify(compiled), "utf8");

  const sizeMb = fs.statSync(OUT_FILE).size / 1024 / 1024;
  console.log(`✅ _compiled.json 생성 완료 (${fileCount}개 매치업, ${sizeMb.toFixed(2)}MB)`);
  if (skipped > 0) console.log(`   ⚠ 파싱 실패로 제외된 파일: ${skipped}개`);
  console.log(`   -> ${path.relative(process.cwd(), OUT_FILE)}`);
}

main();

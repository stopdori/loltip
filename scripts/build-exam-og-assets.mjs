// scripts/build-exam-og-assets.mjs
// node scripts/build-exam-og-assets.mjs
//
// 롤 능력고사 공유 카드(app/api/exam-og)용 에셋을 assets/exam-og/에 만든다.
// - next/og(satori)는 webp를 읽지 못하므로 public/tiers/*.webp를 PNG 사본으로 변환
// - 한글 폰트(Noto Sans KR Bold)는 카드에 쓰는 글자만 담은 서브셋 TTF로 받음
// 카드 문구나 티어 이름을 바꾸면 이 스크립트를 다시 실행해야 새 글자가 폰트에 들어간다.

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const OUT_DIR = "assets/exam-og";
const TIER_SRC_DIR = "public/tiers";
const FONT_FILE = "NotoSansKR-Bold-subset.ttf";
const LICENSE_URL = "https://raw.githubusercontent.com/google/fonts/main/ofl/notosanskr/OFL.txt";

// 카드에 한글이 나올 수 있는 파일들. 여기 들어 있는 한글 음절을 전부 폰트에 담는다.
const HANGUL_SOURCES = ["app/api/exam-og/route.tsx", "app/[locale]/exam/data/tiers.ts"];

async function buildEmblems() {
  const outDir = path.join(OUT_DIR, "tiers");
  fs.mkdirSync(outDir, { recursive: true });
  const files = fs.readdirSync(TIER_SRC_DIR).filter((f) => f.endsWith(".webp"));
  for (const file of files) {
    const out = path.join(outDir, file.replace(/\.webp$/, ".png"));
    await sharp(path.join(TIER_SRC_DIR, file)).png().toFile(out);
    console.log(`[OK] ${out}`);
  }
}

function collectText() {
  const chars = new Set();
  for (let c = 0x20; c <= 0x7e; c++) chars.add(String.fromCharCode(c));
  chars.add("→");
  chars.add("·");
  for (const src of HANGUL_SOURCES) {
    for (const ch of fs.readFileSync(src, "utf8")) {
      if (/[가-힣]/.test(ch)) chars.add(ch);
    }
  }
  return [...chars].join("");
}

async function buildFont() {
  const text = collectText();
  const cssUrl = `https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(cssUrl)).text();
  const match = css.match(/url\((https:[^)]+)\) format\('truetype'\)/);
  if (!match) throw new Error(`TTF 주소를 찾지 못함:\n${css}`);
  const font = Buffer.from(await (await fetch(match[1])).arrayBuffer());
  fs.writeFileSync(path.join(OUT_DIR, FONT_FILE), font);
  console.log(`[OK] ${FONT_FILE} (${text.length}자, ${(font.length / 1024).toFixed(1)}KB)`);

  const license = await (await fetch(LICENSE_URL)).text();
  fs.writeFileSync(path.join(OUT_DIR, "OFL.txt"), license);
  console.log("[OK] OFL.txt");
}

fs.mkdirSync(OUT_DIR, { recursive: true });
await buildEmblems();
await buildFont();

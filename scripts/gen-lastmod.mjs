// scripts/gen-lastmod.mjs
// npm run gen:lastmod
//
// sitemap lastmod용 매니페스트(app/data/_lastmod.json) 생성.
// Vercel 빌드 환경은 git 기록이 얕고 파일 mtime도 체크아웃 시각이라 믿을 수 없으므로,
// 로컬에서 git log 한 번으로 각 파일의 마지막 커밋일(YYYY-MM-DD)을 계산해 저장한다.
//
// - 커밋되지 않은(unstaged/untracked) WIP 변경은 무시하고 마지막 커밋일 기준
// - 단, stage된 파일은 "이번 커밋에 들어갈 파일"로 보고 오늘 날짜로 기록
//   (커밋 전에 실행해 매니페스트를 같은 커밋에 넣을 때 날짜가 한 커밋 밀리지 않게 하기 위함)

import { execFileSync } from "node:child_process";
import fs from "node:fs";

const OUT_PATH = "app/data/_lastmod.json";

const CHAMP_RE = /^app\/data\/champs\/([a-z0-9]+)\.ts$/;
const MATCHUP_RE = /^app\/data\/matchups\/([a-z0-9]+)\/\1_([a-z0-9]+)\.ts$/;

// 기타 페이지: 페이지 키 → 소스 파일 목록 (그중 가장 최근 날짜를 사용)
const PAGE_SOURCES = {
  champ: ["app/[locale]/champ/page.tsx", "app/[locale]/champ/ChampClient.tsx"],
  quiz: ["app/[locale]/quiz/page.tsx", "app/[locale]/quiz/QuizClient.tsx", "app/data/quiz.ts"],
  tags: ["app/[locale]/tags/page.tsx", "app/[locale]/tags/TagsClient.tsx"],
  about: ["app/[locale]/about/page.tsx"],
  privacy: ["app/[locale]/privacy/page.tsx"],
};

const PAGE_FILES = Object.values(PAGE_SOURCES).flat();
// [locale]이 glob 문자 클래스로 해석되지 않도록 literal pathspec 사용
const PATHSPECS = [
  ":(literal)app/data/champs",
  ":(literal)app/data/matchups",
  ...PAGE_FILES.map((f) => `:(literal)${f}`),
];

function git(args) {
  return execFileSync("git", ["-c", "core.quotepath=off", ...args], {
    encoding: "utf8",
    maxBuffer: 512 * 1024 * 1024,
  });
}

function today() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

// 1) git log 한 번으로 파일별 마지막 커밋일 계산 (최신 커밋부터 훑으므로 처음 본 날짜가 마지막 커밋일)
const lastCommitDate = new Map();
let currentDate = null;
for (const line of git(["log", "--no-renames", "--format=@@%cs", "--name-only", "--", ...PATHSPECS]).split("\n")) {
  if (line.startsWith("@@")) {
    currentDate = line.slice(2).trim();
  } else if (line && !lastCommitDate.has(line)) {
    lastCommitDate.set(line, currentDate);
  }
}

// 2) stage된 파일은 오늘 날짜로 덮어쓰기
const staged = git(["diff", "--cached", "--name-only", "--no-renames", "--", ...PATHSPECS])
  .split("\n")
  .filter(Boolean);
const now = today();
for (const f of staged) lastCommitDate.set(f, now);

// 3) 현재 인덱스에 있는 파일만 대상 (untracked WIP 파일 제외, 삭제된 파일 제외)
const tracked = git(["ls-files", "--", ...PATHSPECS]).split("\n").filter(Boolean);
const trackedSet = new Set(tracked);

const champs = {};
const matchups = {};
for (const f of tracked) {
  const date = lastCommitDate.get(f);
  if (!date) continue;
  let m = f.match(CHAMP_RE);
  if (m) {
    champs[m[1]] = date;
    continue;
  }
  m = f.match(MATCHUP_RE);
  if (m) matchups[`${m[1]}-vs-${m[2]}`] = date;
}

const pages = {};
for (const [key, files] of Object.entries(PAGE_SOURCES)) {
  const dates = files.filter((f) => trackedSet.has(f)).map((f) => lastCommitDate.get(f)).filter(Boolean);
  if (dates.length) pages[key] = dates.sort().at(-1);
}

const sortKeys = (obj) => Object.fromEntries(Object.entries(obj).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)));
const manifest = { pages: sortKeys(pages), champs: sortKeys(champs), matchups: sortKeys(matchups) };

fs.writeFileSync(OUT_PATH, JSON.stringify(manifest, null, 2) + "\n");
console.log(
  `[gen-lastmod] ${OUT_PATH} 생성: pages ${Object.keys(pages).length}, champs ${Object.keys(champs).length}, matchups ${Object.keys(matchups).length} (staged→오늘: ${staged.length}개)`
);

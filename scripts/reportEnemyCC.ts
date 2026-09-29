// scripts/reportEnemyCC.ts
// 챔피언 전체의 getEnemyCC(gimmick 필드 기준 상대에게 거는 CC) 결과를 보고만 한다.
// 실행: node scripts/reportEnemyCC.ts → logs/enemy_cc_<timestamp>.txt

import fs from "node:fs";
import { registerHooks } from "node:module";

// 확장자 없는 상대 import("./tags")를 Node에서 바로 실행할 수 있게 ".ts"로 재시도
registerHooks({
  resolve(specifier, context, nextResolve) {
    try {
      return nextResolve(specifier, context);
    } catch (e) {
      if (specifier.startsWith(".") && !specifier.endsWith(".ts")) return nextResolve(specifier + ".ts", context);
      throw e;
    }
  },
});

const { getEnemyCC, getGimmickPhases, isCCTag } = await import("../app/data/interactions/enemyCC");
type ChampData = import("../app/data/interactions/types").ChampData;

// 자신·아군 대상 CC일 가능성이 있는 동반 태그
const REVIEW_TAGS = ["TARGET_ALLY", "SHIELD", "HEAL", "INVULNERABLE", "UNTARGETABLE", "CC_IMMUNE"];

const ids = fs.readdirSync("app/data/champs").filter((f) => f.endsWith(".ts") && !f.startsWith("_")).map((f) => f.slice(0, -3)).sort();
const now = new Date();
const pad = (n: number) => String(n).padStart(2, "0");
const stamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}`;

const lines: string[] = [`# 상대에게 거는 CC (gimmick 필드 기준, ${stamp})`, `챔피언 ${ids.length}개 / 형식: 폼·슬롯(phase): CC 태그`, ""];
const review: string[] = [];
let entryCount = 0;

for (const id of ids) {
  const champ = (await import(`../app/data/champs/${id}`)).default as ChampData;
  const list = getEnemyCC(champ);
  entryCount += list.length;
  lines.push(`## ${id}${list.length ? "" : " (CC 없음)"}`);
  for (const e of list) lines.push(`  ${e.formSlot}${e.phase !== undefined ? `(${e.phase})` : ""}: ${e.cc.join(", ")}`);
  for (const p of getGimmickPhases(champ)) {
    const cc = [...new Set(p.tags.filter(isCCTag))];
    const with_ = REVIEW_TAGS.filter((t) => (p.tags as string[]).includes(t));
    if (cc.length && with_.length) review.push(`- ${id} ${p.formSlot}${p.phase !== undefined ? `(${p.phase})` : ""} — CC: ${cc.join(", ")} / 동반: ${with_.join(", ")}`);
  }
}

lines.push("", `========== 검토 후보 (${review.length}건) ==========`);
lines.push(`같은 phase에 ${REVIEW_TAGS.join("/")} 중 하나가 CC 태그와 함께 있음 — 자신·아군 대상 CC 가능성(판정 없음)`);
lines.push(...(review.length ? review : ["(없음)"]));

const outFile = `logs/enemy_cc_${stamp}.txt`;
fs.writeFileSync(outFile, lines.join("\n") + "\n", "utf8");
console.log(`${outFile} — CC 항목 ${entryCount}개 / 검토 후보 ${review.length}건`);
console.log(review.slice(0, 10).join("\n"));

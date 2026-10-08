// scripts/testMatch.ts
// matchInterrupts 결과 출력(판정 없음). 실행: node scripts/testMatch.ts

import { registerHooks } from "node:module";

// 확장자 없는 상대 import("./tags")를 Node에서 바로 실행할 수 있게 ".ts"로 재시도
registerHooks({
  resolve(specifier, context, nextResolve) {
    // app 쪽 서버 전용 모듈의 import "server-only"는 Next 빌드용 가드라 Node 스크립트에선 빈 모듈로 대체
    if (specifier === "server-only") return { url: "data:text/javascript,", shortCircuit: true };
    try {
      return nextResolve(specifier, context);
    } catch (e) {
      if (specifier.startsWith(".") && !specifier.endsWith(".ts")) return nextResolve(specifier + ".ts", context);
      throw e;
    }
  },
});

const { matchInterrupts } = await import("../app/data/interactions/matchInterrupts");
const { getEnemyCC, getGimmickPhases } = await import("../app/data/interactions/enemyCC");
const { CC_APPLY_OVERRIDES } = await import("../app/data/interactions/ccApplyOverrides");
const yasuo = (await import("../app/data/champs/yasuo")).default;
const lissandra = (await import("../app/data/champs/lissandra")).default;

console.log("===== yasuo(내 쪽) vs lissandra(상대) =====");
const result = matchInterrupts(yasuo, lissandra);
for (const m of result) {
  console.log(`${m.mySlot}${m.myPhase !== undefined ? `(${m.myPhase})` : ""} — 끊는 CC: [${m.interruptedBy.join(", ")}]`);
  if (!m.hits.length) console.log("    (lissandra에 해당 CC 없음)");
  for (const h of m.hits) console.log(`    ← lissandra ${h.enemySlot}${h.enemyPhase !== undefined ? `(${h.enemyPhase})` : ""}: ${h.cc.join(", ")}`);
}
if (!result.length) console.log("(끊길 수 있는 스킬 없음)");

console.log("\n===== lissandra R 자가 경직 제외 확인 =====");
const overrides = CC_APPLY_OVERRIDES.filter((o) => o.champ === "lissandra" && o.slot === "R");
console.log(`ccApplyOverrides lissandra R 항목: ${overrides.length ? overrides.map((o) => `${o.tag}(${o.phase ?? "전체 phase"}, ${o.target})`).join(", ") : "없음"}`);
for (const p of getGimmickPhases(lissandra).filter((p) => p.slot === "R")) console.log(`  gimmick R(${p.phase}) 원본 태그: ${p.tags.join(", ")}`);
const rCC = getEnemyCC(lissandra).filter((e) => e.formSlot === "R");
for (const e of rCC) console.log(`  getEnemyCC R(${e.phase}): ${e.cc.join(", ")}`);
console.log(`  STASIS 포함 여부: ${rCC.some((e) => e.cc.includes("STASIS")) ? "포함됨" : "없음"}`);

// scripts/testResolveInterrupt.ts
// resolveInterruptedBy(끊김 계산 로직) 테스트. 실행: node scripts/testResolveInterrupt.ts
// 태그 배열을 직접 넣어 검증하므로 챔피언 파일 상태와 무관하다.

import { registerHooks } from "node:module";

// app/ 쪽 소스는 확장자 없는 상대 import("./tags")를 쓰므로, Node에서
// 바로 실행할 수 있게 해석 실패 시 ".ts"를 붙여 다시 시도한다.
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

const { resolveInterruptedBy, findOverride } = await import("../app/data/interactions/resolveInterrupt");
type Input = Parameters<typeof resolveInterruptedBy>[0];

type Case = { name: string; input: Input; include?: string[]; exclude?: string[]; empty?: boolean };

const ov = (champ: string, slot: "P" | "Q" | "W" | "E" | "R", phase?: string) => {
  const o = findOverride(champ, slot, phase);
  if (!o) throw new Error(`override 없음: ${champ} ${slot}${phase ? ` ${phase}` : ""}`);
  return o;
};

const cases: Case[] = [
  { name: '["DASH"]만', input: { phaseTags: ["DASH"] }, include: ["AIRBORNE", "KNOCKDOWN"], exclude: ["STUN", "ROOT"] },
  { name: '["DASH"] + yasuo E', input: { phaseTags: ["DASH"], override: ov("yasuo", "E") }, include: ["STUN", "ROOT", "CHARM", "POLYMORPH"] },
  { name: '["DASH"] + rakan W', input: { phaseTags: ["DASH"], override: ov("rakan", "W") }, include: ["STUN"], exclude: ["SLEEP"] },
  { name: '["SKILL_CHANNEL_MOVEMENT"] + ryze R', input: { phaseTags: ["SKILL_CHANNEL_MOVEMENT"], override: ov("ryze", "R", "R") }, include: ["ROOT", "GROUNDED", "SILENCE"] },
  { name: '["SKILL_CHANNEL_MOVEMENT"] + sion R', input: { phaseTags: ["SKILL_CHANNEL_MOVEMENT"], override: ov("sion", "R") }, empty: true },
  { name: '["DASH","UNSTOPPABLE"]', input: { phaseTags: ["DASH", "UNSTOPPABLE"] }, empty: true },
  { name: '["BLINK"]', input: { phaseTags: ["BLINK"] }, empty: true },
];

let failed = 0;
for (const c of cases) {
  const { interruptedBy, trace } = resolveInterruptedBy(c.input);
  const got = interruptedBy as string[];
  const errors: string[] = [];
  if (c.empty && got.length) errors.push(`빈 배열이어야 하는데 [${got.join(", ")}]`);
  for (const t of c.include ?? []) if (!got.includes(t)) errors.push(`${t} 미포함`);
  for (const t of c.exclude ?? []) if (got.includes(t)) errors.push(`${t} 포함됨`);
  if (errors.length) failed++;
  console.log(`${errors.length ? "FAIL" : "PASS"}  ${c.name}${errors.length ? `  — ${errors.join(" / ")}` : ""}`);
  console.log(`      결과: [${got.join(", ")}]`);
  trace.forEach((l) => console.log(`      ${l}`));
}
console.log(`\n${cases.length - failed}/${cases.length} 통과`);
if (failed) process.exitCode = 1;

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
  // 워윅 긴 Q: 채널링 + 밀려남 면역 → 기절은 끊고 에어본·속박은 못 끊음
  { name: '["SKILL_CHARGED","SKILL_CHANNEL","DASH"] + warwick Q 길게', input: { phaseTags: ["SKILL_CHARGED", "SKILL_CHANNEL", "DASH"], override: ov("warwick", "Q", "Q 길게") }, include: ["STUN", "SILENCE", "CHARM"], exclude: ["AIRBORNE", "KNOCKBACK", "KNOCKDOWN", "ROOT", "SLEEP"] },
  // 아크샨 E / 아우렐리온 솔 W: 이동 채널 + 돌진이지만 침묵·방해·이동 방해에는 안 끊김
  { name: '["SKILL_CHANNEL_MOVEMENT","DASH"] + akshan E 회전', input: { phaseTags: ["SKILL_CHANNEL_MOVEMENT", "DASH"], override: ov("akshan", "E", "E 회전") }, include: ["STUN", "ROOT", "POLYMORPH", "KNOCKDOWN"], exclude: ["SILENCE", "DISRUPT", "GROUNDED"] },
  { name: '["SKILL_CHANNEL_MOVEMENT","DASH"] + aurelionsol W 비행', input: { phaseTags: ["SKILL_CHANNEL_MOVEMENT", "DASH"], override: ov("aurelionsol", "W", "W 비행") }, include: ["STUN", "ROOT", "POLYMORPH", "KNOCKDOWN"], exclude: ["SILENCE", "DISRUPT", "GROUNDED"] },
  // 유미 W: 아군에게 가는 돌진은 이동불가·변이에 끊김(수면 제외), 부착 중 옮겨가기는 안 끊김
  { name: '["SKILL_CHANNEL_MOVEMENT","DASH"] + yuumi W', input: { phaseTags: ["SKILL_CHANNEL_MOVEMENT", "DASH"], override: ov("yuumi", "W", "W") }, include: ["STUN", "ROOT", "POLYMORPH"], exclude: ["SLEEP"] },
  { name: '["DASH","UNTARGETABLE"] + yuumi W 재사용', input: { phaseTags: ["DASH", "UNTARGETABLE"], override: ov("yuumi", "W", "W 재사용") }, empty: true },
  // 변신 해제: TRANSFORM은 기본 규칙 없음, 챔피언별 override로만 끊김
  { name: '["TRANSFORM"]만', input: { phaseTags: ["TRANSFORM"] }, empty: true },
  { name: '["TRANSFORM","SKILL_CHANNEL"] + quinn R1', input: { phaseTags: ["TRANSFORM", "SKILL_CHANNEL"], override: ov("quinn", "R", "R1") }, include: ["STUN", "ROOT", "GROUNDED", "SILENCE"] },
  { name: '["TRANSFORM"] + rammus Q', input: { phaseTags: ["TRANSFORM"], override: ov("rammus", "Q") }, include: ["STUN", "CHARM", "SILENCE", "POLYMORPH"], exclude: ["ROOT", "GROUNDED"] },
  { name: '["TRANSFORM","DASH"] + volibear Q 추격단계', input: { phaseTags: ["TRANSFORM", "DASH"], override: ov("volibear", "Q", "추격단계") }, include: ["STUN", "ROOT", "POLYMORPH"], exclude: ["SILENCE", "GROUNDED"] },
  // 지형 통과: 기본은 이동불가에만 끊김, 챔피언별 추가 조건은 override
  { name: '["IGNORE_TERRAIN"]만 (스몰더 E)', input: { phaseTags: ["IGNORE_TERRAIN"] }, include: ["STUN", "ROOT", "AIRBORNE", "POLYMORPH"], exclude: ["GROUNDED", "SILENCE"] },
  { name: '["IGNORE_TERRAIN"] + kayn E', input: { phaseTags: ["IGNORE_TERRAIN"], override: ov("kayn", "E") }, include: ["STUN", "POLYMORPH"], exclude: ["SLEEP", "GROUNDED"] },
  { name: '["IGNORE_TERRAIN"] + skarner E', input: { phaseTags: ["IGNORE_TERRAIN"], override: ov("skarner", "E", "E") }, include: ["STUN", "GROUNDED", "SILENCE", "DISRUPT", "POLYMORPH"], exclude: ["KNOCKDOWN"] },
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

// scripts/checkMatchupInterrupts.ts
// 특정 챔피언의 매치업 파일에서 "~CC로 ~스킬을 끊을 수 있음/없음" 문장을 찾아,
// 끊김 규칙(ccInteractions + interruptOverrides + 챔피언 gimmick 태그)으로 다시 판정해 어긋나는 문장을 보고한다.
// 수정은 하지 않음. 실행: node scripts/checkMatchupInterrupts.ts <champId>
//   → logs/matchup_interrupt_<champ>_<timestamp>.txt

import fs from "node:fs";
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

const target = process.argv[2];
if (!target) throw new Error("사용: node scripts/checkMatchupInterrupts.ts <champId>");

const { CHAMPS } = await import("../app/data/champs/_index");
const { CHAMPIONS } = await import("../app/data/champions");
const { TAG_LABEL } = await import("../app/data/interactions/tags");
const { CC_INTERACTIONS, CC_GROUPS } = await import("../app/data/interactions/ccInteractions");
const { resolveInterruptedBy, findOverride, isCalcExcluded } = await import("../app/data/interactions/resolveInterrupt");
const { getGimmickPhases } = await import("../app/data/interactions/enemyCC");

type ChampData = Parameters<typeof getGimmickPhases>[0];
const label = (t: string) => (TAG_LABEL as Record<string, { ko: string }>)[t]?.ko ?? t;
const koName = new Map(CHAMPIONS.map((c: { id: string; ko: string }) => [c.id, c.ko]));
const CC_KEYS = new Set([...Object.keys(CC_INTERACTIONS), ...Object.keys(CC_GROUPS)]);

// 슬롯별로 끊는 CC 합집합(그 슬롯 gimmick phase 중 하나라도 끊기면 "끊김")
// 문장에 "E1"/"E2"처럼 단계 번호가 붙으면 phase 라벨이 그 번호로 시작하는 phase만 모은 합집합을 쓴다
// (예: 카밀 "E1 벽 돌진 단계"·"E1 대기 단계" → "E1", "E2 돌진 단계" → "E2"). 맞는 phase가 없으면 슬롯 합집합.
function interruptSets(id: string) {
  const champ = (CHAMPS as Record<string, ChampData>)[id];
  const map = new Map<string, Set<string>>();
  const add = (key: string, r: string[]) => {
    const set = map.get(key) ?? new Set<string>();
    r.forEach((t) => set.add(t));
    map.set(key, set);
  };
  for (const p of getGimmickPhases(champ)) {
    const r = resolveInterruptedBy({ phaseTags: p.tags as never, override: findOverride(id, p.slot, p.phase) }).interruptedBy as string[];
    add(p.slot, r);
    const step = p.phase?.match(new RegExp(`^${p.slot}(\\d)`))?.[1];
    if (step) add(`${p.slot}${step}`, r);
  }
  return map;
}
const expand = (tags: string[]) => tags.flatMap((t) => (CC_GROUPS as Record<string, string[]>)[t] ?? [t]);

const root = "app/data/matchups";
const files = [
  ...fs.readdirSync(`${root}/${target}`).map((f) => `${target}/${f}`),
  ...fs.readdirSync(root).filter((d) => d !== target && fs.statSync(`${root}/${d}`).isDirectory())
    .flatMap((d) => fs.readdirSync(`${root}/${d}`).filter((f) => f.endsWith(`_${target}.ts`)).map((f) => `${d}/${f}`)),
].filter((f) => f.endsWith(".ts")).sort();

const mismatch: string[] = [];
const unsure: string[] = [];
const excluded: string[] = [];
let checked = 0;

for (const f of files) {
  const m = Object.values(await import(`../${root}/${f}`))[0] as { champs: string[]; highlightsByChamp: Record<string, { ko: string[] }> };
  const [a, b] = m.champs;
  for (const [side, v] of Object.entries(m.highlightsByChamp ?? {})) {
    const def = side === a ? b : a; // 이 쪽 문장에서 CC를 맞는 상대
    const defName = koName.get(def) ?? def;
    const sets = interruptSets(def);
    (v.ko ?? []).forEach((s, i) => {
      const first = s.split("\n")[0];
      const verdict = /끊을 수 있음/.test(first) ? true : /끊을 수 없음|끊기지 않음/.test(first) ? false : null;
      if (verdict === null) return;
      // 상대 이름(또는 폼 묶음 괄호) 기준으로 앞 = 내 CC, 뒤 = 상대 스킬
      let cut = first.indexOf(defName);
      if (cut < 0) cut = first.indexOf("(");
      if (cut < 0) { unsure.push(`- ${f} ${side}[${i}] — 상대 이름을 못 찾음: ${first}`); return; }
      const left = first.slice(0, cut), right = first.slice(cut).split(/끊을|끊기/)[0];
      const cc = [...left.matchAll(/\[\[([A-Z_]+)\]\]/g)].map((x) => x[1]).filter((t) => CC_KEYS.has(t));
      const slots = [...new Set([...right.matchAll(/(?:^|[\s,/)])([PQWER]\d?)(?=[\s(의,/]|$)/g)].map((x) => x[1]))];
      if (!cc.length || !slots.length) { unsure.push(`- ${f} ${side}[${i}] — CC ${cc.join(",") || "없음"} / 슬롯 ${slots.join(",") || "없음"}: ${first}`); return; }
      checked++;
      const ccx = expand(cc);
      for (const slot of slots) {
        if (isCalcExcluded(def, slot[0])) { excluded.push(`- ${f} ${side}[${i}] [${slot}] 계산 제외 스킬\n    ${first}`); continue; }
        const set = sets.get(slot) ?? sets.get(slot[0]) ?? new Set<string>();
        const hit = ccx.filter((t) => set.has(t));
        const ok = verdict ? hit.length > 0 : hit.length === 0;
        if (!ok) {
          const why = verdict
            ? `규칙상 ${cc.map(label).join("·")}로는 ${defName} ${slot}를 못 끊음 (끊는 CC: ${[...set].map(label).join(", ") || "없음"})`
            : `규칙상 ${hit.map(label).join("·")}가 ${defName} ${slot}를 끊음`;
          mismatch.push(`- ${f} ${side}[${i}] [${slot}] ${why}\n    ${first}`);
        }
      }
    });
  }
}

const now = new Date();
const pad = (n: number) => String(n).padStart(2, "0");
const stamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}`;
const out = [
  `# ${target} 매치업 끊김 문장 대조 (${stamp})`,
  `파일 ${files.length}개 / 판정한 문장 ${checked}개 / 어긋남 ${mismatch.length}건 / 자동 판정 불가 ${unsure.length}건`,
  "※ 슬롯 단위로 판정(그 슬롯 phase 중 하나라도 끊기면 '끊김'). 'E1'/'E2'처럼 번호가 붙으면 그 번호로 시작하는 phase만으로 판정. '돌진 단계'처럼 말로 phase를 지정한 문장은 수동 확인 필요.", "",
  "## 어긋남", ...(mismatch.length ? mismatch : ["(없음)"]), "",
  "## 자동 판정 불가", ...(unsure.length ? unsure : ["(없음)"]), "",
  "## 계산 제외 스킬이라 건너뜀", ...(excluded.length ? excluded : ["(없음)"]),
];
const file = `logs/matchup_interrupt_${target}_${stamp}.txt`;
fs.writeFileSync(file, out.join("\n") + "\n", "utf8");
console.log(file);
console.log(out[1]);

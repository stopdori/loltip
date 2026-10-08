// scripts/genInterruptRef.ts
// 챔피언별 "끊김 상호작용" 참고 문서를 만든다 → docs/interrupt-reference.md
// - 챔피언 파일 gimmick 필드(폼·phase 포함)에서 이동기류·채널링류 태그가 붙은 스킬을 골라
//   어떤 CC에 끊기는지(기본 규칙 + interruptOverrides.ts 예외)를 정리
// - 반대로 넉다운/방해처럼 "기본 CC 이상으로 끊는 효과"가 붙은 스킬도 정리
// 데이터를 직접 고치는 곳이 아니라 보기용 자동 생성 문서. 규칙·챔피언 파일이 바뀌면 다시 실행:
//   npm run gen:interrupt-ref

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

const { CHAMPS } = await import("../app/data/champs/_index");
const { CHAMPIONS } = await import("../app/data/champions");
const { TAG_LABEL } = await import("../app/data/interactions/tags");
const { GIMMICK_TAG_LABEL } = await import("../app/data/interactions/tags_gimmick");
const {
  CC_INTERACTIONS, CC_GROUPS, DASH_INTERRUPTED_BY, CHANNEL_INTERRUPTED_BY,
  MOVEMENT_CHANNEL_INTERRUPTED_BY, IGNORE_TERRAIN_INTERRUPTED_BY,
} = await import("../app/data/interactions/ccInteractions");
const { resolveInterruptedBy, findOverride, isCalcExcluded } = await import("../app/data/interactions/resolveInterrupt");
const { getGimmickPhases } = await import("../app/data/interactions/enemyCC");
const { INTERRUPT_OVERRIDES, INTERRUPT_CALC_EXCLUDED } = await import("../app/data/interactions/interruptOverrides");

type Tag = string;
type ChampData = Parameters<typeof getGimmickPhases>[0];

const nameOfId = (id: string) => (CHAMPIONS as { id: string; ko: string }[]).find((c) => c.id === id)?.ko ?? id;
const label = (t: Tag) =>
  (TAG_LABEL as Record<string, { ko: string }>)[t]?.ko ?? (GIMMICK_TAG_LABEL as Record<string, { ko: string }>)[t]?.ko ?? t;
const IMMOBILIZING = CC_GROUPS.IMMOBILIZING ?? [];
const CC_ORDER = Object.keys(CC_INTERACTIONS);

// 태그 목록을 읽기 쉽게: 이동불가 구성원이 전부 있으면 "이동불가 전체"로 묶음
function ccText(list: Tag[]): string {
  if (!list.length) return "없음";
  const set = new Set(list);
  const parts: string[] = [];
  const missing = IMMOBILIZING.filter((t) => !set.has(t));
  // 이동불가 구성원이 거의 다 있으면 "이동불가 전체(○○ 제외)"로 묶음
  if (missing.length <= 2) {
    parts.push(missing.length ? `이동불가 전체(${missing.map(label).join(", ")} 제외)` : "이동불가 전체");
    IMMOBILIZING.forEach((t) => set.delete(t));
  }
  const rest = [...set].sort((a, b) => CC_ORDER.indexOf(a) - CC_ORDER.indexOf(b)).map(label);
  return [...parts, ...rest].join(", ");
}

// ---- 분류 ----
const MOVE_TAGS = ["DASH", "BLINK", "LUNGE", "IGNORE_TERRAIN"];
const CHANNEL_TAGS = ["SKILL_CHANNEL", "SKILL_CHARGED", "SKILL_CHANNEL_MOVEMENT"];
const IMMUNE_TAGS = ["UNSTOPPABLE", "CC_IMMUNE", "CAST_COMMIT"];
const RULES: [Tag, string, Tag[]][] = [
  ["DASH", "이동기류", DASH_INTERRUPTED_BY],
  ["BLINK", "이동기류", []],
  ["LUNGE", "이동기류", []],
  ["IGNORE_TERRAIN", "이동기류", IGNORE_TERRAIN_INTERRUPTED_BY],
  ["SKILL_CHANNEL", "채널링류", CHANNEL_INTERRUPTED_BY],
  ["SKILL_CHARGED", "채널링류", CHANNEL_INTERRUPTED_BY],
  ["SKILL_CHANNEL_MOVEMENT", "채널링류", MOVEMENT_CHANNEL_INTERRUPTED_BY],
];

const md: string[] = [];
md.push("# 끊김 상호작용 참고표 (자동 생성)", "");
md.push("> 이 문서는 `npm run gen:interrupt-ref`로 만들어지는 **보기용 파일**입니다. 직접 고치지 말고, 원본을 고친 뒤 다시 생성하세요.");
md.push("> - 기본 규칙: `app/data/interactions/ccInteractions.ts`");
md.push("> - 챔피언별 예외: `app/data/interactions/interruptOverrides.ts`");
md.push("> - 스킬 태그: 각 챔피언 파일(`app/data/champs/*.ts`)의 gimmick 필드", "");

md.push("## 1. 태그별 기본 규칙", "");
md.push("| 분류 | 태그 | 기본적으로 끊는 CC |", "|---|---|---|");
for (const [tag, kind, list] of RULES) md.push(`| ${kind} | ${label(tag)} (\`${tag}\`) | ${ccText(list)} |`);
md.push("");
md.push(`- 스킬에 ${IMMUNE_TAGS.map((t) => `${label(t)}(\`${t}\`)`).join(", ")} 중 하나가 같이 있으면 어떤 CC에도 끊기지 않음`);
md.push(`- 이동불가 전체 = ${IMMOBILIZING.map(label).join(", ")}`);
md.push(`- 넉다운(\`KNOCKDOWN\`): 상태이상이 아니라 순간 효과로, **돌진만** 끊음 → 공포·매혹처럼 원래 돌진을 못 끊는 CC라도 넉다운이 붙어 있으면 돌진을 끊음`);
md.push(`- 위치고정(\`POSITION_LOCK\`): 제압 등과 함께 걸려 대상 위치를 고정하며, **돌진을** 끊음 (예: 암베사 R, 크산테 R)`);
md.push(`- 방해(\`DISRUPT\`): 상태이상이 아니라 순간 효과로, **채널링만** 끊음`);
md.push(`- 계산 제외: ${INTERRUPT_CALC_EXCLUDED.map((x) => `${nameOfId(x.champ)} ${x.slot} — ${x.reason.ko}`).join(" / ")}`, "");

md.push("## 2. 챔피언별 정리", "");
md.push("- **끊길 수 있는 스킬**: 이동기류·채널링류 태그가 붙은 스킬과, 그 스킬을 끊는 CC");
md.push("  - \"기본\" = 1번 표의 규칙 그대로 / \"추가\"·\"제외\" = 예외 파일에 등록된 챔피언 고유 판정");
md.push("- **기본 CC 이상으로 끊는 효과**: 넉다운·위치고정·방해가 붙은 스킬 (상대의 돌진·채널링을 추가로 끊음)", "");

const nameOf = new Map(CHAMPIONS.map((c: { id: string; ko: string; en: string }) => [c.id, c]));
const ids = Object.keys(CHAMPS).sort();
let champCount = 0, rowCount = 0, attackCount = 0;

for (const id of ids) {
  const champ = (CHAMPS as Record<string, ChampData>)[id];
  const phases = getGimmickPhases(champ);
  const recv: string[] = [];
  const give: string[] = [];
  for (const p of phases) {
    if (isCalcExcluded(id, p.slot)) continue; // 계산 제외 스킬(예: 사일러스 R)
    const tags = p.tags as Tag[];
    const where = `${p.formSlot}${p.phase !== undefined ? ` "${p.phase}"` : ""}`;
    const kinds = [...MOVE_TAGS, ...CHANNEL_TAGS].filter((t) => tags.includes(t));
    const ov = findOverride(id, p.slot, p.phase);
    if (kinds.length || ov) {
      const base = resolveInterruptedBy({ phaseTags: tags as never }).interruptedBy as Tag[];
      const full = resolveInterruptedBy({ phaseTags: tags as never, override: ov }).interruptedBy as Tag[];
      const kindText = [...new Set([...kinds, ...(ov && !kinds.includes(ov.kind) ? [ov.kind] : [])])].map(label).join(" + ");
      const immune = IMMUNE_TAGS.filter((t) => tags.includes(t));
      let cc: string;
      if (ov?.uninterruptible) cc = "**끊기지 않음** (예외)";
      else if (immune.length) cc = `끊기지 않음 (${immune.map(label).join(", ")})`;
      else if (!full.length) cc = "끊기지 않음";
      else {
        // 예외가 적용되면 최종 목록을 굵게 + "(예외)" 표시, 아니면 "기본"
        const changed = full.length !== base.length || full.some((t) => !base.includes(t));
        cc = changed ? `**${ccText(full)}** (예외)` : "기본";
      }
      const note = ov?.note?.ko ? ov.note.ko : "";
      recv.push(`| ${where} | ${kindText || "-"} | ${cc} | ${note} |`);
    }
    // 공격 쪽: 넉다운·방해 동반
    const extra: string[] = [];
    if (tags.includes("KNOCKDOWN")) extra.push("넉다운 → 돌진류 끊음");
    if (tags.includes("POSITION_LOCK")) extra.push("위치고정 → 돌진류 끊음");
    if (tags.includes("DISRUPT")) extra.push("방해 → 채널링류 끊음");
    if (extra.length) {
      const otherCC = tags.filter((t) => t in CC_INTERACTIONS && !["KNOCKDOWN", "POSITION_LOCK", "DISRUPT"].includes(t));
      give.push(`| ${where} | ${otherCC.length ? ccText([...new Set(otherCC)]) : "-"} | ${extra.join(" / ")} |`);
    }
  }
  if (!recv.length && !give.length) continue;
  champCount++; rowCount += recv.length; attackCount += give.length;
  const n = nameOf.get(id);
  md.push(`### ${n ? `${n.ko} (${n.en})` : id}`, "");
  if (recv.length) {
    md.push("끊길 수 있는 스킬", "", "| 스킬 | 판정 | 끊는 CC | 메모 |", "|---|---|---|---|", ...recv, "");
  }
  if (give.length) {
    md.push("기본 CC 이상으로 끊는 효과", "", "| 스킬 | 함께 있는 CC | 추가로 끊는 것 |", "|---|---|---|", ...give, "");
  }
}

md.splice(md.indexOf("## 2. 챔피언별 정리") + 1, 0, "", `챔피언 ${champCount}명 / 끊길 수 있는 스킬 ${rowCount}개 / 추가로 끊는 효과 ${attackCount}개 (예외 등록 ${INTERRUPT_OVERRIDES.length}건)`);

fs.mkdirSync("docs", { recursive: true });
fs.writeFileSync("docs/interrupt-reference.md", md.join("\n") + "\n", "utf8");
console.log(`docs/interrupt-reference.md — 챔피언 ${champCount}명, 끊길 수 있는 스킬 ${rowCount}개, 추가로 끊는 효과 ${attackCount}개`);

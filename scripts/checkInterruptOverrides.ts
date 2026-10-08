// scripts/checkInterruptOverrides.ts
// INTERRUPT_OVERRIDES 각 항목이 챔피언 파일(app/data/champs/)과 맞는지 분류해서 보고만 한다.
// (파일 수정 없음 — 챔피언 파일이 재작성 중이라 불일치가 많을 수 있음)
// 끊김 계산 기준과 같게 gimmick 필드만 읽는다(skills 필드는 보지 않음).
// 실행: node scripts/checkInterruptOverrides.ts → logs/interrupt_check_<timestamp>.txt

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

const { INTERRUPT_OVERRIDES } = await import("../app/data/interactions/interruptOverrides");
type Override = (typeof INTERRUPT_OVERRIDES)[number];

type Phase = { label: { ko: string; en: string }; tags: string[] };
type SlotData = string[] | { phases: (Phase | undefined)[] };
type Block = Partial<Record<string, SlotData>>;
const FORMS = ["base", "alt", "alt2", "alt3", "alt4"] as const;
const SLOTS = ["P", "Q", "W", "E", "R"] as const;

// 폼 구조면 폼별 블록, 아니면 단일 블록("")
function blocksOf(field: unknown): [string, Block][] {
  if (!field || typeof field !== "object") return [];
  const f = field as Record<string, unknown>;
  if ("base" in f) return FORMS.filter((k) => f[k]).map((k) => [k, f[k] as Block]);
  return [["", f as Block]];
}

// 슬롯 데이터 → [phase 라벨(배열이면 null), 태그] 목록
function phasesOf(data: SlotData): [string | null, string[]][] {
  if (Array.isArray(data)) return [[null, data]];
  return data.phases.filter((p): p is Phase => !!p).map((p) => [p.label.ko, p.tags]);
}

// 관련 태그(현재 태그 출력용)
const SHOW_TAGS = ["DASH", "BLINK", "SKILL_CHANNEL", "SKILL_CHANNEL_MOVEMENT", "SKILL_CHARGED"];
const showTags = (tags: string[]) => {
  const hit = SHOW_TAGS.filter((k) => tags.includes(k));
  return hit.length ? hit.join(", ") : "-";
};

const champCache = new Map<string, Record<string, unknown> | null>();
async function loadChamp(id: string) {
  if (!champCache.has(id)) {
    const file = `app/data/champs/${id}.ts`;
    champCache.set(id, fs.existsSync(file) ? ((await import(`../app/data/champs/${id}`)).default as Record<string, unknown>) : null);
  }
  return champCache.get(id)!;
}

type Category = "OK" | "UPGRADE_TO_MOVEMENT" | "ADD_MOVEMENT" | "MISSING_TAG" | "PHASE_REQUIRED" | "PHASE_NOT_FOUND" | "OTHER";
const CATEGORIES: Category[] = ["OK", "UPGRADE_TO_MOVEMENT", "ADD_MOVEMENT", "MISSING_TAG", "PHASE_REQUIRED", "PHASE_NOT_FOUND", "OTHER"];

type Result = { o: Override; cats: { cat: Category; todo: string }[]; current: string };

// kind별로 "있으면 OK"인 태그
function okTags(o: Override): string[] {
  if (o.kind === "SKILL_CHANNEL") return ["SKILL_CHANNEL", "SKILL_CHARGED"];
  // 이동형 채널링은 charged 여부와 상관없이 SKILL_CHANNEL_MOVEMENT가 있어야 OK
  // (SKILL_CHARGED만 있으면 ADD_MOVEMENT)
  if (o.kind === "SKILL_CHANNEL_MOVEMENT") return ["SKILL_CHANNEL_MOVEMENT"];
  return [o.kind];
}
// kind별 관련 태그(이게 하나도 없으면 MISSING_TAG)
function relatedTags(o: Override): string[] {
  if (o.kind === "DASH" || o.kind === "IGNORE_TERRAIN" || o.kind === "TRANSFORM") return [o.kind];
  return ["SKILL_CHANNEL", "SKILL_CHARGED", "SKILL_CHANNEL_MOVEMENT"];
}

async function classify(o: Override): Promise<Result> {
  const champ = await loadChamp(o.champ);
  const cats: Result["cats"] = [];
  if (!champ) return { o, cats: [{ cat: "OTHER", todo: "챔피언 파일 없음" }], current: "-" };

  // gimmick 필드의 해당 slot phase들(폼 구조면 폼 전체)
  const slotPhases: { where: string; label: string | null; tags: string[] }[] = [];
  for (const [form, block] of blocksOf(champ.gimmick)) {
    const data = block[o.slot];
    if (data) for (const [label, tags] of phasesOf(data)) slotPhases.push({ where: form, label, tags });
  }
  if (!slotPhases.length) return { o, cats: [{ cat: "OTHER", todo: "gimmick 필드에 slot 없음" }], current: "-" };

  const fmt = (list: typeof slotPhases) =>
    list.map((p) => `${p.where ? p.where + "." : ""}${p.label === null ? "(배열)" : `"${p.label}"`} ${showTags(p.tags)}`).join(" / ");
  const current = fmt(slotPhases);

  // 지정 phase(같은 라벨이 여러 개면 전부) 또는 slot 전체
  let target = slotPhases;
  if (o.phase !== undefined) {
    target = slotPhases.filter((p) => p.label === o.phase);
    if (!target.length) return { o, cats: [{ cat: "PHASE_NOT_FOUND", todo: "phase 라벨 확인" }], current };
  } else if (new Set(slotPhases.map((p) => p.where)).size < slotPhases.length) {
    // 폼 하나 안에 phase가 2개 이상(폼이 여러 개라 줄이 늘어난 건 제외)
    cats.push({ cat: "PHASE_REQUIRED", todo: "phase 지정 필요" });
  }

  const tags = new Set(target.flatMap((p) => p.tags));
  if (okTags(o).some((t) => tags.has(t))) cats.unshift({ cat: "OK", todo: "" });
  else if (o.kind === "SKILL_CHANNEL_MOVEMENT" && tags.has("SKILL_CHANNEL")) cats.unshift({ cat: "UPGRADE_TO_MOVEMENT", todo: "SKILL_CHANNEL → SKILL_CHANNEL_MOVEMENT" });
  else if (o.kind === "SKILL_CHANNEL_MOVEMENT" && tags.has("SKILL_CHARGED")) cats.unshift({ cat: "ADD_MOVEMENT", todo: "SKILL_CHANNEL_MOVEMENT 추가 (SKILL_CHARGED 유지)" });
  else if (!relatedTags(o).some((t) => tags.has(t))) cats.unshift({ cat: "MISSING_TAG", todo: `${o.kind} 태그 추가` });
  else cats.unshift({ cat: "OTHER", todo: "관련 태그 확인" });

  return { o, cats, current: o.phase !== undefined ? fmt(target) : current };
}

// ---- 라벨 규칙 검사(override와 무관, 챔피언 파일 전체의 gimmick 필드) ----
async function checkLabels() {
  const out: string[] = [];
  const ids = fs.readdirSync("app/data/champs").filter((f) => f.endsWith(".ts") && !f.startsWith("_")).map((f) => f.slice(0, -3)).sort();
  for (const id of ids) {
    const champ = await loadChamp(id);
    if (!champ) continue;
    for (const [form, block] of blocksOf(champ.gimmick)) {
      for (const slot of SLOTS) {
        const data = block[slot];
        if (!data || Array.isArray(data)) continue;
        const labels = phasesOf(data).map(([l]) => l as string);
        const loc = `${id} ${form ? form + "." : ""}${slot}`;
        const all = labels.map((l) => `"${l}"`).join(" / ");
        const dups = [...new Set(labels.filter((l, i) => labels.indexOf(l) !== i))];
        if (dups.length) out.push(`- ${loc} — 라벨 중복: ${dups.map((l) => `"${l}"`).join(", ")} (전체: ${all})`);
        if (labels.some((l) => l.trim() === "")) out.push(`- ${loc} — 빈 라벨 ${labels.filter((l) => l.trim() === "").length}개 (전체: ${all})`);
      }
    }
  }
  return { ids: ids.length, out };
}

// ---- 실행 ----
const results: Result[] = [];
for (const o of INTERRUPT_OVERRIDES) results.push(await classify(o));
const labelCheck = await checkLabels();

const now = new Date();
const pad = (n: number) => String(n).padStart(2, "0");
const stamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}`;
const name = (o: Override) => `${o.champ} ${o.slot}${o.phase !== undefined ? `(${o.phase})` : ""}`;
const byChamp = (a: Result, b: Result) => a.o.champ.localeCompare(b.o.champ) || a.o.slot.localeCompare(b.o.slot);

const lines: string[] = [];
lines.push(`# INTERRUPT_OVERRIDES ↔ 챔피언 파일(gimmick 필드) 대조 (${stamp})`);
lines.push(`항목 수: ${INTERRUPT_OVERRIDES.length} / 현재 태그 표기: phase 라벨 + 관련 태그(${SHOW_TAGS.join("/")}), 없으면 "-"`);
lines.push("");

lines.push("========== 1) 분류별 개수 ==========");
lines.push("(PHASE_REQUIRED는 다른 분류와 중복 가능)");
for (const c of CATEGORIES) lines.push(`${c}: ${results.filter((r) => r.cats.some((x) => x.cat === c)).length}`);
lines.push("");

const todos = results
  .flatMap((r) => r.cats.filter((x) => x.cat !== "OK").map((x) => ({ r, ...x })))
  .sort((a, b) => byChamp(a.r, b.r));
lines.push(`========== 2) 할 일 목록 (${todos.length}건) ==========`);
lines.push("형식: champ slot(phase) — 분류 — 할 일 — 현재 태그");
for (const t of todos) lines.push(`- ${name(t.r.o)} — ${t.cat} — ${t.todo} — ${t.r.current}`);
if (!todos.length) lines.push("(없음)");
lines.push("");

lines.push(`========== 3) 라벨 규칙 위반 (gimmick 필드, 챔피언 ${labelCheck.ids}개 전체) ==========`);
lines.push(...(labelCheck.out.length ? labelCheck.out : ["(없음)"]));
lines.push("");

const oks = results.filter((r) => r.cats.some((x) => x.cat === "OK")).sort(byChamp);
lines.push(`========== 4) OK 목록 (${oks.length}건) ==========`);
for (const r of oks) lines.push(`- ${name(r.o)} — kind ${r.o.kind}${r.o.charged ? ", charged" : ""} — ${r.current}`);

const outFile = `logs/interrupt_check_${stamp}.txt`;
fs.writeFileSync(outFile, lines.join("\n") + "\n", "utf8");
console.log(outFile);
console.log(lines.join("\n"));

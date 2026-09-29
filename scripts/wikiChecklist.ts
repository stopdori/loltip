// scripts/wikiChecklist.ts
// 위키 Dash / Channel 목록(scripts/ref/wikiAbilities.ts)과 챔피언 파일 gimmick 필드를
// 대조해 체크리스트를 만든다. 보고만 하고 어떤 파일도 수정하지 않는다.
// 실행: node scripts/wikiChecklist.ts
//   → scripts/ref/wikiAbilities.resolved.json (슬롯 매핑 결과)
//   → logs/wiki_checklist_<timestamp>.md

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

const { WIKI_ABILITIES } = await import("./ref/wikiAbilities");
type WikiAbility = (typeof WIKI_ABILITIES)[number];
type WikiList = WikiAbility["list"];

const SLOTS = ["P", "Q", "W", "E", "R"] as const;
type Slot = (typeof SLOTS)[number];
const FORMS = ["base", "alt", "alt2", "alt3", "alt4"] as const;
const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

// ---------- Data Dragon ----------
const version: string = (await (await fetch("https://ddragon.leagueoflegends.com/api/versions.json")).json())[0];
const full = (await (await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/championFull.json`)).json()) as {
  data: Record<string, { id: string; name: string; passive: { name: string }; spells: { name: string }[] }>;
};
const ddChamps = Object.values(full.data);
const ddSlotNames = (c: (typeof ddChamps)[number]): Record<Slot, string> => ({
  P: c.passive.name, Q: c.spells[0].name, W: c.spells[1].name, E: c.spells[2].name, R: c.spells[3].name,
});

// ---------- 챔피언 파일 ----------
const fileIds = fs.readdirSync("app/data/champs").filter((f) => f.endsWith(".ts") && !f.startsWith("_")).map((f) => f.slice(0, -3)).sort();
const champCache = new Map<string, Record<string, unknown>>();
async function loadChamp(id: string) {
  if (!champCache.has(id)) champCache.set(id, (await import(`../app/data/champs/${id}`)).default as Record<string, unknown>);
  return champCache.get(id)!;
}

type Phase = { label: { ko: string; en: string }; tags: string[] };
type SlotData = string[] | { phases: (Phase | undefined)[] };
function blocksOf(field: unknown): [string, Record<string, unknown>][] {
  if (!field || typeof field !== "object") return [];
  const f = field as Record<string, unknown>;
  if ("base" in f) return FORMS.filter((k) => f[k]).map((k) => [k, f[k] as Record<string, unknown>]);
  return [["", f]];
}
type PhaseInfo = { form: string; label: string | null; labelEn: string | null; tags: string[] };
function slotPhases(champ: Record<string, unknown>, field: string, slot: Slot): PhaseInfo[] {
  const out: PhaseInfo[] = [];
  for (const [form, block] of blocksOf(champ[field])) {
    const data = block[slot] as SlotData | undefined;
    if (!data) continue;
    if (Array.isArray(data)) out.push({ form, label: null, labelEn: null, tags: data });
    else for (const p of data.phases) if (p) out.push({ form, label: p.label.ko, labelEn: p.label.en, tags: p.tags });
  }
  return out;
}

// ---------- 매핑 ----------
function champIdOf(name: string): string | null {
  const n = norm(name);
  if (fileIds.includes(n)) return n;
  const dd = ddChamps.find((c) => norm(c.name) === n || norm(c.id) === n);
  if (dd) for (const k of [norm(dd.id), norm(dd.name)]) if (fileIds.includes(k)) return k;
  return null;
}
function ddChampOf(name: string, fileId: string | null) {
  const n = norm(name);
  return ddChamps.find((c) => norm(c.name) === n || norm(c.id) === n || (fileId !== null && norm(c.id) === fileId));
}

// Data Dragon에 없는 능력: 챔피언 파일의 skillTooltip 문장·phase 영문 라벨에서 이름 검색
async function slotFromFile(fileId: string, ability: string): Promise<Slot[]> {
  const champ = await loadChamp(fileId);
  const a = norm(ability);
  const hits = new Set<Slot>();
  for (const [, block] of blocksOf(champ.skillTooltip)) {
    for (const slot of SLOTS) {
      const t = block[slot] as { ko?: string; en?: string } | undefined;
      if (t && norm(`${t.en ?? ""} ${t.ko ?? ""}`).includes(a)) hits.add(slot);
    }
  }
  for (const field of ["gimmick", "skills"])
    for (const slot of SLOTS) if (slotPhases(champ, field, slot).some((p) => p.labelEn && norm(p.labelEn).includes(a))) hits.add(slot);
  return [...hits];
}

type Resolved = WikiAbility & { champId: string | null; slot: Slot | null; method: "ddragon" | "file" | null; reason?: string };
const resolved: Resolved[] = [];
for (const w of WIKI_ABILITIES) {
  const champId = champIdOf(w.champion);
  if (!champId) { resolved.push({ ...w, champId, slot: null, method: null, reason: "챔피언 파일 없음" }); continue; }
  const dd = ddChampOf(w.champion, champId);
  if (dd) {
    const names = ddSlotNames(dd);
    // "Blood Frenzy / Snack Attack"처럼 "/" 또는 "|"로 묶인 이름은 나눠서 각각 비교
    const slot = SLOTS.find((s) => names[s].split(/[/|]/).some((part) => norm(part) === norm(w.ability)));
    if (slot) { resolved.push({ ...w, champId, slot, method: "ddragon" }); continue; }
  }
  const fromFile = await slotFromFile(champId, w.ability);
  if (fromFile.length === 1) resolved.push({ ...w, champId, slot: fromFile[0], method: "file" });
  else resolved.push({ ...w, champId, slot: null, method: null, reason: fromFile.length ? `파일에서 여러 슬롯 일치(${fromFile.join(",")})` : dd ? "Data Dragon·파일 모두 불일치" : "Data Dragon에 챔피언 없음 + 파일 불일치" });
}
fs.writeFileSync("scripts/ref/wikiAbilities.resolved.json", JSON.stringify({ ddragonVersion: version, entries: resolved }, null, 2) + "\n", "utf8");

// ---------- 검사 ----------
const SHOW = ["DASH", "BLINK", "SKILL_CHANNEL", "SKILL_CHANNEL_MOVEMENT", "SKILL_CHARGED", "CAST_COMMIT"];
const CHANNEL_LISTS: WikiList[] = ["CHANNEL", "CHANNEL_MOVEMENT", "CHANNEL_OBJECTIVE", "CHANNEL_UNINTERRUPTIBLE", "CHARGED"];
const CHANNEL_TAGS = ["SKILL_CHANNEL", "SKILL_CHANNEL_MOVEMENT", "SKILL_CHARGED"];

type Item = { champ: string; slot: Slot; labels: string; ability: string; qualifier?: string; kind: "A" | "B" | "C" | "D"; todo: string; current: string };
const items: Item[] = [];

const fmtLabels = (ps: PhaseInfo[]) => {
  const l = ps.filter((p) => p.label !== null).map((p) => `${p.form ? p.form + "." : ""}${p.label}`);
  return l.length ? [...new Set(l)].join(", ") : ps.some((p) => p.form) ? [...new Set(ps.map((p) => p.form))].join(", ") : "배열";
};
const fmtCurrent = (ps: PhaseInfo[]) =>
  ps.map((p) => {
    const hit = SHOW.filter((t) => p.tags.includes(t));
    const name = p.label !== null ? `${p.form ? p.form + "." : ""}"${p.label}"` : p.form ? `${p.form}.(배열)` : "(배열)";
    return `${name} ${hit.length ? hit.join(", ") : "-"}`;
  }).join(" / ");

// 같은 챔피언·슬롯·목록·능력은 qualifier를 합쳐 한 건으로
const groups = new Map<string, { r: Resolved; quals: string[] }>();
for (const r of resolved.filter((r) => r.slot)) {
  const k = `${r.champId}|${r.slot}|${r.list}|${r.ability}`;
  const g = groups.get(k) ?? { r, quals: [] };
  if (r.qualifier) g.quals.push(r.qualifier);
  groups.set(k, g);
}

for (const { r, quals } of groups.values()) {
  const champ = await loadChamp(r.champId!);
  const ps = slotPhases(champ, "gimmick", r.slot!);
  const tags = new Set(ps.flatMap((p) => p.tags));
  const base = { champ: r.champId!, slot: r.slot!, labels: fmtLabels(ps), ability: r.ability, qualifier: quals.join("; ") || undefined, current: ps.length ? fmtCurrent(ps) : "(gimmick에 슬롯 없음)" };
  const push = (kind: Item["kind"], todo: string) => items.push({ ...base, kind, todo });
  switch (r.list) {
    case "DASH":
      if (!tags.has("DASH")) push("A", "DASH 추가");
      break;
    case "CHANNEL":
      if (!tags.has("SKILL_CHANNEL") && !tags.has("SKILL_CHARGED")) push("C", tags.has("SKILL_CHANNEL_MOVEMENT") ? "SKILL_CHANNEL 확인(현재 MOVEMENT만 있음)" : "SKILL_CHANNEL 추가");
      break;
    case "CHANNEL_MOVEMENT":
      if (!tags.has("SKILL_CHANNEL_MOVEMENT")) push("C", tags.has("SKILL_CHANNEL") ? "MOVEMENT로 변경" : "SKILL_CHANNEL_MOVEMENT 추가");
      break;
    case "CHARGED":
      if (!tags.has("SKILL_CHARGED")) push("C", "SKILL_CHARGED 추가");
      break;
    case "CHANNEL_UNINTERRUPTIBLE":
      if (!tags.has("CAST_COMMIT")) push("C", "CAST_COMMIT 추가");
      break;
    case "CHANNEL_OBJECTIVE":
      if (!CHANNEL_TAGS.some((t) => tags.has(t))) push("C", "채널 태그 없음(참고: 오브젝트 채널)");
      break;
  }
}

// B / D: 챔피언 파일 쪽에서 출발
const listed = (champId: string, slot: Slot, lists: WikiList[]) => resolved.some((r) => r.champId === champId && r.slot === slot && lists.includes(r.list));
for (const id of fileIds) {
  const champ = await loadChamp(id);
  const dd = ddChamps.find((c) => norm(c.id) === id || norm(c.name) === id);
  for (const slot of SLOTS) {
    const ps = slotPhases(champ, "gimmick", slot);
    const ability = dd ? ddSlotNames(dd)[slot] : "-";
    const dashPs = ps.filter((p) => p.tags.includes("DASH"));
    if (dashPs.length && !listed(id, slot, ["DASH"]))
      items.push({ champ: id, slot, labels: fmtLabels(dashPs), ability, kind: "B", todo: "DASH 확인(위키 DASH 목록에 없음 — 점멸 오태깅/목록 누락 가능성)", current: fmtCurrent(dashPs) });
    const chPs = ps.filter((p) => CHANNEL_TAGS.some((t) => p.tags.includes(t)));
    if (chPs.length && !listed(id, slot, CHANNEL_LISTS))
      items.push({ champ: id, slot, labels: fmtLabels(chPs), ability, kind: "D", todo: "채널 태그 확인(위키 채널 계열 목록에 없음)", current: fmtCurrent(chPs) });
  }
}

// ---------- 출력 ----------
const now = new Date();
const pad = (n: number) => String(n).padStart(2, "0");
const stamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}`;
const unmatched = resolved.filter((r) => !r.slot);
const count = (k: Item["kind"]) => items.filter((i) => i.kind === k).length;
const champsWithIssues = [...new Set(items.map((i) => i.champ))].sort();
const slotOrder = (s: Slot) => SLOTS.indexOf(s);
const kindOrder = { A: 0, B: 1, C: 2, D: 3 };

const md: string[] = [];
md.push(`# 위키 기준 돌진·채널링 체크리스트 (${stamp})`, "");
md.push(`기준: 챔피언 파일 gimmick 필드(폼·phase 전체) / Data Dragon ${version} / 위키 목록 ${WIKI_ABILITIES.length}건`, "");
md.push("## 1) 요약", "");
md.push("| 구분 | 개수 |", "|---|---|");
md.push(`| A. DASH 누락 | ${count("A")} |`, `| B. DASH 확인 필요 | ${count("B")} |`, `| C. 채널 누락 | ${count("C")} |`, `| D. 채널 확인 필요 | ${count("D")} |`);
md.push(`| UNMATCHED | ${unmatched.length} |`, `| 문제 있는 챔피언 | ${champsWithIssues.length} |`, "");
md.push("## 2) 챔피언별 체크리스트", "");
for (const c of champsWithIssues) {
  md.push(`### ${c}`);
  for (const i of items.filter((i) => i.champ === c).sort((a, b) => slotOrder(a.slot) - slotOrder(b.slot) || kindOrder[a.kind] - kindOrder[b.kind]))
    md.push(`- [ ] ${i.slot}(${i.labels}) ${i.ability}${i.qualifier ? ` (${i.qualifier})` : ""} — ${i.kind} — ${i.todo} — 현재 태그: ${i.current}`);
  md.push("");
}
md.push("## 3) UNMATCHED", "", "| 챔피언 | 능력 | qualifier | 목록 | 사유 |", "|---|---|---|---|---|");
for (const u of unmatched) md.push(`| ${u.champion} | ${u.ability} | ${u.qualifier ?? ""} | ${u.list} | ${u.reason} |`);
if (!unmatched.length) md.push("| (없음) | | | | |");
md.push("", "---", "위키 목록 기준 후보이며 판단은 사용자가 한다. qualifier가 'when clicked', 'pull-in', 'ally cast'인 항목은 아군이 사용하는 돌진일 수 있음.");

const outFile = `logs/wiki_checklist_${stamp}.md`;
fs.writeFileSync(outFile, md.join("\n") + "\n", "utf8");
console.log(outFile);
console.log(`A ${count("A")} / B ${count("B")} / C ${count("C")} / D ${count("D")} / UNMATCHED ${unmatched.length} / 챔피언 ${champsWithIssues.length}`);
console.log(`file 매핑: ${resolved.filter((r) => r.method === "file").map((r) => `${r.champion} ${r.ability}→${r.slot}`).join(", ")}`);
console.log("UNMATCHED:");
for (const u of unmatched) console.log(`  ${u.champion} | ${u.ability} | ${u.qualifier ?? ""} | ${u.list} | ${u.reason}`);
for (const k of ["A", "B", "C", "D"] as const) {
  console.log(`--- ${k} (앞 10) ---`);
  for (const i of items.filter((i) => i.kind === k).sort((a, b) => a.champ.localeCompare(b.champ) || slotOrder(a.slot) - slotOrder(b.slot)).slice(0, 10))
    console.log(`  ${i.champ} ${i.slot}(${i.labels}) ${i.ability}${i.qualifier ? ` (${i.qualifier})` : ""} — ${i.todo} — ${i.current}`);
}

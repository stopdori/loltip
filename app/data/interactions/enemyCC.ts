// app/data/interactions/enemyCC.ts
//
// 챔피언이 상대에게 거는 CC를 gimmick 필드 phase 단위로 뽑는다.
// skills 필드는 요약용이라 쓰지 않는다. 자신·아군 대상 CC는
// ccApplyOverrides.ts에 등록된 것만 제외한다.

import type { TagId } from "./tags";
import type { GimmickTagId } from "./tags_gimmick";
import type { ChampData, SkillKey } from "./types";
import { CC_INTERACTIONS } from "./ccInteractions";
import { CC_APPLY_OVERRIDES } from "./ccApplyOverrides";

const FORMS = ["base", "alt", "alt2", "alt3", "alt4"] as const;
const SLOTS: SkillKey[] = ["P", "Q", "W", "E", "R"];
const CC_ORDER = Object.keys(CC_INTERACTIONS) as TagId[];

export type GimmickPhaseEntry = {
  form?: string;            // 폼 없는 챔피언은 undefined
  slot: SkillKey;
  formSlot: string;         // "Q" 또는 "base.Q"
  phase?: string;           // phase ko 라벨(배열 슬롯이면 undefined)
  tags: (TagId | GimmickTagId)[];
};

// gimmick 필드를 폼·슬롯·phase 단위로 펼친다.
export function getGimmickPhases(champ: ChampData): GimmickPhaseEntry[] {
  const g = champ.gimmick;
  if (!g) return [];
  const blocks: [string | undefined, Partial<Record<SkillKey, unknown>>][] =
    "base" in g
      ? FORMS.filter((f) => (g as Record<string, unknown>)[f]).map((f) => [f, (g as Record<string, Partial<Record<SkillKey, unknown>>>)[f]])
      : [[undefined, g as Partial<Record<SkillKey, unknown>>]];
  const out: GimmickPhaseEntry[] = [];
  for (const [form, block] of blocks) {
    for (const slot of SLOTS) {
      const data = block[slot] as
        | (TagId | GimmickTagId)[]
        | { phases: ({ label: { ko: string }; tags: (TagId | GimmickTagId)[] } | undefined)[] }
        | undefined;
      if (!data) continue;
      const formSlot = form ? `${form}.${slot}` : slot;
      if (Array.isArray(data)) out.push({ form, slot, formSlot, tags: data });
      else for (const p of data.phases) if (p) out.push({ form, slot, formSlot, phase: p.label.ko, tags: p.tags });
    }
  }
  return out;
}

export function isCCTag(t: TagId | GimmickTagId): t is TagId {
  return t in CC_INTERACTIONS;
}

export function sortCC(tags: TagId[]): TagId[] {
  return [...new Set(tags)].sort((a, b) => CC_ORDER.indexOf(a) - CC_ORDER.indexOf(b));
}

function isExcluded(champ: string, e: GimmickPhaseEntry, tag: TagId): boolean {
  return CC_APPLY_OVERRIDES.some(
    (o) =>
      o.champ === champ &&
      o.slot === e.slot &&
      o.tag === tag &&
      (o.form === undefined || o.form === e.form) &&
      (o.phase === undefined || o.phase === e.phase),
  );
}

export type EnemyCCEntry = { formSlot: string; phase?: string; cc: TagId[] };

export function getEnemyCC(champ: ChampData): EnemyCCEntry[] {
  const out: EnemyCCEntry[] = [];
  for (const e of getGimmickPhases(champ)) {
    const cc = sortCC(e.tags.filter(isCCTag).filter((t) => !isExcluded(champ.id, e, t)));
    if (cc.length) out.push({ formSlot: e.formSlot, ...(e.phase !== undefined ? { phase: e.phase } : {}), cc });
  }
  return out;
}

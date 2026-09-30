// app/data/interactions/resolveInterrupt.ts
//
// 스킬(phase) 하나가 어떤 CC에 끊기는지 계산하는 순수 함수.
// 챔피언 파일을 직접 읽지 않고 태그 배열 + 예외(interruptOverrides.ts)를 받아서
// 계산하므로, 챔피언 파일 상태와 무관하게 테스트할 수 있다.
// (테스트: node scripts/testResolveInterrupt.ts)
//
// phaseTags는 챔피언 파일 gimmick 필드의 phase 태그를 넘긴다. skills 필드는
// 끊김 계산에 쓰지 않는다. interruptOverrides의 phase 값도 gimmick 필드의
// phase ko 라벨 기준.
// LUNGE는 돌진 판정이 아니므로 기본 끊김 규칙 없음.

import type { TagId } from "./tags";
import type { GimmickTagId } from "./tags_gimmick";
import {
  CC_INTERACTIONS,
  CC_GROUPS,
  CHANNEL_INTERRUPTED_BY,
  DASH_INTERRUPTED_BY,
  MOVEMENT_CHANNEL_INTERRUPTED_BY,
} from "./ccInteractions";
import { INTERRUPT_OVERRIDES, type InterruptOverride } from "./interruptOverrides";

type PhaseTag = TagId | GimmickTagId;

export type ResolveInterruptInput = {
  phaseTags: PhaseTag[];
  override?: InterruptOverride;
};

export type ResolveInterruptResult = {
  interruptedBy: TagId[];
  trace: string[];
};

// 태그 → 기본 규칙상 그 태그를 끊는 CC 목록
const BASE_RULES: [PhaseTag, TagId[]][] = [
  ["DASH", DASH_INTERRUPTED_BY],
  ["SKILL_CHANNEL", CHANNEL_INTERRUPTED_BY],
  ["SKILL_CHARGED", CHANNEL_INTERRUPTED_BY],
  ["SKILL_CHANNEL_MOVEMENT", MOVEMENT_CHANNEL_INTERRUPTED_BY],
];

// 이 중 하나라도 phase에 있으면 어떤 CC로도 끊기지 않음
const IMMUNE_TAGS: PhaseTag[] = ["UNSTOPPABLE", "CC_IMMUNE", "CAST_COMMIT"];

const CC_ORDER = Object.keys(CC_INTERACTIONS) as TagId[];

// 그룹 태그(IMMOBILIZING 등)를 구성원으로 펼침. 그룹이 아니면 자기 자신.
function expandGroups(refs: TagId[]): TagId[] {
  const out: TagId[] = [];
  const visit = (t: TagId) => {
    const members = CC_GROUPS[t];
    if (members) members.forEach(visit);
    else if (!out.includes(t)) out.push(t);
  };
  refs.forEach(visit);
  return out;
}

// CC_INTERACTIONS 등록 순서대로 정렬(등록 안 된 태그는 뒤에, 들어온 순서 유지)
function sortByCCOrder(tags: TagId[]): TagId[] {
  const rank = (t: TagId) => {
    const i = CC_ORDER.indexOf(t);
    return i === -1 ? CC_ORDER.length : i;
  };
  return tags.map((t, i) => ({ t, i })).sort((a, b) => rank(a.t) - rank(b.t) || a.i - b.i).map((x) => x.t);
}

export function resolveInterruptedBy(input: ResolveInterruptInput): ResolveInterruptResult {
  const { phaseTags, override } = input;
  const trace: string[] = [];

  // a) 예외 파일에서 끊기지 않는다고 지정
  if (override?.uninterruptible) {
    trace.push(`a) override.uninterruptible (${override.champ} ${override.slot}${override.phase ? ` ${override.phase}` : ""}) → 빈 배열`);
    return { interruptedBy: [], trace };
  }

  // b) 기본 집합: phaseTags + override.kind 기준 합집합
  const set = new Set<TagId>();
  const kinds: PhaseTag[] = [...phaseTags];
  if (override && !kinds.includes(override.kind)) kinds.push(override.kind);
  for (const [tag, list] of BASE_RULES) {
    if (!kinds.includes(tag)) continue;
    const added = list.filter((t) => !set.has(t));
    added.forEach((t) => set.add(t));
    trace.push(`b) ${tag}${phaseTags.includes(tag) ? "" : "(override.kind)"} → +[${added.join(", ")}]`);
  }
  if (set.size === 0) trace.push("b) 기본 규칙 대상 태그 없음 → 빈 집합");

  // c) override.also 추가
  if (override?.also?.length) {
    const added = expandGroups(override.also).filter((t) => !set.has(t));
    added.forEach((t) => set.add(t));
    trace.push(`c) also [${override.also.join(", ")}] → +[${added.join(", ")}]`);
  }

  // d) override.except 제거
  if (override?.except?.length) {
    const removed = expandGroups(override.except).filter((t) => set.has(t));
    removed.forEach((t) => set.delete(t));
    trace.push(`d) except [${override.except.join(", ")}] → -[${removed.join(", ")}]`);
  }

  // e) phase 자체에 CC 면역/저지불가/시전 확정 태그가 있으면 끊기지 않음
  const immune = IMMUNE_TAGS.filter((t) => phaseTags.includes(t));
  if (immune.length) {
    trace.push(`e) ${immune.join(", ")} 보유 → 빈 배열`);
    return { interruptedBy: [], trace };
  }

  const interruptedBy = sortByCCOrder([...set]);
  trace.push(`= [${interruptedBy.join(", ")}]`);
  return { interruptedBy, trace };
}

// phase가 일치하는 항목을 우선 매칭하고, 없으면 phase 없는 항목
export function findOverride(champ: string, slot: InterruptOverride["slot"], phase?: string): InterruptOverride | undefined {
  const candidates = INTERRUPT_OVERRIDES.filter((o) => o.champ === champ && o.slot === slot);
  return (phase !== undefined ? candidates.find((o) => o.phase === phase) : undefined) ?? candidates.find((o) => o.phase === undefined);
}

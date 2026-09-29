// app/data/interactions/matchInterrupts.ts
//
// 내 챔피언의 끊길 수 있는 스킬(phase)과 상대 챔피언이 거는 CC를 맞대어,
// 상대의 어떤 스킬(phase)이 내 스킬을 끊을 수 있는지 계산한다.
// 양쪽 모두 gimmick 필드만 사용한다(skills 필드는 요약용이라 쓰지 않음).

import type { TagId } from "./tags";
import type { ChampData } from "./types";
import { resolveInterruptedBy, findOverride } from "./resolveInterrupt";
import { getGimmickPhases, getEnemyCC, sortCC } from "./enemyCC";

export type InterruptHit = { enemySlot: string; enemyPhase?: string; cc: TagId[] };
export type InterruptMatch = { mySlot: string; myPhase?: string; interruptedBy: TagId[]; hits: InterruptHit[] };

export function matchInterrupts(myChamp: ChampData, enemyChamp: ChampData): InterruptMatch[] {
  const enemyCC = getEnemyCC(enemyChamp);
  const out: InterruptMatch[] = [];
  for (const e of getGimmickPhases(myChamp)) {
    const { interruptedBy } = resolveInterruptedBy({ phaseTags: e.tags, override: findOverride(myChamp.id, e.slot, e.phase) });
    if (!interruptedBy.length) continue;
    const set = new Set(interruptedBy);
    const hits: InterruptHit[] = [];
    for (const en of enemyCC) {
      const cc = sortCC(en.cc.filter((t) => set.has(t)));
      if (cc.length) hits.push({ enemySlot: en.formSlot, ...(en.phase !== undefined ? { enemyPhase: en.phase } : {}), cc });
    }
    out.push({ mySlot: e.formSlot, ...(e.phase !== undefined ? { myPhase: e.phase } : {}), interruptedBy, hits });
  }
  return out;
}

// app/data/interactions/ccInteractions.ts
//
// CC 태그별 상호작용 메타데이터(채널링/대시 차단 여부, 강인함 적용 여부,
// 해제 수단 등). /tags 상세 카드에서 태그 설명 아래 보조 정보로 표시한다.
// 여기 없는 태그는 이 섹션 자체를 표시하지 않는다.

import type { TagId } from "./tags";

export type Removal = "CLEANSE_FAMILY" | "QSS_ONLY" | "NONE" | "NOT_APPLICABLE";

export type CCInteraction = {
  interruptsChannel: boolean;
  interruptsDash: boolean;
  blocksMovementSpells: boolean;
  blocksAllSpells: boolean;
  tenacity: boolean | "NOT_APPLICABLE";
  removal: Removal;
  endsIfCasterDies?: boolean;
  note?: { ko: string; en: string };
};

export const CC_INTERACTIONS: Partial<Record<TagId, CCInteraction>> = {
  STUN:        { interruptsChannel: true, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY" },
  SUSPENDING:  { interruptsChannel: true, interruptsDash: true, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY" },
  ROOT:        { interruptsChannel: true, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY", note: { ko: "이동 채널링만 끊음", en: "Only interrupts movement channels" } },
  GROUNDED:    { interruptsChannel: true, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY", note: { ko: "이동 채널링만 끊음", en: "Only interrupts movement channels" } },
  SLOW:        { interruptsChannel: false, interruptsDash: false, blocksMovementSpells: false, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY" },
  DROWSY:      { interruptsChannel: false, interruptsDash: false, blocksMovementSpells: false, blocksAllSpells: false, tenacity: false, removal: "CLEANSE_FAMILY" },
  SLEEP:       { interruptsChannel: true, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY", note: { ko: "즉발 피해를 받으면 조기 해제(지속피해 제외)", en: "Ends early on burst damage (not DoT)" } },
  STASIS:      { interruptsChannel: true, interruptsDash: true, blocksMovementSpells: true, blocksAllSpells: true, tenacity: false, removal: "NONE" },
  AIRBORNE:    { interruptsChannel: true, interruptsDash: true, blocksMovementSpells: true, blocksAllSpells: false, tenacity: false, removal: "NONE" },
  KNOCKBACK:   { interruptsChannel: true, interruptsDash: true, blocksMovementSpells: true, blocksAllSpells: false, tenacity: false, removal: "NONE" },
  GRAB:        { interruptsChannel: true, interruptsDash: true, blocksMovementSpells: true, blocksAllSpells: false, tenacity: false, removal: "NONE" },
  KNOCKDOWN:   { interruptsChannel: false, interruptsDash: true, blocksMovementSpells: false, blocksAllSpells: false, tenacity: "NOT_APPLICABLE", removal: "NOT_APPLICABLE", note: { ko: "상태 효과가 아닌 순간 이벤트 — 대시/공중이탈 중인 대상만 적용", en: "Not a status effect — only affects units currently dashing or airborne" } },
  CHARM:       { interruptsChannel: true, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY", endsIfCasterDies: true },
  TAUNT:       { interruptsChannel: true, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY", endsIfCasterDies: true },
  FEAR:        { interruptsChannel: true, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY", endsIfCasterDies: true },
  BERSERK:     { interruptsChannel: true, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY", endsIfCasterDies: false },
  SILENCE:     { interruptsChannel: true, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY" },
  POLYMORPH:   { interruptsChannel: true, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY" },
  SUPPRESS:    { interruptsChannel: true, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: true, tenacity: false, removal: "QSS_ONLY" },
  DISRUPT:     { interruptsChannel: true, interruptsDash: false, blocksMovementSpells: false, blocksAllSpells: false, tenacity: "NOT_APPLICABLE", removal: "NOT_APPLICABLE", note: { ko: "상태 효과가 아닌 순간 효과", en: "Not a status effect, an instant effect" } },
  BLIND:       { interruptsChannel: false, interruptsDash: false, blocksMovementSpells: false, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY" },
  CRIPPLE:     { interruptsChannel: false, interruptsDash: false, blocksMovementSpells: false, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY" },
  DISARM:      { interruptsChannel: false, interruptsDash: false, blocksMovementSpells: false, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY" },
  KINEMATICS:  { interruptsChannel: false, interruptsDash: false, blocksMovementSpells: false, blocksAllSpells: false, tenacity: false, removal: "NONE" },
  NEAR_SIGHT:  { interruptsChannel: false, interruptsDash: false, blocksMovementSpells: false, blocksAllSpells: false, tenacity: false, removal: "QSS_ONLY", note: { ko: "정화 스펠 제외, QSS 계열로는 해제 가능", en: "Not removed by Cleanse spell, but removable via QSS-family effects" } },
};

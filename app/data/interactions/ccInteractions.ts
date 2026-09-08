// app/data/interactions/ccInteractions.ts
//
// CC 태그별 상호작용 메타데이터(채널링/이동형 채널링/대시 차단 여부, 강인함
// 적용 여부, 해제 수단 등). /tags 상세 카드에서 태그 설명 아래 보조 정보로
// 표시한다. 여기 없는 태그는 이 섹션 자체를 표시하지 않는다.

import type { TagId } from "./tags";

export type Removal = "CLEANSE_FAMILY" | "QSS_ONLY" | "NONE" | "NOT_APPLICABLE";

export type CCInteraction = {
  // 일반 채널링([[SKILL_CHANNEL]]/[[SKILL_CHARGED]])을 끊는지
  interruptsChannel: boolean;
  // "이동형 채널링"([[SKILL_CHANNEL_MOVEMENT]] — 시전자가 이동하며 유지하는
  // 채널, 예: 라이즈 R)을 끊는지. 위키 Channel 문서 기준 Root/Grounded 계열은
  // 일반 채널은 못 끊고 이동형 채널만 끊는다.
  interruptsMovementChannel: boolean;
  interruptsDash: boolean;
  blocksMovementSpells: boolean;
  blocksAllSpells: boolean;
  tenacity: boolean | "NOT_APPLICABLE";
  removal: Removal;
  endsIfCasterDies?: boolean;
  note?: { ko: string; en: string };
};

export const CC_INTERACTIONS: Partial<Record<TagId, CCInteraction>> = {
  STUN:        { interruptsChannel: true, interruptsMovementChannel: false, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY" },
  SUSPENDING:  { interruptsChannel: true, interruptsMovementChannel: false, interruptsDash: true, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY" },
  ROOT:        { interruptsChannel: false, interruptsMovementChannel: true, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY", note: { ko: "일반 채널링은 끊지 않고, 이동이 결부된 채널(movement channel)만 끊는다 — 위키 Channel 문서 기준", en: "Does not interrupt normal channels — only interrupts movement channels, per the wiki's Channel article" } },
  GROUNDED:    { interruptsChannel: false, interruptsMovementChannel: true, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY", note: { ko: "일반 채널링은 끊지 않고, 이동이 결부된 채널(movement channel)만 끊는다 — 위키 Channel 문서 기준", en: "Does not interrupt normal channels — only interrupts movement channels, per the wiki's Channel article" } },
  SLOW:        { interruptsChannel: false, interruptsMovementChannel: false, interruptsDash: false, blocksMovementSpells: false, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY" },
  DROWSY:      { interruptsChannel: false, interruptsMovementChannel: false, interruptsDash: false, blocksMovementSpells: false, blocksAllSpells: false, tenacity: false, removal: "CLEANSE_FAMILY" },
  SLEEP:       { interruptsChannel: true, interruptsMovementChannel: false, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY", note: { ko: "즉발 피해를 받으면 조기 해제(지속피해 제외)", en: "Ends early on burst damage (not DoT)" } },
  STASIS:      { interruptsChannel: true, interruptsMovementChannel: false, interruptsDash: true, blocksMovementSpells: true, blocksAllSpells: true, tenacity: false, removal: "NONE" },
  AIRBORNE:    { interruptsChannel: true, interruptsMovementChannel: false, interruptsDash: true, blocksMovementSpells: true, blocksAllSpells: false, tenacity: false, removal: "NONE" },
  KNOCKBACK:   { interruptsChannel: true, interruptsMovementChannel: false, interruptsDash: true, blocksMovementSpells: true, blocksAllSpells: false, tenacity: false, removal: "NONE" },
  GRAB:        { interruptsChannel: true, interruptsMovementChannel: false, interruptsDash: true, blocksMovementSpells: true, blocksAllSpells: false, tenacity: false, removal: "NONE" },
  KNOCKDOWN:   { interruptsChannel: false, interruptsMovementChannel: false, interruptsDash: true, blocksMovementSpells: false, blocksAllSpells: false, tenacity: "NOT_APPLICABLE", removal: "NOT_APPLICABLE", note: { ko: "상태 효과가 아닌 순간 이벤트 — 대시/공중이탈 중인 대상만 적용", en: "Not a status effect — only affects units currently dashing or airborne" } },
  CHARM:       { interruptsChannel: true, interruptsMovementChannel: false, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY", endsIfCasterDies: true },
  TAUNT:       { interruptsChannel: true, interruptsMovementChannel: false, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY", endsIfCasterDies: true },
  FEAR:        { interruptsChannel: true, interruptsMovementChannel: false, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY", endsIfCasterDies: true },
  BERSERK:     { interruptsChannel: true, interruptsMovementChannel: false, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY", endsIfCasterDies: false },
  SILENCE:     { interruptsChannel: true, interruptsMovementChannel: false, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY" },
  POLYMORPH:   { interruptsChannel: true, interruptsMovementChannel: false, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY" },
  SUPPRESS:    { interruptsChannel: true, interruptsMovementChannel: false, interruptsDash: false, blocksMovementSpells: true, blocksAllSpells: true, tenacity: false, removal: "QSS_ONLY" },
  DISRUPT:     { interruptsChannel: true, interruptsMovementChannel: false, interruptsDash: false, blocksMovementSpells: false, blocksAllSpells: false, tenacity: "NOT_APPLICABLE", removal: "NOT_APPLICABLE", note: { ko: "상태 효과가 아닌 순간 효과", en: "Not a status effect, an instant effect" } },
  BLIND:       { interruptsChannel: false, interruptsMovementChannel: false, interruptsDash: false, blocksMovementSpells: false, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY" },
  CRIPPLE:     { interruptsChannel: false, interruptsMovementChannel: false, interruptsDash: false, blocksMovementSpells: false, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY" },
  DISARM:      { interruptsChannel: false, interruptsMovementChannel: false, interruptsDash: false, blocksMovementSpells: false, blocksAllSpells: false, tenacity: true, removal: "CLEANSE_FAMILY" },
  KINEMATICS:  { interruptsChannel: false, interruptsMovementChannel: false, interruptsDash: false, blocksMovementSpells: false, blocksAllSpells: false, tenacity: false, removal: "NONE" },
  NEAR_SIGHT:  { interruptsChannel: false, interruptsMovementChannel: false, interruptsDash: false, blocksMovementSpells: false, blocksAllSpells: false, tenacity: false, removal: "QSS_ONLY", note: { ko: "정화 스펠 제외, QSS 계열로는 해제 가능", en: "Not removed by Cleanse spell, but removable via QSS-family effects" } },
};

// CC_INTERACTIONS 중 일반 채널링/충전형 스킬을 끊을 수 있는(interruptsChannel: true)
// 태그만 뽑아낸 파생 데이터. [[SKILL_CHANNEL]]/[[SKILL_CHARGED]] 태그 툴팁의
// "방해 가능" 목록에 쓰인다. CC_INTERACTIONS 값이 바뀌면 자동으로 같이 갱신된다.
export const CHANNEL_INTERRUPTED_BY: TagId[] = (
  Object.entries(CC_INTERACTIONS) as [TagId, CCInteraction][]
).filter(([, info]) => info.interruptsChannel === true).map(([key]) => key);

// CC_INTERACTIONS 중 일반 채널링을 끊거나(interruptsChannel: true) 이동형
// 채널링을 끊는(interruptsMovementChannel: true) 태그를 합친 파생 데이터
// (중복 없음, 등록 순서 유지). "일반 채널을 끊는 CC 전체 + Root/Grounded"가
// 되며, [[SKILL_CHANNEL_MOVEMENT]] 태그 툴팁의 "방해 가능" 목록에 쓰인다.
export const MOVEMENT_CHANNEL_INTERRUPTED_BY: TagId[] = (
  Object.entries(CC_INTERACTIONS) as [TagId, CCInteraction][]
).filter(([, info]) => info.interruptsChannel === true || info.interruptsMovementChannel === true).map(([key]) => key);

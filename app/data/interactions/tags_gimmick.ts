// 기믹 전용 태그 시스템
// 태그 추가 시 tagTone.ts에도 색상 등록 필요

export type GimmickTagId =
  // 스킬 형태
  | "SKILL_ACTIVE"
  | "SKILL_CHANNEL"
  | "SKILL_TOGGLE"
  | "SKILL_CHARGED"
  // 타이밍
  | "TIMING_INSTANT"
  | "TIMING_CAST"
  | "TIMING_AFTERCAST"
  // 중단 여부
  | "CANCELLABLE"
  | "LOCKED"
  // 판정 방식
  | "PROJECTILE"
  | "NON_PROJECTILE"
  | "ZONE"
  // 속성
  | "CHAIN"
  | "PASSIVE_BONUS"
  | "SKILL_RECAST";

export const GIMMICK_TAG_LABEL: Record<GimmickTagId, { ko: string; en: string }> = {
  // 스킬 형태
  SKILL_ACTIVE:  { ko: "액티브",  en: "Active"   },
  SKILL_CHANNEL: { ko: "채널링",  en: "Channel"  },
  SKILL_TOGGLE:  { ko: "토글",    en: "Toggle"   },
  SKILL_CHARGED: { ko: "차징",    en: "Charged"  },
  // 타이밍
  TIMING_INSTANT:   { ko: "즉발",  en: "Instant"    },
  TIMING_CAST:      { ko: "선딜",  en: "Cast Time"  },
  TIMING_AFTERCAST: { ko: "후딜",  en: "Aftercast"  },
  // 중단 여부
  CANCELLABLE: { ko: "중단 가능", en: "Cancellable" },
  LOCKED:      { ko: "중단 불가", en: "Locked"      },
  // 판정 방식
  PROJECTILE:     { ko: "투사체",   en: "Projectile"     },
  NON_PROJECTILE: { ko: "비투사체", en: "Non-Projectile"  },
  ZONE:           { ko: "장판",     en: "Zone"           },
  // 속성
  CHAIN:         { ko: "연쇄",         en: "Chain"         },
  PASSIVE_BONUS: { ko: "기본지속효과", en: "Passive Bonus"  },
  SKILL_RECAST:  { ko: "재시전",       en: "Recast"        },
};

export const GIMMICK_TAG_DESC: Partial<Record<GimmickTagId, { ko: string; en: string }>> = {
  // 스킬 형태
  SKILL_ACTIVE: {
    ko: "버튼 한 번으로 즉시 발동되는 스킬",
    en: "Ability that activates immediately on a single press",
  },
  SKILL_CHANNEL: {
    ko: "버튼을 누르면 지속적으로 유지되는 스킬\nCC에 맞으면 중단됨 (중단 불가 제외)",
    en: "Ability that persists after activation\nInterrupted by CC unless uninterruptible",
  },
  SKILL_TOGGLE: {
    ko: "버튼을 눌러 켜고 끄는 방식\nCC에 걸리면 끌 수 없음",
    en: "Ability toggled on and off\nCannot be deactivated while CC'd",
  },
  SKILL_CHARGED: {
    ko: "누르고 있을수록 효과가 강해지는 충전형 스킬\n충전 중 이동 가능",
    en: "Charges up while held\nCaster can move while charging",
  },
  // 타이밍
  TIMING_INSTANT: {
    ko: "누르면 즉시 발동",
    en: "Activates immediately on cast",
  },
  TIMING_CAST: {
    ko: "시전 후 발동까지 선딜레이가 있음",
    en: "Has a cast time before the ability takes effect",
  },
  TIMING_AFTERCAST: {
    ko: "발동 후 다음 행동까지 후딜레이가 긴 스킬",
    en: "Notable delay after the ability fires before the next action",
  },
  // 중단 여부
  CANCELLABLE: {
    ko: "시전 중 직접 중단할 수 있음",
    en: "Can be manually cancelled during cast",
  },
  LOCKED: {
    ko: "시전 중 직접 중단할 수 없음\n끝까지 완료되어야 함",
    en: "Cannot be manually cancelled\nMust complete fully",
  },
  // 판정 방식
  PROJECTILE: {
    ko: "날아가는 투사체가 존재함\n야스오 장막 등에 막힘",
    en: "A projectile travels to the target\nCan be blocked by Wind Wall etc.",
  },
  NON_PROJECTILE: {
    ko: "외형상 투사체처럼 보이지만 실제로는 투사체가 아님\n야스오 장막에 막히지 않음",
    en: "Appears to be a projectile but is not\nCannot be blocked by Wind Wall etc.",
  },
  ZONE: {
    ko: "시전자와 분리되어 특정 위치에 독립적으로 존재하는 효과",
    en: "An effect that exists independently at a fixed location, separate from the caster",
  },
  // 속성
  CHAIN: {
    ko: "조건 충족 시 추가 투사체 또는 효과가 연쇄 생성됨",
    en: "Generates additional projectiles or effects when a condition is met",
  },
  PASSIVE_BONUS: {
    ko: "스킬을 찍으면 별도의 기본 지속 효과가 추가됨",
    en: "Leveling this ability grants an additional persistent passive effect",
  },
  SKILL_RECAST: {
    ko: "쿨타임이 돌기 전에 스킬을 다시 사용할 수 있음",
    en: "The ability can be used again before its cooldown begins",
  },
};

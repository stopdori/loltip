// 기믹 전용 태그 시스템
// 나중에 GimmickTagId에 태그를 추가하면 TAG_TONE(tagTone.ts)에도 색상을 등록해줘

export type GimmickTagId =
  // 스킬 형태
  | "SKILL_ACTIVE"
  | "SKILL_TOGGLE"
  | "SKILL_CHANNEL"
  | "SKILL_CHARGED"
  | "SKILL_RECAST"
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
  // 피해 범위
  | "SINGLE"
  | "PIERCE"
  | "AOE"
  | "GLOBAL"
  | "SUMMON"
  // 피해 종류
  | "DMG_PHYSICAL"
  | "DMG_MAGIC"
  | "DMG_TRUE";

export const GIMMICK_TAG_LABEL: Record<GimmickTagId, { ko: string; en: string }> = {
  // 스킬 형태
  SKILL_ACTIVE:  { ko: "액티브",  en: "Active"  },
  SKILL_TOGGLE:  { ko: "토글",    en: "Toggle"  },
  SKILL_CHANNEL: { ko: "채널링",  en: "Channel" },
  SKILL_CHARGED: { ko: "차징",    en: "Charged" },
  SKILL_RECAST:  { ko: "재시전",  en: "Recast"  },
  // 타이밍
  TIMING_INSTANT:   { ko: "즉발",     en: "Instant"    },
  TIMING_CAST:      { ko: "시전",     en: "Cast"       },
  TIMING_AFTERCAST: { ko: "후딜",     en: "After-cast" },
  // 중단 여부
  CANCELLABLE: { ko: "취소 가능", en: "Cancellable" },
  LOCKED:      { ko: "취소 불가", en: "Locked"      },
  // 판정 방식
  PROJECTILE:     { ko: "투사체",    en: "Projectile"     },
  NON_PROJECTILE: { ko: "비투사체",  en: "Non-projectile" },
  ZONE:           { ko: "장판",      en: "Zone"           },
  // 속성
  CHAIN:         { ko: "연쇄",     en: "Chain"         },
  PASSIVE_BONUS: { ko: "패시브",   en: "Passive Bonus" },
  // 피해 범위
  SINGLE:  { ko: "단일",   en: "Single Target"   },
  PIERCE:  { ko: "관통",   en: "Pierce"          },
  AOE:     { ko: "범위",   en: "Area of Effect"  },
  GLOBAL:  { ko: "전체맵", en: "Global"          },
  SUMMON:  { ko: "소환",   en: "Summon"          },
  // 피해 종류
  DMG_PHYSICAL: { ko: "물리피해", en: "Physical Damage" },
  DMG_MAGIC:    { ko: "마법피해", en: "Magic Damage"    },
  DMG_TRUE:     { ko: "고정피해", en: "True Damage"     },
};

export const GIMMICK_TAG_DESC: Partial<Record<GimmickTagId, { ko: string; en: string }>> = {
  SKILL_ACTIVE:     { ko: "버튼 한 번으로 발동되는 스킬", en: "Ability that activates immediately on a single press" },
  SKILL_CHANNEL:    { ko: "버튼을 누르면 지속적으로 유지되는 스킬\nCC에 맞으면 중단됨 (중단 불가 제외)", en: "Ability that persists after activation\nInterrupted by CC unless uninterruptible" },
  SKILL_TOGGLE:     { ko: "버튼을 눌러 켜고 끄는 방식\nCC에 걸리면 끌 수 없음", en: "Ability toggled on and off\nCannot be deactivated while CC'd" },
  SKILL_CHARGED:    { ko: "누르고 있어야 효과가 증가하거나 발동하는 스킬", en: "Charges up while held\nCaster can move while charging" },
  SKILL_RECAST:     { ko: "쿨타임이 돌기 전에 스킬을 다시 사용할 수 있음", en: "The ability can be used again before its cooldown begins" },
  TIMING_INSTANT:   { ko: "누르면 즉시 발동", en: "Activates immediately on cast" },
  TIMING_CAST:      { ko: "시전 후 발동까지 선딜레이가 있음", en: "Has a cast time before the ability takes effect" },
  TIMING_AFTERCAST: { ko: "발동 후 다음 행동까지 후딜레이가 긴 스킬", en: "Notable delay after the ability fires before the next action" },
  CANCELLABLE:      { ko: "시전 중 직접 중단할 수 있음", en: "Can be manually cancelled during cast" },
  LOCKED:           { ko: "시전 중 직접 중단할 수 없음\n끝까지 완료되어야 함", en: "Cannot be manually cancelled\nMust complete fully" },
  PROJECTILE:       { ko: "날아가는 투사체가 존재함\n야스오 장막 등에 막힘", en: "A projectile travels to the target\nCan be blocked by Wind Wall etc." },
  NON_PROJECTILE:   { ko: "외형상 투사체처럼 보이지만 실제로는 투사체가 아님\n야스오 장막에 막히지 않음", en: "Appears to be a projectile but is not\nCannot be blocked by Wind Wall etc." },
  ZONE:             { ko: "시전자와 분리되어 특정 위치에 독립적으로 존재하는 효과", en: "An effect that exists independently at a fixed location, separate from the caster" },
  CHAIN:            { ko: "조건 충족 시 추가 투사체 또는 효과가 연쇄 생성됨", en: "Generates additional projectiles or effects when a condition is met" },
  PASSIVE_BONUS:    { ko: "스킬을 찍으면 별도의 기본 지속 효과가 추가됨", en: "Leveling this ability grants an additional persistent passive effect" },
  // 피해 범위
  SINGLE:      { ko: "단일 대상에게만 적용되는 스킬", en: "Affects only a single target" },
  PIERCE:      { ko: "투사체가 대상을 관통하여 뒤의 적에게도 적중", en: "Projectile passes through targets" },
  AOE:         { ko: "특정 범위 내 여러 대상에게 적용", en: "Affects multiple targets within an area" },
  GLOBAL:      { ko: "맵 전체 또는 모든 적에게 적용", en: "Affects all enemies or the entire map" },
  SUMMON:      { ko: "유닛을 소환하는 스킬", en: "Summons a unit to assist in combat" },
  // 피해 종류
  DMG_PHYSICAL: { ko: "방어력에 의해 감소되는 피해", en: "Damage mitigated by armor" },
  DMG_MAGIC:    { ko: "마법 저항력에 의해 감소되는 피해", en: "Damage mitigated by magic resistance" },
  DMG_TRUE:     { ko: "저항력에 감소되지 않는 피해\n단, 실드와 무적에는 막힘", en: "Ignores resistances\nStill blocked by shields and invulnerability" },
};

// app/data/interactions/statIcons.ts
//
// 일부 스탯 관련 태그(TagId/GimmickTagId)에 대해, 텍스트 pill 대신
// 아이콘 이미지로 보여주기 위한 매핑. 여기 없는 태그는 기존처럼
// 텍스트 그대로 렌더링된다 (TagPill의 icons prop이 없을 때 동작).
//
// ⚠️ 이 파일은 수동 매핑이라 tags.ts / tags_gimmick.ts와 자동 동기화되지
//    않는다. 태그를 삭제/변경할 때 여기도 같이 확인할 것.

import type { TagId } from "./tags";
import type { GimmickTagId } from "./tags_gimmick";

export type StatIconEntry = {
  /** "/stat-icons/icon-xxx.png" 형식의 정적 파일 경로 배열. 순서대로 텍스트 앞에 나란히 표시된다 */
  icons: string[];
  /** 있으면 아이콘 옆에 ↑ 또는 ↓ 화살표를 함께 표시 */
  direction?: "up" | "down";
  /** 아이콘 렌더링 크기(px). 없으면 기본 14px로 렌더링된다 */
  size?: number;
};

export const STAT_ICONS: Partial<Record<TagId | GimmickTagId, StatIconEntry>> = {
  AD_UP: { icons: ["/stat-icons/icon-ad.png"] },
  AD_DOWN: { icons: ["/stat-icons/icon-ad.png"] },
  AP_UP: { icons: ["/stat-icons/icon-ap.png"] },
  // "능력치 비례" gimmick 태그 — 원본 스탯 태그(AD_UP/AP_UP)와 같은 아이콘 재사용
  AD_SCALE: { icons: ["/stat-icons/icon-ad.png"] },
  AP_SCALE: { icons: ["/stat-icons/icon-ap.png"] },
  AS_SCALE: { icons: ["/stat-icons/icon-as.png"] },
  MS_SCALE: { icons: ["/stat-icons/icon-ms.png"] },
  HP_SCALE: { icons: ["/stat-icons/icon-hp.png"] },
  MANA_SCALE: { icons: ["/stat-icons/icon-manaregen.png"] },
  ENERGY_SCALE: { icons: ["/stat-icons/icon-energyregen.png"] },
  MS_UP: { icons: ["/stat-icons/icon-ms.png"] },
  MS_DOWN: { icons: ["/stat-icons/icon-ms.png"] },
  MS_TO_ENEMY: { icons: ["/stat-icons/icon-ms.png"] },
  AS_UP: { icons: ["/stat-icons/icon-as.png"] },
  CRIT: { icons: ["/stat-icons/icon-crit.png"] },
  AR_UP: { icons: ["/stat-icons/icon-armor.png"] },
  AR_SHRED: { icons: ["/stat-icons/icon-armorshred.png"] },
  MR_UP: { icons: ["/stat-icons/icon-mr.png"] },
  MR_SHRED: { icons: ["/stat-icons/icon-magicshred.png"] },
  AR_MR_UP: { icons: ["/stat-icons/icon-armor.png", "/stat-icons/icon-mr.png"] },
  AR_MR_SHRED: { icons: ["/stat-icons/icon-armorshred.png", "/stat-icons/icon-magicshred.png"] },
  AR_PEN: { icons: ["/stat-icons/icon-armorshred.png"] },
  MR_PEN: { icons: ["/stat-icons/icon-magicshred.png"] },
  AR_MR_PEN: { icons: ["/stat-icons/icon-armorshred.png", "/stat-icons/icon-magicshred.png"] },
  MAX_HP_UP: { icons: ["/stat-icons/icon-hp.png"] },
  // "체력 비례" gimmick 태그 중 자신 최대/추가 체력 비례 2개만 MAX_HP_UP과
  // 같은 체력 아이콘을 재사용(GimmickTagId). 나머지 4개(자신 잃은/대상 3종)는
  // 아이콘 없이 텍스트 pill로만 표시.
  SELF_MAXHP_SCALE: { icons: ["/stat-icons/icon-hp.png"] },
  SELF_BONUS_HP_SCALE: { icons: ["/stat-icons/icon-hp.png"] },
  HP_REGEN_UP: { icons: ["/stat-icons/icon-hpregen.png"] },
  HS_POWER: { icons: ["/stat-icons/icon-hpregen.png"] },
  MANA_RESTORE: { icons: ["/stat-icons/icon-manaregen.png"] },
  ENERGY_RESTORE: { icons: ["/stat-icons/icon-energyregen.png"] },
  MAX_ENERGY_UP: { icons: ["/stat-icons/icon-energyregen.png"] },
  LIFESTEAL: { icons: ["/stat-icons/icon-lifesteal.png"] },
  OMNIVAMP: { icons: ["/stat-icons/icon-omnivamp.png"] },
  TENACITY: { icons: ["/stat-icons/icon-tenacity.png"] },
  RANGE_UP: { icons: ["/stat-icons/icon-range.png"] },
  CDR: { icons: ["/stat-icons/icon-haste.png"] },
  CDR_RESET: { icons: ["/stat-icons/icon-haste.png"] },
  ON_HIT: { icons: ["/stat-icons/icon-onhit.png"] }, // GimmickTagId

  // CC(군중제어) 상태 아이콘
  STUN: { icons: ["/cc-icons/icon-stun.png"] },
  SLOW: { icons: ["/stat-icons/icon-ms.png"] },
  CRIPPLE: { icons: ["/stat-icons/icon-as.png"] },
  SILENCE: { icons: ["/cc-icons/icon-polymorph-silence.png"] },
  DISRUPT: { icons: ["/cc-icons/icon-polymorph-silence.png"] },
  SUPPRESS: { icons: ["/cc-icons/icon-suppress.png"] },
  FEAR: { icons: ["/cc-icons/icon-fear.png"] },
  DISARM: { icons: ["/cc-icons/icon-disarm.png"] },
  AIRBORNE: { icons: ["/cc-icons/icon-airborne.png"] },
  SUSPENDING: { icons: ["/cc-icons/icon-airborne.png"] },
  GRAB: { icons: ["/cc-icons/icon-airborne.png"] },
  KNOCKBACK: { icons: ["/cc-icons/icon-airborne.png"] },
  // AIRBORNE 아이콘을 상하 반전한 정적 이미지 파일을 그대로 재사용
  KNOCKDOWN: { icons: ["/cc-icons/icon-knockdown.png"] },
  BLIND: { icons: ["/cc-icons/icon-blind-nearsight.png"] },
  NEAR_SIGHT: { icons: ["/cc-icons/icon-blind-nearsight.png"] },
  CHARM: { icons: ["/cc-icons/icon-charm.png"] },
  BERSERK: { icons: ["/cc-icons/icon-berserk-taunt.png"] },
  TAUNT: { icons: ["/cc-icons/icon-berserk-taunt.png"] },
  ROOT: { icons: ["/cc-icons/icon-root-grounded.png"] },
  GROUNDED: { icons: ["/cc-icons/icon-grounded.png"] },
  CC_IMMUNE: { icons: ["/cc-icons/icon-ccimmune-unstoppable.png"] },
  UNSTOPPABLE: { icons: ["/cc-icons/icon-ccimmune-unstoppable.png"] },
  CC_CLEANSE: { icons: ["/cc-icons/icon-cccleanse.png"] },
  DROWSY: { icons: ["/cc-icons/icon-drowsy.png"] },
  SLEEP: { icons: ["/cc-icons/icon-sleep.png"] },
  STASIS: { icons: ["/cc-icons/icon-stasis.png"] },
  KINEMATICS: { icons: ["/cc-icons/icon-kinematics.png"] },
  FORCED_ACTION: { icons: ["/cc-icons/icon-forcedaction.png"] },
  SKILL_CHANNEL: { icons: ["/cc-icons/icon-channel.png"] }, // GimmickTagId
};

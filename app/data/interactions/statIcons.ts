// app/data/interactions/statIcons.ts
//
// 일부 스탯 관련 태그(TagId/GimmickTagId)에 대해, 텍스트 pill 대신
// 아이콘 이미지로 보여주기 위한 매핑. 여기 없는 태그는 기존처럼
// 텍스트 그대로 렌더링된다 (TagPill의 icon prop이 없을 때 동작).
//
// ⚠️ 이 파일은 수동 매핑이라 tags.ts / tags_gimmick.ts와 자동 동기화되지
//    않는다. 태그를 삭제/변경할 때 여기도 같이 확인할 것.

import type { TagId } from "./tags";
import type { GimmickTagId } from "./tags_gimmick";

export type StatIconEntry = {
  /** "/stat-icons/icon-xxx.png" 형식의 정적 파일 경로 */
  icon: string;
  /** 있으면 아이콘 옆에 ↑ 또는 ↓ 화살표를 함께 표시 */
  direction?: "up" | "down";
};

export const STAT_ICONS: Partial<Record<TagId | GimmickTagId, StatIconEntry>> = {
  AD_UP: { icon: "/stat-icons/icon-ad.png", direction: "up" },
  AD_DOWN: { icon: "/stat-icons/icon-ad.png", direction: "down" },
  AP_UP: { icon: "/stat-icons/icon-ap.png", direction: "up" },
  MS_UP: { icon: "/stat-icons/icon-ms.png", direction: "up" },
  MS_DOWN: { icon: "/stat-icons/icon-ms.png", direction: "down" },
  AS_UP: { icon: "/stat-icons/icon-as.png", direction: "up" },
  CRIT: { icon: "/stat-icons/icon-crit.png" },
  AR_UP: { icon: "/stat-icons/icon-armor.png", direction: "up" },
  AR_SHRED: { icon: "/stat-icons/icon-armorshred.png" },
  MR_UP: { icon: "/stat-icons/icon-mr.png", direction: "up" },
  MR_SHRED: { icon: "/stat-icons/icon-magicshred.png" },
  AR_MR_UP: { icon: "/stat-icons/icon-armor.png", direction: "up" },
  MAX_HP_UP: { icon: "/stat-icons/icon-hp.png", direction: "up" },
  HP_REGEN: { icon: "/stat-icons/icon-hpregen.png" },
  HP_REGEN_UP: { icon: "/stat-icons/icon-hpregen.png", direction: "up" },
  MANA_RESTORE: { icon: "/stat-icons/icon-manaregen.png" },
  LIFESTEAL: { icon: "/stat-icons/icon-lifesteal.png" },
  OMNIVAMP: { icon: "/stat-icons/icon-omnivamp.png" },
  TENACITY: { icon: "/stat-icons/icon-tenacity.png" },
  RANGE_UP: { icon: "/stat-icons/icon-range.png", direction: "up" },
  CDR: { icon: "/stat-icons/icon-haste.png" },
  ON_HIT: { icon: "/stat-icons/icon-onhit.png" }, // GimmickTagId

  // CC(군중제어) 상태 아이콘
  STUN: { icon: "/cc-icons/icon-stun.png" },
  SILENCE: { icon: "/cc-icons/icon-polymorph-silence.png" },
  POLYMORPH: { icon: "/cc-icons/icon-polymorph-silence.png" },
  DISRUPT: { icon: "/cc-icons/icon-polymorph-silence.png" },
  SUPPRESS: { icon: "/cc-icons/icon-suppress.png" },
  FEAR: { icon: "/cc-icons/icon-fear.png" },
  DISARM: { icon: "/cc-icons/icon-disarm.png" },
  AIRBORNE: { icon: "/cc-icons/icon-airborne.png" },
  BLIND: { icon: "/cc-icons/icon-blind-nearsight.png" },
  NEAR_SIGHT: { icon: "/cc-icons/icon-blind-nearsight.png" },
  CHARM: { icon: "/cc-icons/icon-charm.png" },
  BERSERK: { icon: "/cc-icons/icon-berserk-taunt.png" },
  TAUNT: { icon: "/cc-icons/icon-berserk-taunt.png" },
  ROOT: { icon: "/cc-icons/icon-root-grounded.png" },
  GROUNDED: { icon: "/cc-icons/icon-root-grounded.png" },
  CC_IMMUNE: { icon: "/cc-icons/icon-ccimmune-unstoppable.png" },
  UNSTOPPABLE: { icon: "/cc-icons/icon-ccimmune-unstoppable.png" },
  SLOW_IMMUNE: { icon: "/cc-icons/icon-slow-immune.png" },
  DROWSY: { icon: "/cc-icons/icon-drowsy.png" },
  SLEEP: { icon: "/cc-icons/icon-sleep.png" },
  SKILL_CHANNEL: { icon: "/cc-icons/icon-channel.png" }, // GimmickTagId
  // FORCED_ACTION은 개별 상태가 아니라 상위 분류 개념이라 아이콘 매핑 없음(텍스트로만 표시)
};

// app/data/interactions/tagCategories.ts
//
// /tags 페이지(태그 레퍼런스)에서 쓰는 카테고리(소제목) 메타데이터.
// 실제 라벨/설명 텍스트는 여전히 TAG_LABEL/TAG_DESC/GIMMICK_TAG_LABEL/
// GIMMICK_TAG_DESC에서 가져오고, 여기서는 "어떤 태그가 어느 소제목 아래
// 나열되는지"만 정의한다.
//
// ⚠️ tags.ts / tags_gimmick.ts에 태그를 추가·삭제·재분류하면
//    이 파일도 같이 갱신해야 한다 (자동 동기화 없음).
//    TagsClient.tsx의 개발 모드 체크가 여기 빠진 키/사라진 키를
//    console.warn으로 알려준다.

import type { TagId } from "./tags";
import type { GimmickTagId } from "./tags_gimmick";

export type CategoryGroup<T extends string> = {
  title: { ko: string; en: string };
  keys: T[];
};

// tags.ts의 TagId 유니언/TAG_LABEL/TAG_DESC에 실제로 있는 10개 카테고리
// 순서 그대로. (tags.ts를 카테고리별로 재배치한 커밋의 주석 구획과 동일)
export const TAG_CATEGORIES: CategoryGroup<TagId>[] = [
  {
    title: { ko: "1) 스탯 버프", en: "1) Stat Buffs" },
    keys: ["MS_UP", "MS_TO_ENEMY", "AS_UP", "AD_UP", "AP_UP", "RANGE_UP", "SIZE_UP", "SKILL_SIZE_UP", "CRIT", "CDR", "CDR_RESET", "DURATION_RESET", "DURATION_EXT", "AR_UP", "MR_UP", "AR_MR_UP"],
  },
  {
    title: { ko: "2) 스탯 디버프", en: "2) Stat Debuffs" },
    keys: ["MS_DOWN", "AD_DOWN", "AR_SHRED", "MR_SHRED", "AR_MR_SHRED", "AR_PEN", "MR_PEN", "AR_MR_PEN", "GW", "BURN"],
  },
  {
    title: { ko: "3) 군중제어 / CC", en: "3) Crowd Control" },
    keys: ["STUN", "ROOT", "SLOW", "TAUNT", "SLEEP", "DROWSY", "KNOCKBACK", "AIRBORNE", "SUSPENDING", "GRAB", "CHARM", "SILENCE", "FEAR", "BERSERK", "NEAR_SIGHT", "BLIND", "POLYMORPH", "SUPPRESS", "IMMOBILIZING", "CRIPPLE", "DISARM", "TENACITY", "CC_IMMUNE", "CC_CLEANSE", "SLOW_RESIST", "SLOW_IMMUNE", "SLOW_CLEANSE", "DISRUPT", "GROUNDED", "ANTI_DASH", "KINEMATICS"],
  },
  {
    title: { ko: "4) 전투 메커니즘", en: "4) Combat Mechanics" },
    keys: ["AA_RESET", "UNTARGETABLE", "TOWER_DODGE", "DODGE", "EXECUTE", "SHIELD_BREAK", "SHIELD_PIERCE", "BLOCKED", "REFLECT", "WINDSHIELD", "SPELL_SHIELD", "DAMAGE_NULLIFY", "INTERCEPT_PROJECTILE"],
  },
  {
    title: { ko: "5) 생존 / 방어", en: "5) Survival / Defense" },
    keys: ["INVULNERABLE", "REVIVE", "DMG_REDUCE", "MAGIC_DR", "STASIS", "UNSTOPPABLE", "BANISH"],
  },
  {
    title: { ko: "6) 시야 / 은신", en: "6) Vision / Stealth" },
    keys: ["VISION", "REVEALED", "TRUE_SIGHT", "POSITION_REVEAL", "POSITION_INDICATOR", "POSITION_SOUND", "POSITION_EFFECT", "POSITION_EFFECT_SOUND", "HIT_SOUND", "HIT_EFFECT", "HIT_EFFECT_SOUND", "HIT_INDICATOR", "STEALTH", "INVISIBILITY", "CAMOUFLAGE"],
  },
  {
    title: { ko: "7) 회복 / 자원", en: "7) Healing / Resources" },
    keys: ["HEAL", "HP_REGEN", "HP_REGEN_UP", "SHIELD", "MAX_HP_UP", "HS_POWER", "LIFESTEAL", "OMNIVAMP", "MANA_RESTORE", "ENERGY_RESTORE"],
  },
  {
    title: { ko: "8) 이동 / 위치 / 상호작용", en: "8) Movement / Position / Interaction" },
    keys: ["ALLY_TP_OK", "WALL_HOP", "GHOSTING", "TERRAIN", "MARK", "TETHER"],
  },
  {
    title: { ko: "9) 특수 / 변신", en: "9) Special / Transform" },
    keys: ["BUFF_FORM", "TRANSFORM", "EVOLVED", "THE_COPYPASTA"],
  },
  {
    title: { ko: "10) 점멸 연계", en: "10) Flash Combos" },
    keys: ["Q_FLASH", "W_FLASH", "E_FLASH", "R_FLASH", "INSEC_KICK"],
  },
];

// "시야·은신" 탭에서 그대로 재사용하는 카테고리 (TAG_CATEGORIES[5]와 동일 배열,
// 별도 정의 아님 — 표시 위치만 다르게 쓰기 위한 참조).
export const VISION_STEALTH_CATEGORY: CategoryGroup<TagId> = TAG_CATEGORIES[5];

// tags_gimmick.ts의 GIMMICK_TAG_LABEL 안에 실제로 있는 주석 구획 기준.
// (union 타입과 LABEL 객체의 구획이 서로 달라서 LABEL 객체 기준으로 정리함)
// SKILL_RECAST는 "스킬 방식을 설명하는 태그"로 SKILL_CHANNEL 등과 함께 묶음.
export const GIMMICK_CATEGORIES: CategoryGroup<GimmickTagId>[] = [
  {
    title: { ko: "1) 스킬 형태", en: "1) Skill Form" },
    keys: ["SKILL_ACTIVE", "SKILL_TOGGLE", "SKILL_CHANNEL", "SKILL_CHARGED", "SKILL_VECTOR", "SKILL_STEERABLE", "SKILL_RECAST"],
  },
  {
    title: { ko: "2) 기타 (상태 / 자원)", en: "2) Misc (State / Resource)" },
    keys: ["BUFF", "DEBUFF", "COOLDOWN", "ON_TARGET_CD", "EMPOWERED", "RECHARGE", "STACKING", "PROC", "BUFF_STACK", "DEBUFF_STACK", "STACK_CONSUME"],
  },
  {
    title: { ko: "3) 타이밍", en: "3) Timing" },
    keys: ["TIMING_INSTANT", "TIMING_CAST", "TIMING_AFTERCAST", "ST_IMPACT", "ST_DELAYED", "ST_CONDITIONAL"],
  },
  {
    title: { ko: "4) 중단 여부", en: "4) Interruptibility" },
    keys: ["CANCELLABLE", "LOCKED"],
  },
  {
    title: { ko: "5) 판정 방식", en: "5) Targeting" },
    keys: ["TARGETED", "NON_TARGETED", "TARGET_ALLY", "TARGET_ENEMY", "TARGET_BOTH", "PROJECTILE", "NON_PROJECTILE", "ZONE", "TRAP"],
  },
  {
    title: { ko: "6) 속성 / 상호작용", en: "6) Attributes / Interaction" },
    keys: ["CHAIN", "PASSIVE_BONUS", "PASSIVE_INTERACT", "BUFF_INTERACT", "DEBUFF_INTERACT", "MARK_INTERACT", "MARK_CONSUME"],
  },
  {
    title: { ko: "7) 스킬 키", en: "7) Skill Keys" },
    keys: ["P", "Q", "W", "E", "R", "BA", "HOMING", "BEAM"],
  },
  {
    title: { ko: "8) 피해 범위", en: "8) Damage Range" },
    keys: ["SINGLE", "PIERCE", "PIERCE_MINION", "PIERCE_ONCE", "AOE", "AURA", "GLOBAL", "SUMMON", "DROP", "X1.5", "X2", "X3", "X4", "X5", "XN", "CLONE", "SWARM", "VOLLEY", "VOLLEY_OVERLAP"],
  },
  {
    title: { ko: "9) 피해 종류", en: "9) Damage Type" },
    keys: ["DMG_PHYSICAL", "DMG_MAGIC", "DMG_TRUE", "DOT_DMG_TRUE", "DOT", "ON_HIT"],
  },
  {
    title: { ko: "10) 시전 행동", en: "10) Cast Behavior" },
    keys: ["CAST_COMMIT", "CAST_CANCEL", "CAST_MOVE", "CAST_IMMOBILE", "CC_BUFFER"],
  },
  {
    title: { ko: "11) 이동", en: "11) Movement" },
    keys: ["MOBILITY", "DASH", "BLINK", "SEPARATOR", "SEPARATOR_NEWLINE"],
  },
];

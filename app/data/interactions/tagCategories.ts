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
  // 카드 안에서 태그를 줄 단위로 더 세분해서 보여주고 싶을 때만 채운다.
  // 채우면 keys 전체를 이 줄들로 나눠 그린다 (subGroups의 합집합은 keys와 일치해야 함,
  // 단 SEPARATOR/SEPARATOR_NEWLINE은 화면 구분선용이라 이 합집합 비교에서 제외됨).
  // title이 있는 줄은 그 줄 위에 작은 소제목을 표시하고, 없으면 소제목 없이 태그만 나열한다.
  // keys 안에는 T 외에 "SEPARATOR"/"SEPARATOR_NEWLINE"도 섞어 쓸 수 있다(줄 안에서
  // 시각적 구분선을 넣고 싶을 때만). 최상위 keys 필드에는 이 두 값을 넣지 않는다.
  subGroups?: { title?: { ko: string; en: string }; keys: (T | "SEPARATOR" | "SEPARATOR_NEWLINE")[] }[];
};

// tags.ts의 TagId 유니언/TAG_LABEL/TAG_DESC에 실제로 있는 10개 카테고리
// 순서 그대로. (tags.ts를 카테고리별로 재배치한 커밋의 주석 구획과 동일)
export const TAG_CATEGORIES: CategoryGroup<TagId>[] = [
  {
    title: { ko: "1) 스탯", en: "1) Stats" },
    keys: ["MS_UP", "MS_TO_ENEMY", "AS_UP", "AD_UP", "AP_UP", "AD_DOWN", "MS_DOWN", "RANGE_UP", "SIZE_UP", "SKILL_SIZE_UP", "CRIT", "CDR", "CDR_RESET", "DURATION_RESET", "DURATION_EXT", "AR_UP", "MR_UP", "AR_MR_UP", "AR_SHRED", "MR_SHRED", "AR_MR_SHRED", "AR_PEN", "MR_PEN", "AR_MR_PEN", "GW", "TENACITY", "HEAL", "HP_REGEN", "HP_REGEN_UP", "SHIELD", "MAX_HP_UP", "HS_POWER", "LIFESTEAL", "OMNIVAMP", "MANA_RESTORE", "ENERGY_RESTORE"],
    subGroups: [
      { title: { ko: "공격", en: "Attack" }, keys: ["AD_UP", "AP_UP", "CRIT"] },
      { keys: ["AS_UP", "MS_UP", "MS_TO_ENEMY", "SEPARATOR", "AD_DOWN", "MS_DOWN"] },
      { title: { ko: "크기", en: "Size" }, keys: ["RANGE_UP", "SIZE_UP", "SKILL_SIZE_UP"] },
      { title: { ko: "체력 / 쉴드", en: "" }, keys: ["MAX_HP_UP", "HEAL", "SHIELD", "HP_REGEN", "REVIVE"] },
      { keys: ["HS_POWER", "HP_REGEN_UP", "SEPARATOR", "GW"] },
      { title: { ko: "흡혈 / 자원회복", en: "Vamp / Resource Restore" }, keys: ["LIFESTEAL", "OMNIVAMP", "MANA_RESTORE", "ENERGY_RESTORE"] },
      { title: { ko: "방어 / 마저", en: "" }, keys: ["AR_UP", "MR_UP", "AR_MR_UP", "SEPARATOR", "TENACITY"] },
      { keys: ["AR_SHRED", "MR_SHRED", "AR_MR_SHRED"] }, 
      { keys: ["AR_PEN", "MR_PEN", "AR_MR_PEN"] },
      { title: { ko: "쿨타임", en: "Cooldown" }, keys: ["CDR", "CDR_RESET", "DURATION_RESET", "DURATION_EXT"] },
    ],
  },
  {
    title: { ko: "3) 군중제어 / CC", en: "3) Crowd Control" },
    keys: ["STUN", "ROOT", "SLOW", "TAUNT", "SLEEP", "DROWSY", "KNOCKBACK", "AIRBORNE", "SUSPENDING", "GRAB", "CHARM", "SILENCE", "FEAR", "BERSERK", "FORCED_ACTION", "NEAR_SIGHT", "BLIND", "SUPPRESS", "IMMOBILIZING", "CRIPPLE", "DISARM", "CC_IMMUNE", "CC_CLEANSE", "SLOW_RESIST", "SLOW_IMMUNE", "SLOW_CLEANSE", "DISRUPT", "GROUNDED", "KINEMATICS", "BANISH", "ANTI_DASH", "POLYMORPH"],
    subGroups: [
      { title: { ko: "이동 불가", en: "Immobilizing" }, keys: ["IMMOBILIZING", "STUN", "ROOT", "AIRBORNE", "KNOCKBACK", "GRAB", "SUSPENDING", "SUPPRESS", "SLEEP", "STASIS"] },
      { keys: ["FORCED_ACTION", "CHARM", "TAUNT", "FEAR", "BERSERK"] },
      { title: { ko: "기타", en: "" }, keys: ["SILENCE", "DISRUPT", "DROWSY", "KINEMATICS"] },
      { keys: ["DISARM", "CRIPPLE", "SLOW",] },
      { keys: ["BLIND", "NEAR_SIGHT"] }, 
      { title: { ko: "CC 관련", en: "" }, keys: ["UNSTOPPABLE", "CC_IMMUNE", "CC_CLEANSE"] }, 
      { keys: ["SLOW_RESIST", "SLOW_IMMUNE", "SLOW_CLEANSE"] },
      { title: { ko: "특별 챔피언 CC", en: "Champion-Unique" }, keys: ["BANISH", "ANTI_DASH", "POLYMORPH", "GROUNDED"] },
    ],
  },
  {
    title: { ko: "4) 전투 메커니즘", en: "4) Combat Mechanics" },
    keys: ["AA_RESET", "UNTARGETABLE", "TOWER_DODGE", "DODGE", "EXECUTE", "SHIELD_BREAK", "SHIELD_PIERCE", "BLOCKED", "REFLECT", "WINDSHIELD", "SPELL_SHIELD", "DAMAGE_NULLIFY", "INTERCEPT_PROJECTILE", "BURN", "UNSTOPPABLE", "TERRAIN", "WALL_HOP", "ALLY_TP_OK", "TETHER", "MARK", "GHOSTING", "MOBILITY", "DASH", "BLINK", "Q_FLASH", "W_FLASH", "E_FLASH", "R_FLASH", "INSEC_KICK"],
    subGroups: [
      { title: { ko: "투사체", en: "Projectile" }, keys: ["WINDSHIELD", "REFLECT", "SEPARATOR", "INTERCEPT_PROJECTILE", "DAMAGE_NULLIFY"] },
      { title: { ko: "이동 스킬", en: "Mobility" }, keys: ["MOBILITY", "DASH", "BLINK", "SEPARATOR", "WALL_HOP"] },
      { title: { ko: "점멸 연계", en: "Flash Combos" }, keys: ["Q_FLASH", "W_FLASH", "E_FLASH", "R_FLASH", "SEPARATOR", "INSEC_KICK"] },
      { title: { ko: "기타 메커니즘", en: "" }, keys: ["AA_RESET", "GHOSTING", "EXECUTE", "UNTARGETABLE", "TERRAIN", "INVULNERABLE"]}, 
      { keys: ["TOWER_DODGE", "BLOCKED", "DODGE", "SPELL_SHIELD", "DMG_REDUCE", "MAGIC_DR"]}, 
      { keys: ["SHIELD_BREAK", "SHIELD_PIERCE"] },      
      { keys: ["ALLY_TP_OK", "TETHER", "MARK", "BURN", "BUFF_FORM", "TRANSFORM", "EVOLVED", "THE_COPYPASTA"] },
    ],
  },
  {
    title: { ko: "5) 생존 / 방어", en: "5) Survival / Defense" },
    keys: [],
  },
  {
    title: { ko: "6) 시야 / 은신", en: "6) Vision / Stealth" },
    keys: ["VISION", "REVEALED", "TRUE_SIGHT", "STEALTH", "INVISIBILITY", "CAMOUFLAGE"],
    subGroups: [
      { keys: ["VISION", "REVEALED", "TRUE_SIGHT"] },
      { keys: ["STEALTH", "INVISIBILITY", "CAMOUFLAGE"] },
    ],
  },
  {
    title: { ko: "9) 특수 / 변신", en: "9) Special / Transform" },
    keys: [],
  },
];

// "시야·은신" 탭 전용 독립 정의. TAG_CATEGORIES의 "6) 시야 / 은신"은 카드에
// 노출할 핵심 6개만 추리고 나머지(POSITION_*/HIT_* 9개)는 여기에만 있다 —
// 더 이상 배열을 공유하지 않는다.
export const VISION_STEALTH_CATEGORY: CategoryGroup<TagId> = {
  title: { ko: "시야 · 은신 전체", en: "Vision · Stealth (All)" },
  keys: [
    "VISION", "REVEALED", "TRUE_SIGHT", "POSITION_REVEAL", "POSITION_INDICATOR",
    "POSITION_SOUND", "POSITION_EFFECT", "POSITION_EFFECT_SOUND", "HIT_SOUND",
    "HIT_EFFECT", "HIT_EFFECT_SOUND", "HIT_INDICATOR", "STEALTH", "INVISIBILITY",
    "CAMOUFLAGE",
  ],
};

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
    keys: ["BUFF", "BUFF_A", "BUFF_B", "BUFF_C", "DEBUFF", "DEBUFF_A", "DEBUFF_B", "DEBUFF_C", "COOLDOWN", "ON_TARGET_CD", "EMPOWERED", "RECHARGE", "STACKING", "PROC", "BUFF_STACK", "BUFF_STACK_A", "BUFF_STACK_B", "BUFF_STACK_C", "DEBUFF_STACK", "DEBUFF_STACK_A", "DEBUFF_STACK_B", "DEBUFF_STACK_C", "STACK_CONSUME"],
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
];

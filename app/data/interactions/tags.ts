export type TagId =
  /* 1) 스탯 버프 */
  | "MS_UP"
  | "MS_TO_ENEMY"
  | "AS_UP"          // 공속 증가
  | "AD_UP"          // 공격력 증가
  | "AP_UP"
  | "RANGE_UP"
  | "SIZE_UP"
  | "SKILL_SIZE_UP"
  | "CRIT"
  | "CDR"            // 쿨감
  | "CDR_RESET"      // 쿨초기화
  | "DURATION_RESET" // 지속초기화
  | "DURATION_EXT"  // 지속연장
  | "AR_UP"      // 방어력 증가
  | "MR_UP"      // 마법저항력 증가
  | "AR_MR_UP"   // 방마저 증가

  /* 2) 스탯 디버프 */
  | "MS_DOWN"
  | "AD_DOWN"       // 공격력 감소
  | "AR_SHRED"   // 방깍
  | "MR_SHRED"      // 마깍
  | "AR_MR_SHRED"     // 방마깍
  | "AR_PEN"   //방관
  | "MR_PEN"      //마관
  | "AR_MR_PEN"  // 방마관
  | "GW"           // 치감
  | "BURN"         // 부식

  /* 3) 군중제어 / CC */
  | "STUN"
  | "ROOT"
  | "SLOW"
  | "TAUNT"
  | "SLEEP"
  | "DROWSY"
  | "KNOCKBACK"
  | "AIRBORNE"
  | "SUSPENDING"
  | "GRAB"
  | "CHARM"
  | "SILENCE"
  | "FEAR"
  | "BERSERK"
  | "NEAR_SIGHT"
  | "BLIND"
  | "POLYMORPH"
  | "SUPPRESS" // 제압
  | "IMMOBILIZING"
  | "CRIPPLE"  // 공격속도 감소
  | "DISARM"   // 공격 무력화
  | "TENACITY"
  | "CC_IMMUNE"
  | "CC_CLEANSE"
  | "SLOW_RESIST"
  | "SLOW_IMMUNE"
  | "SLOW_CLEANSE"  // 둔화해제
  | "DISRUPT"
  | "GROUNDED"
  | "ANTI_DASH"
  | "KINEMATICS"

  /* 4) 전투 메커니즘 */
  | "AA_RESET"
  | "UNTARGETABLE"
  | "TOWER_DODGE"
  | "DODGE"
  | "EXECUTE"
  | "SHIELD_BREAK"
  | "SHIELD_PIERCE"
  | "BLOCKED"
  | "REFLECT"
  | "WINDSHIELD"
  | "SPELL_SHIELD"
  | "DAMAGE_NULLIFY"
  | "INTERCEPT_PROJECTILE"

  /* 5) 생존 / 방어 */
  | "INVULNERABLE"  // 무적
  | "REVIVE"        // 부활
  | "DMG_REDUCE"
  | "MAGIC_DR"
  | "STASIS"
  | "UNSTOPPABLE"
  | "BANISH"

  /* 6) 시야 / 은신 */
  | "VISION"
  | "REVEALED"
  | "TRUE_SIGHT"
  | "POSITION_REVEAL"
  | "POSITION_INDICATOR"
  | "POSITION_SOUND"
  | "POSITION_EFFECT"
  | "POSITION_EFFECT_SOUND"
  | "HIT_SOUND"
  | "HIT_EFFECT"
  | "HIT_EFFECT_SOUND"
  | "HIT_INDICATOR"
  | "STEALTH"
  | "INVISIBILITY"
  | "CAMOUFLAGE"

  /* 7) 회복 / 자원 */
  | "HEAL"
  | "HP_REGEN"       // 체력재생
  | "HP_REGEN_UP"    // 체력재생 증가
  | "SHIELD"
  | "MAX_HP_UP" // 최대체력 증가
  | "HS_POWER"  // 회복/보호막 강화
  | "LIFESTEAL"
  | "OMNIVAMP"
  | "MANA_RESTORE"
  | "ENERGY_RESTORE"

  /* 8) 이동 / 위치 / 상호작용 */
  | "ALLY_TP_OK"
  | "WALL_HOP"
  | "GHOSTING"
  | "TERRAIN"
  | "MARK"
  | "TETHER"

  /* 9) 특수 / 변신 */
  | "BUFF_FORM"
  | "TRANSFORM"  // 폼변환
  | "EVOLVED"    // 진화
  | "THE_COPYPASTA"

  /* 10) 점멸 연계 */
  | "Q_FLASH"
  | "W_FLASH"
  | "E_FLASH"
  | "R_FLASH"
  | "INSEC_KICK";
  


export const TAG_LABEL: Record<TagId, { ko: string; en: string }> = {

  /* 1) 스탯 버프 */
MS_UP: { ko: "이속↑", en: "MS ↑" },
MS_TO_ENEMY: { ko: "추격이속↑", en: "Approach MS" },
AS_UP: { ko: "공속↑", en: "AS ↑" },
AD_UP: { ko: "공격력↑", en: "AD ↑" },
AP_UP: { ko: "주문력↑", en: "AP Buff" },
RANGE_UP:      { ko: "사거리↑", en: "Range↑" },
SIZE_UP: { ko: "크기↑", en: "Size ↑" },
SKILL_SIZE_UP: { ko: "스킬크기↑", en: "Skill Size ↑" },
CRIT: { ko: "치명타", en: "Critical" },
CDR: { ko: "쿨감", en: "CDR" },
CDR_RESET: { ko: "쿨초", en: "CDR" },
DURATION_RESET: { ko: "지속초기", en: "Duration Reset" },
DURATION_EXT: { ko: "지속연장", en: "Duration Ext" },
AR_UP: { ko: "방어↑", en: "AR ↑" },
MR_UP: { ko: "마저↑", en: "MR ↑" },
AR_MR_UP: { ko: "방마저↑", en: "AR+MR ↑" },

  /* 2) 스탯 디버프 */
MS_DOWN: { ko: "이속↓", en: "MS ↓" },
AD_DOWN: { ko: "공격력↓", en: "AD ↓" },
AR_SHRED: { ko: "방깍", en: "AR Shred" },
MR_SHRED: { ko: "마깍", en: "MR Shred" },
AR_MR_SHRED: { ko: "방마깍", en: "AR+MR Shred" },
AR_PEN: { ko: "방관", en: "AR Penet" },
MR_PEN: { ko: "마관", en: "AR Penet" },
AR_MR_PEN: { ko: "방마관", en: "AR+MR Penet" },
GW: { ko: "치감", en: "Grievous Wounds" },
BURN: { ko: "부식", en: "Burn" },

  /* 3) 군중제어 / CC */
STUN: { ko: "기절", en: "Stun" },
ROOT: { ko: "속박", en: "Root" },
SLOW: { ko: "둔화", en: "Slow" },
TAUNT: { ko: "도발", en: "Taunt" },
SLEEP: { ko: "수면", en: "Sleep" },
DROWSY: { ko: "졸림", en: "Drowsy" },
KNOCKBACK: { ko: "넉백", en: "Knockback" },
AIRBORNE: { ko: "에어본", en: "Airborne" },
SUSPENDING: { ko: "체공", en: "Suspending" },
GRAB: { ko: "그렙", en: "Grab" },
CHARM: { ko: "매혹", en: "Charm" },
SILENCE: { ko: "침묵", en: "Silence" },
FEAR: { ko: "공포", en: "Fear" },
BERSERK: { ko: "광란", en: "Berserk" },
NEAR_SIGHT: { ko: "시야감소", en: "Nearsight" },
BLIND: { ko: "실명", en: "Blind" },
POLYMORPH: { ko: "변이", en: "Polymorph" },
SUPPRESS: { ko: "제압", en: "Suppress" },
IMMOBILIZING: { ko: "이동불가", en: "Immobilizing" },
CRIPPLE: { ko: "공속둔화", en: "Cripple" },
DISARM: { ko: "무장해제", en: "Disarm" },
TENACITY: { ko: "강인함", en: "Tenacity" },
CC_IMMUNE: { ko: "CC면역", en: "CC Immune" },
CC_CLEANSE: { ko: "CC해제", en: "Cleanse" },
SLOW_RESIST: { ko: "둔화저항", en: "Slow Resist" },
SLOW_IMMUNE: { ko: "둔화면역", en: "Slow Immune" },
SLOW_CLEANSE: { ko: "둔화해제", en: "Slow Cleanse" },
DISRUPT: { ko: "시전방해", en: "Disrupt" },
GROUNDED: { ko: "이동금지", en: "Grounded" },
ANTI_DASH: { ko: "돌진방해", en: "Anti-Dash" },
KINEMATICS: { ko: "견인", en: "Kinematics" },

  /* 4) 전투 메커니즘 */
AA_RESET: { ko: "평캔", en: "AA Reset" },
UNTARGETABLE: { ko: "타겟불가", en: "Untargetable" },
TOWER_DODGE: { ko: "타워회피", en: "Turret Dodge" },
DODGE: { ko: "회피", en: "Dodge" },
EXECUTE: { ko: "처형", en: "Execute" },
SHIELD_BREAK:  { ko: "쉴드파괴", en: "Shield Break"  },
SHIELD_PIERCE: { ko: "실드관통", en: "Shield Pierce" },
BLOCKED: { ko: "방어", en: "Blocked" },
REFLECT: { ko: "반사", en: "Reflect" },
WINDSHIELD: { ko: "장막", en: "Projectile Block" },
SPELL_SHIELD: { ko: "주문방어", en: "Spell Shield" },
DAMAGE_NULLIFY: { ko: "피해 무효화", en: "Damage Nullify" },
INTERCEPT_PROJECTILE: { ko: "투사체 차단", en: "Projectile Delete" },

  /* 5) 생존 / 방어 */
INVULNERABLE: { ko: "무적", en: "Invulnerable" },
REVIVE: { ko: "부활", en: "Revive" },
DMG_REDUCE: { ko: "피해감소", en: "Damage Reduction" },
MAGIC_DR: { ko: "마피감소", en: "Magic DR" },
STASIS: { ko: "경직", en: "Stasis" },
UNSTOPPABLE: { ko: "저지불가", en: "Unstoppable" },
BANISH: { ko: "추방", en: "Banish" },

  /* 6) 시야 / 은신 */
VISION: { ko: "시야", en: "Vision" },
REVEALED: { ko: "드러냄", en: "Revealed" },
TRUE_SIGHT: { ko: "절대시야", en: "True Sight" },
POSITION_REVEAL: { ko: "위치노출", en: "Position Reveal" },
POSITION_INDICATOR:    { ko: "위치 단서",        en: "Position Indicator"   },
POSITION_SOUND:        { ko: "위치 소리",        en: "Position Sound"       },
POSITION_EFFECT:       { ko: "위치 이펙트",      en: "Position Effect"      },
POSITION_EFFECT_SOUND: { ko: "위치 소리+이펙트", en: "Position Effect+Sound" },
HIT_SOUND:             { ko: "적중 소리",        en: "Hit Sound"            },
HIT_EFFECT:            { ko: "적중 이펙트",      en: "Hit Effect"           },
HIT_EFFECT_SOUND:      { ko: "적중 소리+이펙트", en: "Hit Effect+Sound"     },
HIT_INDICATOR:         { ko: "적중 반응",        en: "Hit Indicator"        },
STEALTH: { ko: "은신", en: "Stealth" },
INVISIBILITY: { ko: "투명", en: "Invisibility" },
CAMOUFLAGE: { ko: "위장", en: "Camouflage" },

  /* 7) 회복 / 자원 */
HEAL: { ko: "회복", en: "Heal" },
HP_REGEN: { ko: "체젠", en: "HP Regen" },
HP_REGEN_UP: { ko: "체젠↑", en: "HP Regen↑" },
SHIELD: { ko: "쉴드", en: "Shield" },
MAX_HP_UP: { ko: "최대체력↑", en: "Max HP Increase" },
HS_POWER: { ko: "회쉴↑", en: "HS Power" },
LIFESTEAL: { ko: "생흡", en: "Lifesteal" },
OMNIVAMP: { ko: "모든피흡", en: "Omnivamp" },
MANA_RESTORE: { ko: "마나회복", en: "Mana Restore" },
ENERGY_RESTORE: { ko: "기력회복", en: "Energy Restore" },

  /* 8) 이동 / 위치 / 상호작용 */
ALLY_TP_OK: { ko: "아군텔", en: "Ally TP" },
WALL_HOP: { ko: "벽넘기", en: "Wall Hop" },
GHOSTING: { ko: "유체화", en: "Ghosting" },
TERRAIN: { ko: "벽", en: "TERRAIN" },
MARK:          { ko: "표식",     en: "Mark"          },
TETHER: { ko: "사슬", en: "Tether" },

  /* 9) 특수 / 변신 */
BUFF_FORM: { ko: "자가버프", en: "Buff Form" },
TRANSFORM: { ko: "폼 변환", en: "Transform" },
EVOLVED: { ko: "진화", en: "Evolved" },
THE_COPYPASTA: { ko: "그 긴거", en: "The Copypasta"},

  /* 10) 점멸 연계 */
Q_FLASH: { ko: "Q플", en: "QF" },
W_FLASH: { ko: "W플", en: "WF" },
E_FLASH: { ko: "E플", en: "EF" },
R_FLASH: { ko: "R플", en: "RF" },
INSEC_KICK: { ko: "인섹킥", en: "InSec Kick" },

}

export const TAG_DESC: Partial<Record<TagId, { ko: string; en: string }>> = {

  /* 1) 스탯 버프 */
MS_UP: {
  ko: "이동속도 증가",
  en: "Increases movement speed",
},
MS_TO_ENEMY: {
  ko: "적에게 접근할 때 이동속도가 증가하는 효과.",
  en: "Gain movement speed when approaching enemies.",
},
AS_UP: { ko: "공격속도 증가", en: "Increases attack speed" },
AD_UP: { ko: "공격력 증가", en: "Increases attack damage" },
AP_UP: {  ko: "주문력 증가",  en: "Increases ability power",},
RANGE_UP: { ko: "스킬 또는 공격의 사거리가 증가함", en: "Increases attack range" },
SIZE_UP: {
  ko: "챔피언의 크기가 커짐.\n히트박스도 같이 커짐.",
  en: "Increases the champion's size.\nAlso increases the hitbox.",
},
SKILL_SIZE_UP: {
  ko: "스킬의 판정 범위/크기가 커짐.",
  en: "Increases the skill's hitbox/area size.",
},
CRIT: {
  ko: "일반 피해의 200% 피해.",
  en: "Deals 200% of normal damage.",
},
CDR: {
  ko: "쿨타임 감소",
  en: "Reduces cooldown",
},
CDR_RESET: {
  ko: "쿨타임이 초기화됨",
  en: "Resets cooldown",
},
DURATION_RESET: {
  ko: "스킬이나 디버프의 지속시간이 초기화됨.",
  en: "Resets the duration of a skill or debuff.",
},
DURATION_EXT: {
  ko: "스킬이나 디버프의 지속시간이 연장됨.",
  en: "Extends the duration of a skill or debuff.",
},
AR_UP: {
  ko: "방어력 증가",
  en: "Increases armor",
},
MR_UP: {
  ko: "마법저항력 증가",
  en: "Increases magic resistance",
},
AR_MR_UP: {
  ko: "방어력, 마법저항력 증가",
  en: "Increases armor and magic resistance",
},

  /* 2) 스탯 디버프 */
MS_DOWN: {
  ko: "자신의 이동속도가 감소함",
  en: "Decreases own movement speed",
},
AD_DOWN: { ko: "상대 공격력 감소", en: "Reduces attack damage" },
AR_SHRED: {
  ko: "상대 방어력 감소",
  en: "Reduces armor",
},
MR_SHRED: {
  ko: "상대 마법저항력 감소",
  en: "Reduces magic resist",
},
AR_MR_SHRED: {
  ko: "상대 방어력, 마법저항력 감소",
  en: "Reduces armor and magic resist",
},
AR_PEN: { 
  ko: "상대의 방어력을 관통", 
  en: "Armor Penetration" 
},
MR_PEN: { 
    ko: "상대의 마법저항력을 관통", 
    en: "Magic resist penetration" 
},
AR_MR_PEN: { 
    ko: "상대의 방어력, 마법저항력을 관통", 
    en: "Armor and magic penetration" 
},
GW: {
  ko: "치유효과 감소",
  en: "Reduces healing effects",
},
BURN: {
  ko: "체력이 점차 빠른 속도로 감소하는 상태. \n 회복으로 늦출 수는 있지만 결국 죽음에 다다름. \n 단, 처치 관여 시 죽음을 피할 수 있음. \n 한 번의 버프로 두 번 살아날 수 없음.",
  en: "A state where health decreases at an accelerating rate. \n Healing can slow it down, but it ultimately leads to death. \n However, death can be avoided by getting a takedown. \n Cannot be revived twice from a single buff.",
},

  /* 3) 군중제어 / CC */
STUN: {
  ko: "아무런 행동을 할 수 없음\n(클린즈 계열로 해제 가능)",
  en: "Cannot act (can be cleansed)",
},
ROOT: {
  ko: "이동이 불가능함\n(클린즈 계열로 해제 가능)",
  en: "Cannot move (can be cleansed)",
},
SLOW: {
  ko: "상대 이동속도 감소\n(클린즈 계열로 해제 가능)",
  en: "Movement speed reduced (can be cleansed)",
},
TAUNT: {
  ko: "상대가 나를 강제로 기본공격만 하게 만듦\n(클린즈 계열로 해제 가능)\n단 시전자가 죽으면 도발이 해제됨",
  en: "Forces the target to basic attack you \n(can be cleansed)\nHowever, if the caster dies, the taunt is removed",
},
SLEEP: {
  ko: "아무런 행동을 할 수 없지만\n즉발적인 공격을 받으면 해제됨(지속피해 제외)\n(클린즈 계열로 해제 가능)",
  en: "Cannot act, but ends immediately \nwhen damaged (can be cleansed)",
},
DROWSY: {
  ko: "둔화 효과를 동반하며, 지속시간이 끝나면 수면 상태로 이어짐. \n 강인함의 영향을 받지 않고, CC 면역으로 저항 가능. \n 정화류로 해제 가능.",
  en: "Applies a slow, and leads into Sleep when the duration ends. \n Not affected by Tenacity. Resisted by CC immunity. \n Can be removed by Cleanse effects.",
},
KNOCKBACK: {
  ko: "에어본 + 밀어냄 - 최상급 CC\n(클린즈 계열로 해제 불가능)",
  en: "Knocks the target back",
},
AIRBORNE: {
  ko: "공중에 띄움 - 최상급 CC\n(클린즈 계열로 해제 불가능)\n그랩, 넉백, 체공, 에어본",
  en: "Knocks the target airborne — top-tier CC \n(cannot be cleansed)\nGrab, Knockback, Suspending, Airborne",
},
SUSPENDING: {
  ko: "공중에 띄워서 거는 기절\n야스오 궁 가능\n(강인함의 영향을 받고, 클린즈 계열로 해제 가능)",
  en: "A stun that also knocks up Affected \nby Tenacity and can be removed by Cleanse\nYasuo can follow up with his ult",
},
GRAB: {
  ko: "에어본 + 잡아당김 - 최상급 CC\n(클린즈 계열로 해제 불가능)",
  en: "Pulls the target",
},
CHARM: {
  ko: "대상을 내 쪽으로 걸어오게 만듦\n(클린즈 계열로 해제 가능)\n단, 시전자가 죽으면 매혹이 해제됨",
  en: "Forces the target to walk toward you \n(can be cleansed)\nHowever, if the caster dies, the charm is removed",
},
SILENCE: {
  ko: "스킬을 사용하지 못하게 만듦\n(클린즈 계열로 해제 가능)",
  en: "Prevents ability casts (can be cleansed)",
},
FEAR: {
  ko: "대상이 시전자 반대쪽으로 도망치게 만듦\n(클린즈 계열로 해제 가능)\n단, 시전자가 죽으면 공포가 해제됨",
  en: "Forces the target to flee away from you \n(can be cleansed)\nHowever, if the caster dies, the fear is removed",
},
BERSERK: {
  ko: "주변 유닛을 공격. \n 자신의 아군 우선 공격. \n 클린즈 계열로 해제 가능.",
  en: "Attacks nearby units. \n Prioritizes allies. \n Can be cleansed.",
},
NEAR_SIGHT: {
  ko: "시야가 축소됨. \n (정화를 제외한 클린즈 계열로 해제 가능)",
  en: "Reduces vision range. \n (Can be cleansed by cleanse effects \n other than Summoner Spell Cleanse)",
},
BLIND: {
  ko: "평타를 때려도 빗나가게 만듬 \n (클린즈 계열로 해제 가능)",
  en: "Basic attacks miss (can be cleansed)",
},
POLYMORPH: {
  ko: "동물로 만듦. \n 침묵, 무장해제, 고정 둔화(60) \n 고정 둔화는 둔화 저항을 무시함. \n (단, 둔화 면역은 무시 불가.)",
  en: "Transforms the target, \npreventing attacks and ability casts",
},
SUPPRESS: {
  ko: "상대를 아무것도 할 수 없게 만듬\n스펠 사용도 불가능\n정화(스펠)로는 해제 불가\n수은으로 해제 가능. \n 미카엘 불가능.",
  en: "Renders the enemy completely helpless\nSummoner spells cannot be used\nCannot be cleansed by Cleanse (Spell)\nCan be removed by Quicksilver Sash (QSS)\nCannot be cleansed by Mikael's Blessing",
},
IMMOBILIZING: {
  ko: "이동 명령을 차단하는 CC. \n 기절, 속박, 에어본, 넉백, 그렙, 체공, 제압, 수면, 공포, 매혹, 도발, 광란, 경직",
  en: "CC that prevents movement commands. \n Stun, Root, Airborne, Knockback, Grab, Suspension, Suppression, Sleep, Fear, Charm, Taunt, Berserk, Stasis",
},
CRIPPLE: {
  ko: "상대의 공격속도를 감소시킴. \n 강인함의 영향을 받고, 클린즈 계열로 해제 가능. \n (실명과 함께 킬 관여 인정에서 예외로 처리됨)",
  en: "Reduces the target's attack speed. \n Affected by Tenacity and can be cleansed. \n (Along with Blind, an exception for assist credit)",
},
DISARM: {
  ko: "기본 공격을 사용하지 못하게 만듦 (스킬은 사용 가능). \n 강인함의 영향을 받고, 클린즈 계열로 해제 가능. \n (실명과 마찬가지로 미카엘의 축복으로는 해제되지 않음)",
  en: "Prevents basic attacks (abilities can still be used). \n Affected by Tenacity and can be cleansed. \n (Like Blind, not removable by Mikael's Blessing)",
},
TENACITY: {
  ko: "기절, 속박, 둔화, 도발, 공포, 매혹, 침묵, 실명, 수면, 변이, 이동불가, 광란, 약화, 무장해제\n지속시간 감소",
  en: "Reduces crowd control duration",
},
CC_IMMUNE: {
  ko: "CC가 걸리지 않음",
  en: "Immune to crowd control",
},
CC_CLEANSE: {
  ko: "걸려있는 CC를 해제함\n에어본도 해제가 가능하지만 무빙은 하지 못함\n넉백, 그렙도 해제가 가능하지만 이동은 끝까지 이루어짐",
  en: "Removes existing crowd control effects",
},
SLOW_RESIST: { ko: "둔화효과 감소", en: "Reduces the strength of slows" },
SLOW_IMMUNE: {
  ko: "둔화가 걸려도 무시함",
  en: "Ignores slow effects",
},
SLOW_CLEANSE: {
  ko: "둔화 효과를 해제함",
  en: "Removes slow effects",
},
DISRUPT: {
  ko: "채널링, 충전형 스킬을 즉시 중단시킴. \n 지속 상태가 아니라 순간 효과이며, CC 면역으로 저항 가능.",
  en: "Instantly interrupts channeled or charged abilities. \n Not a lingering status effect - resisted by CC immunity.",
},
GROUNDED: {
  ko: "이동스킬(돌진, 순간이동, 점멸, 아이템 벨트 등등)을 \n 사용하지 못하게 만드는 디버프. \n (클린즈 계열로 해제하면 이동기 사용 가능)",
  en: "A debuff that prevents the use of movement abilities \n (dashes, blinks, teleports, item movement speed effects, etc.). \n (Can use movement abilities again if cleansed)",
},
ANTI_DASH: {
  ko: "돌진스킬을 방해하고 에어본과 기절을 검",
  en: "Stops dashes and can apply knock-up or stun",
},
KINEMATICS: {
  ko: "행동은 막지 않고 위치만 지속적으로 끌어당김. \n 대시 중이거나, CC 면역 대상은 영향받지 않음.",
  en: "Continuously pulls the target's position without disabling their actions. \n Does not affect targets that are dashing or CC immune.",
},

  /* 4) 전투 메커니즘 */
AA_RESET: {
  ko: "평타 기반 스킬을 사용할 때 \n 평타를 때리고 스킬을 사용하면 딜로스가 없음.",
  en: "When using basic attack-based skills, \n auto-attacking before casting avoids damage loss.",
},
UNTARGETABLE: {
  ko: "타겟 불가",
  en: "Cannot be targeted",
},
TOWER_DODGE: {
  ko: "타워데미지 무시\n즉, 웬만한 투사체 데미지 무시",
  en: "Ignores turret damage",
},
DODGE: {
  ko: "평타를 무시함",
  en: "Dodges basic attacks",
},
EXECUTE: {
  ko: "체력이 일정 수치 이하일 때 즉시처치",
  en: "Instantly kills targets below a health threshold",
},
SHIELD_BREAK: {
  ko: "상대의 보호막을 파괴. \n 스킬 데미지가 있다면 파괴후 데미지 적용.",
  en: "Breaks the target's shield. \n If the skill deals damage, \n it is applied after the shield is destroyed.",
},
SHIELD_PIERCE: {
  ko: "실드를 무시하고 체력에 직접 피해를 줌",
  en: "Bypasses shields and deals damage directly to health",
},
BLOCKED: {
  ko: "기본 공격을 방어.",
  en: "Blocks basic attacks.",
},
REFLECT: {
  ko: "투사체를 반사함",
  en: "Reflects projectiles",
},
WINDSHIELD: {
  ko: "투사체를 막을 수 있음",
  en: "Blocks projectiles",
},
SPELL_SHIELD: {
  ko: "주문을 한번 막아줌",
  en: "Blocks a single spell",
},
DAMAGE_NULLIFY: { ko: "브라움에게 가해지는 첫 피해를 무효", en: "Nullifies damage dealt to Braum." },
INTERCEPT_PROJECTILE: { ko: "브라움이 아군에게 날아가는 것을 대신 맞아줌\n이때 투사체가 사라질 수 도 있음", en: "Braum leaps to an ally to take the hit for them\nAt this time, the projectile may be destroyed." },

  /* 5) 생존 / 방어 */
INVULNERABLE: {
  ko: "피해를 받아도 체력이 깎이지 않음",
  en: "Takes no damage and does not lose health",
},
REVIVE: {
  ko: "부활",
  en: "Revives after death",
},
DMG_REDUCE: {
  ko: "스킬이 유지되는 동안 \n 받는 피해가 감소.",
  en: "Damage taken is reduced \n while the skill is active.",
},
MAGIC_DR: {
  ko: "받는 마법 피해가 감소함.",
  en: "Reduces incoming magic damage.",
},
STASIS: {
  ko: "움직일 수 없는 상태. \n 대신, 무적 및 대상으로 지정할 수 없음. \n 예) 존야, 가엔",
  en: "Unable to move. \n Instead, becomes invulnerable and untargetable. \n e.g. Zhonya's, Guardian Angel",
},
UNSTOPPABLE: {
  ko: "CC 계열을 맞아도 시전자의 스킬이 유효함\n단, 저지불가 상태에서 적중한 CC가\n저지불가 종료 이후에도 남아있다면 CC효과 발동",
  en: "It cannot be blocked by CC\nHowever, if CC hits during an unstoppable state \nand the duration remains after the state ends, \nthe CC takes effect",
},
BANISH: {
  ko: "대상을 시전자와 함께 격리된 위상(죽음의 세계)으로 추방. \n 두 공간은 서로 상호작용 불가.",
  en: "Banishes the target along with the caster into an isolated realm (Death Realm). \n The two spaces cannot interact with each other.",
},

  /* 6) 시야 / 은신 */
VISION: {
  ko: "시야를 보여줌",
  en: "Grants vision",
},
REVEALED: {
  ko: "대상 챔피언만 보여줌",
  en: "Reveals only the target champion",
},
TRUE_SIGHT: {
  ko: "대상과 대상 주변의 약간의 시야를 제공함\n은신 상태와 무관하게 타겟에 디버프로 붙어 계속 보임",
  en: "Reveals the target and grants a small amount of surrounding vision\nApplies a debuff that persists regardless of stealth",
},
POSITION_REVEAL: {
  ko: "상대시야 밖에서 시전자가 스킬을 사용했을 때\n스킬 효과, 시야 제공으로 인해 사용자의 위치가 적에게 드러남",
  en: "Casting a skill from fog of war\n reveals the caster’s location to enemies",
},
POSITION_INDICATOR: {
  ko: "내 위치가 직접 노출되지 않지만\n스킬의 장판이나 이펙트로 내 위치가 간접적 노출.",
  en: "My position is not directly revealed,\nbut the skill’s zone or effects allow\nthe enemy to indirectly infer my location",
},
POSITION_SOUND: {
  ko: "스킬 사용 시 소리로 내 위치가 간접적으로 노출될 수 있음",
  en: "Using the skill may indirectly reveal your position via sound",
},
POSITION_EFFECT: {
  ko: "스킬 사용 시 이펙트로 내 위치가 간접적으로 노출될 수 있음",
  en: "Using the skill may indirectly reveal your position via visual effects",
},
POSITION_EFFECT_SOUND: {
  ko: "스킬 사용 시 소리 및 이펙트로 내 위치가 간접적으로 노출될 수 있음",
  en: "Using the skill may indirectly reveal your position via sound and visual effects",
},
HIT_SOUND: {
  ko: "스킬이 시야를 제공하지 않지만\n적중 시 소리로 상대의 존재를 파악할 수 있음",
  en: "The skill does not grant vision\nbut audio cues upon hit reveal the enemy’s presence",
},
HIT_EFFECT: {
  ko: "스킬이 시야를 제공하지 않지만\n적중 시 이펙트로 상대의 존재를 파악할 수 있음",
  en: "The skill does not grant vision\nbut visual effects upon hit reveal the enemy’s presence",
},
HIT_EFFECT_SOUND: {
  ko: "스킬이 시야를 제공하지 않지만\n적중 시 소리 및 이펙트로 상대의 존재를 파악할 수 있음",
  en: "The skill does not grant vision\nbut audio and visual cues upon hit reveal the enemy’s presence",
},
HIT_INDICATOR: {
  ko: "소리나 이펙트 없이도 스킬 상태 변화나 \n버프/디버프 반응으로\n적의 존재를 간접적으로 알 수 있음.",
  en: "Indirectly detects enemy presence \nthrough skill state changes or buff/debuff reactions, \nwithout sound or visual effects.",
},
STEALTH: {
  ko: "투명화와 위장으로 나뉨\n절대시야에는 보이고, \n 드러냄 스킬에는 맞고 은신하면 보임",
  en: "Invisibility and Camouflage",
},
INVISIBILITY: {
  ko: "은신류 - 상대 챔피언, 핑와에 발각되지 않음\n단, 절대시야에는 보이고, \n 드러냄 스킬에는 맞고 은신하면 보임",
  en: "Stealth class\nInvisible units cannot be revealed \nby enemy champions or Control Wards\nOnly revealed by True Sight.",
},
CAMOUFLAGE: {
  ko: "은신류 \n 상대 챔피언, 핑와, 절대시야에 보임.",
  en: "Stealth class \n Revealed by enemy champions, Control Wards, or True Sight.",
},

  /* 7) 회복 / 자원 */
HEAL: {
  ko: "생명력 회복",
  en: "Restores health",
},
HP_REGEN: {
  ko: "체력이 지속적으로 재생됨",
  en: "Regenerates health over time",
},
HP_REGEN_UP: {
  ko: "체력 재생량이 증가함.",
  en: "Increases health regeneration.",
},
SHIELD: {
  ko: "보호막",
  en: "Grants a shield",
},
MAX_HP_UP: {
  ko: "최대 체력 증가\n(치감 효과에 영향을 받지 않음)",
  en: "Increases maximum health. \n(Not affected by Grievous Wounds)",
},
HS_POWER: {
  ko: "체력 회복 및 보호막 효과가 증가함.",
  en: "Increases heal and shield power.",
},
LIFESTEAL: {
  ko: "기본 공격 피해량에 비례하여 생명력이 회복됨",
  en: "Heals based on basic attack damage dealt",
},
OMNIVAMP: {
  ko: "스킬 포함 모든 피해량에 비례하여 생명력이 회복됨.",
  en: "Heals based on all damage dealt, including abilities.",
},
MANA_RESTORE: {
  ko: "마나를 회복함",
  en: "Restores mana",
},
ENERGY_RESTORE: {  
  ko: "기력을 회복함",  
  en: "Energy Restore",
},

  /* 8) 이동 / 위치 / 상호작용 */
ALLY_TP_OK: {
  ko: "아군이 텔을 사용할 수 있음",
  en: "Allies can use Teleport on this target",
},
WALL_HOP: {
  ko: "벽을 넘을 수 있음",
  en: "Can hop over walls",
},
GHOSTING: {
  ko: "유닛을 통과할 수 있게 됨",
  en: "Can move through units",
},
TERRAIN: {
  ko: "벽 생성. \n 생성될 때 대상이 밀려나면서 에어본.",
  en: "Creates a wall. \n Knocks the target back and airborne when created.",
},
MARK: { ko: "적에게 표식을 남기며 \n 표식이 있는 대상에게 추가 효과가 발동됨", en: "Marks an enemy and triggers \n a bonus effect on marked targets" },
TETHER: {
  ko: "연결된 대상이 범위를 벗어나지 않으면\n스킬이 계속 유효하거나 추가 효과가 발동함",
  en: "If the linked target does not leave the range,\nthe skill remains active or \nits additional effects will trigger.",
},

  /* 9) 특수 / 변신 */
BUFF_FORM: {
  ko: "버프 형태의 스킬\nCC를 맞아도 취소되지 않음",
  en: "This ability applies a self-buff and cannot be canceled by CC\nCC effects still apply normally",
},
TRANSFORM: {
  ko: "폼을 변환하여 스킬 구성이 바뀜",
  en: "Changes form, altering the ability kit",
},
EVOLVED: {
  ko: "스킬이 영구적으로 강화됨",
  en: "Permanently enhances the ability",
},
THE_COPYPASTA: { ko: "이게 크산테다 \n체력 4700 방어력 329 마저201인 챔피언👤이\n 저지불가🚫, 실드🛡, 벽🧱 넘기는 거 있고요.\n에어본🌪 있고, 심지어 쿨타임은 1️⃣초밖에 안되고 \n마나🧙‍♂️는 1️⃣5️⃣ 들고 \nw는 심지어 변신💫하면 쿨 초기화에다가 \n패시브는 고정피해🗡가 들어가며 \n그 다음에 방마저🥋 올리면📈 올릴수록📈 \n스킬 가속⏰이 생기고! \nq에 스킬가속⏰이 생기고 스킬 속도🚀가 빨라지고📈 \n그 다음에 공격력🗡 계수가 있어가지고 \nW가 그 이익- 으아아아악😱😱 - Showmaker", 
  en: "This is K'Sante: 4700 HP, 329 armor, 201 MR, \nwith Unstoppable, shield, wall-hop, \nairborne, 1s cooldown, 15 mana cost. \nW resets on transform, P deals true damage, \narmor/MR increase cooldown reduction, \nQ benefits from ability haste and projectile speed \n— AAAAAH — Showmaker"},

  /* 10) 점멸 연계 */
Q_FLASH: {
  ko: "Q를 쓰고 바로 점멸을 썼을 때\n스킬이 유효함",
  en: "Casting Q then immediately Flash \nkeeps the skill effective",
},
W_FLASH: {
  ko: "W를 쓰고 바로 점멸을 썼을 때\n스킬이 유효함",
  en: "Casting W then immediately Flash \nkeeps the skill effective",
},
E_FLASH: {
  ko: "E를 쓰고 바로 점멸을 썼을 때\n스킬이 유효함",
  en: "Casting E then immediately Flash \nkeeps the skill effective",
},
R_FLASH: {
  ko: "R을 쓰고 바로 점멸을 썼을 때\n스킬이 유효함",
  en: "Casting R then immediately Flash \nkeeps the skill effective",
},
INSEC_KICK: {
  ko: "대상을 뒤로 밀치는 스킬을\n점멸과 연계하여 반대로 밀치는 플레이\n(전직 프로게이머 현 스트리머 INSEC의 이름을 딴 기술)",
  en: "A play that combines a knockback skill with \nFlash to push a target in the opposite direction\n(named after former pro gamer \nand current streamer Insec)",
},

};


export type TagId =
  /* 이동 / 위치 */
  | "ALLY_TP_OK"
  | "WALL_HOP"

  /* 전투 메커니즘 */
  | "AA_RESET"
  | "UNTARGETABLE"
  | "TOWER_DODGE"
  | "SHIELD_BREAK"
  | "WALL"
  | "SUPPRESS" // 제압
  | "SUPPRESSION"
  | "REVIVE"        // 부활
  | "INVULNERABLE"  // 무적
  | "REFLECT"
  | "INSEC_KICK"
  | "MS_UP"
  | "AS_UP"          // 공속 증가
  | "AS_DOWN"
  | "AD_UP"          // 공격력 증가
  | "AD_DOWN"       // 공격력 감소
  | "AP_UP"
  | "CRIT"
  | "EXECUTE"
  | "RANGE_UP"
  | "PIERCE"
  | "DMG_REDUCE"
  | "DODGE"
  | "TENACITY"
  | "VISION"
  | "REVEALED"
  | "TRUE_SIGHT"
  | "SPELL_SHIELD"
  | "CC_IMMUNE"
  | "CC_CLEANSE"
  | "STEALTH"
  | "INVISIBILITY"
  | "CAMOUFLAGE"
  | "SLOW_RESIST"
  | "SLOW_IMMUNE"
  | "GHOSTING"
  | "WINDSHIELD"
  | "PROTECTIVE_ZONE"

  /* 점멸 연계 */
  | "Q_FLASH"
  | "W_FLASH"
  | "E_FLASH"
  | "R_FLASH"

  /* 피흡 */
  
  | "LIFESTEAL"
  | "HEAL"
  | "SHIELD"
  | "MAX_HP_UP" // 최대체력 증가

  | "MANA_RESTORE"
  | "ENERGY_RESTORE"

    /* 디버프 */
  | "AR_SHRED"   // 방깍
  | "MR_SHRED"      // 마깍
  | "AR_MR_SHRED"     // 방마깍
  | "AR_PEN"   //방관
  | "MR_PEN"      //마관
  | "AR_MR_PEN"  // 방마관
  | "GW"           // 치감
  
  | "HARD_CC"
  | "STUN"
  | "ROOT"
  | "SLOW"
  | "TAUNT"
  | "SLEEP"
  | "ANTI_DASH"
  | "KNOCKBACK"
  | "AIRBORNE"
  | "SUSPENDING"
  | "GRAB"
  | "CHARM"
  | "SILENCE"
  | "GROUNDED"
  | "FEAR"
  | "CANCEL"
  | "BERSERK"
  | "NEARSIGHT"
  | "BLIND"
  | "POLYMORPH"
  | "UNSTOPPABLE";
  


export const TAG_LABEL: Record<TagId, { ko: string; en: string }> = {
  /* 이동 / 위치 */
  ALLY_TP_OK: { ko: "아군 텔가능", en: "Ally TP OK" },
  WALL_HOP: { ko: "벽넘기", en: "Wall Hop" },

  /* 전투 메커니즘 */
  AA_RESET: { ko: "평캔", en: "AA Reset" },
  UNTARGETABLE: { ko: "타겟 불가", en: "Untargetable" },
  TOWER_DODGE: { ko: "타워 회피", en: "Tower Dodge" },
  SHIELD_BREAK: { ko: "보호막 파괴", en: "Shield Break" },
  WALL: { ko: "벽", en: "Wall" },
  SUPPRESSION: { ko: "고정", en: "Suppression" },
  REVIVE: { ko: "부활", en: "Revive" },
  INVULNERABLE: { ko: "무적", en: "Invulnerable" },
  REFLECT: { ko: "반사", en: "Reflect" },
  INSEC_KICK: {  ko: "인섹킥",  en: "InSec Kick",},

  MS_UP: { ko: "이속↑", en: "MS ↑" },
  AS_UP: { ko: "공속↑", en: "AS ↑" },
  AS_DOWN: {  ko: "공속↓",  en: "AS ↓",},
  AD_UP: { ko: "공격력↑", en: "AD ↑" },
  AD_DOWN: { ko: "공격력↓", en: "AD ↓" },
  AP_UP: {  ko: "주문력↑",  en: "AP Buff",},

  DMG_REDUCE: { ko: "피해감소", en: "Damage Reduction" },
  DODGE: { ko: "회피", en: "Dodge" },
  TENACITY: { ko: "강인함", en: "Tenacity" },
  CRIT: { ko: "치명타",  en: "Critical Strike" },
  EXECUTE: {  ko: "처형",  en: "Execute",},
  RANGE_UP: {  ko: "사거리↑",  en: "Range↑",},
  PIERCE: {  ko: "관통",  en: "Piercing",},



  VISION: { ko: "시야", en: "Vision" },
  REVEALED: { ko: "드러냄", en: "Revealed" },
  TRUE_SIGHT: { ko: "절대시야", en: "True Sight" },
  SPELL_SHIELD: { ko: "주문방어", en: "Spell Shield" },
  CC_IMMUNE: { ko: "CC면역", en: "CC Immune" },
  CC_CLEANSE: { ko: "CC해제", en: "Cleanse" },
  STEALTH: { ko: "은신", en: "Stealth" },
  INVISIBILITY: { ko: "투명화", en: "Invisibility" },
  CAMOUFLAGE: { ko: "위장",  en: "Camouflage" },
  SLOW_RESIST: { ko: "둔화저항", en: "Slow Resist" },
  SLOW_IMMUNE: { ko: "둔화면역", en: "Slow Immune" },
  GHOSTING: { ko: "유체화", en: "Ghosting" },
  WINDSHIELD: { ko: "장막", en: "Projectile Block" },
  PROTECTIVE_ZONE: { ko: "보호 결계", en: "Protective Zone"},



  /* 점멸 연계 */
  Q_FLASH: { ko: "Q플", en: "QF" },
  W_FLASH: { ko: "W플", en: "WF" },
  E_FLASH: { ko: "E플", en: "EF" },
  R_FLASH: { ko: "R플", en: "RF" },

  /* 피흡 */
  LIFESTEAL: { ko: "피흡", en: "Lifesteal" },
  HEAL: { ko: "회복", en: "Heal" },
  SHIELD: { ko: "보호막", en: "Shield" },
  MAX_HP_UP: {  ko: "최대체력↑",  en: "Max HP Increase",},

  MANA_RESTORE: { ko: "마나회복", en: "Mana Restore" },
  ENERGY_RESTORE: {  ko: "기력회복",  en: "Energy Restore",},


  AR_SHRED: { ko: "방깍", en: "AR Shred" },
  MR_SHRED: { ko: "마깍", en: "MR Shred" },
  AR_MR_SHRED: { ko: "방마깍", en: "AR+MR Shred" },
  AR_PEN: { ko: "방관", en: "AR Penet" },
  MR_PEN: { ko: "마관", en: "AR Penet" },
  AR_MR_PEN: { ko: "방마관", en: "AR+MR Penet" },
  GW: { ko: "치감", en: "Grievous Wounds" },

  HARD_CC: {  ko: "하드CC",  en: "Hard CC",},
  STUN: { ko: "기절", en: "Stun" },
  ROOT: { ko: "속박", en: "Root" },
  SLOW: { ko: "둔화", en: "Slow" },
  TAUNT: { ko: "도발", en: "Taunt" },
  SLEEP: { ko: "수면", en: "Sleep" },
  ANTI_DASH: { ko: "돌진방해", en: "Anti-Dash" },
  KNOCKBACK: { ko: "넉백", en: "Knockback" },
  AIRBORNE: { ko: "에어본", en: "Airborne" },
  SUSPENDING: {  ko: "체공",  en: "Suspending",},
  SUPPRESS: { ko: "제압", en: "Suppress" },

  GRAB: { ko: "그렙", en: "Grab" },
  CHARM: { ko: "매혹", en: "Charm" },
  SILENCE: { ko: "침묵", en: "Silence" },
  GROUNDED: { ko: "이동기X", en: "Grounded" },
  FEAR: { ko: "공포", en: "Fear" },
  CANCEL: {  ko: "캔슬",  en: "Channel Cancel",},
  BERSERK: { ko: "광란", en: "Berserk" },
  NEARSIGHT: { ko: "시야감소", en: "Nearsight" },
  BLIND: { ko: "실명", en: "Blind" },
  POLYMORPH: { ko: "변이", en: "Polymorph" },
  UNSTOPPABLE: { ko: "저지불가", en: "Unstoppable" },

  
}

export const TAG_DESC: Partial<Record<TagId, { ko: string; en: string }>> = {
  /* 이동 / 위치 */
ALLY_TP_OK: {
  ko: "아군이 텔을 사용할 수 있음",
  en: "Allies can use Teleport on this target",
},
WALL_HOP: {
  ko: "벽을 넘을 수 있음",
  en: "Can hop over walls",
},

/* 전투 메커니즘 */
AA_RESET: {
  ko: "평타를 치고 스킬을 눌렀을 때\n바로 다시 평타를 칠 수 있음",
  en: "Using a skill right after\nan auto-attack resets the auto-attack timer",
},
UNTARGETABLE: {
  ko: "타겟 불가",
  en: "Cannot be targeted",
},
TOWER_DODGE: {
  ko: "타워데미지 무시",
  en: "Ignores turret damage",
},
SHIELD_BREAK: {
  ko: "보호막 파괴 해버림",
  en: "Breaks shields",
},
WALL: {
  ko: "벽 생성",
  en: "Creates a wall",
},
SUPPRESSION: {
  ko: "해당 위치에 고정",
  en: "Pins the target in place",
},
REVIVE: {
  ko: "부활",
  en: "Revives after death",
},
INVULNERABLE: {
  ko: "피해를 받아도 체력이 깎이지 않음",
  en: "Takes no damage and does not lose health",
},
REFLECT: {
  ko: "투사체를 반사함",
  en: "Reflects projectiles",
},

INSEC_KICK: {
  ko: "대상을 뒤로 밀치는 스킬을\n점멸과 연계하여 반대로 밀치는 플레이\n(전직 프로게이머 현 스트리머 INSEC의 이름을 딴 기술)",
  en: "Using a knockback skill with Flash to push a target toward allies.\nA play where you Flash behind an enemy and knock them back; known as the ''InSec kick''\nThe ''InSec'': Flashing during a knockback ability to redirect the enemy toward your team.",
},


MS_UP: {
  ko: "이동속도 증가",
  en: "Increases movement speed",
},

AS_UP: { ko: "공격속도 증가", en: "Increases attack speed" },
AS_DOWN: {  ko: "상대 공격속도 감소",  en: "Reduces attack speed",},
AD_UP: { ko: "공격력 증가", en: "Increases attack damage" },
AD_DOWN: { ko: "상대 공격력 감소", en: "Reduces attack damage" },
AP_UP: {  ko: "주문력 증가",  en: "Increases ability power",},


DMG_REDUCE: {
  ko: "피해감소",
  en: "Reduces incoming damage",
},
DODGE: {
  ko: "평타를 무시함",
  en: "Dodges basic attacks",
},
TENACITY: {
  ko: "기절, 속박, 둔화, 도발, 공포, 침묵, 실명, 수면, 변이\n지속시간 감소",
  en: "Reduces crowd control duration",
},
CRIT: {
  ko: "치명타가 적용됨",
  en: "Applies critical strikes",
},
EXECUTE: {
  ko: "체력이 일정 수치 이하일 때 즉시처치",
  en: "Instantly kills targets below a health threshold",
},

RANGE_UP: {
  ko: "기본 공격의 사거리가 증가함",
  en: "Increases attack range",
},

PIERCE: {
  ko: "대상을 관통하여 뒤에 있는 적에게도 적중함",
  en: "Pierces through targets and can hit enemies behind them",
},



VISION: {
  ko: "시야를 보여줌",
  en: "Grants vision",
},
REVEALED: {
  ko: "적중한 상대의 모습이 보이지만\n은신, 투명화를 발견하지는 못함",
  en: "Reveals the target, but does not reveal stealth or invisibility",
},
TRUE_SIGHT: {
  ko: "은신, 투명화 까지 모두 보여줌",
  en: "Reveals stealth and invisibility",
},
SPELL_SHIELD: {
  ko: "주문을 한번 막아줌",
  en: "Blocks a single spell",
},
CC_IMMUNE: {
  ko: "CC가 걸리지 않음",
  en: "Immune to crowd control",
},
CC_CLEANSE: {
  ko: "걸려있는 CC를 해제함",
  en: "Removes existing crowd control effects",
},
STEALTH: {
  ko: "상대 챔피언 근처, 핑와에 발각됨",
  en: "Revealed near enemy champions or Control Wards",
},
INVISIBILITY: {
  ko: "상대 챔피언, 핑와에 발각되지 않음\n단, 절대시야에는 보임",
  en: "Not revealed by enemy champions or Control Wards, but visible to true sight",
},
CAMOUFLAGE: {
  ko: "정체를 알 수 없음.\n근처 적 챔피언이나 핑와에 발각됨",
  en: "Revealed by nearby enemy champions or Control Wards\nInvisible from a distance",
},

SLOW_RESIST: { ko: "둔화효과 감소", en: "Reduces the strength of slows" },

SLOW_IMMUNE: {
  ko: "둔화가 걸려도 무시함",
  en: "Ignores slow effects",
},
GHOSTING: {
  ko: "유닛을 통과할 수 있게 됨",
  en: "Can move through units",
},
WINDSHIELD: {
  ko: "투사체를 막을 수 있음",
  en: "Blocks projectiles",
},
PROTECTIVE_ZONE: {
  ko: "범위 안 아군이 기본 공격을 맞지 않음",
  en: "Allies inside the zone dodge basic attacks",
},


/* 점멸 연계 */
Q_FLASH: {
  ko: "Q를 쓰고 바로 점멸을 썼을 때\n스킬이 유효함",
  en: "Casting Q then immediately Flash keeps the skill effective",
},
W_FLASH: {
  ko: "W를 쓰고 바로 점멸을 썼을 때\n스킬이 유효함",
  en: "Casting W then immediately Flash keeps the skill effective",
},
E_FLASH: {
  ko: "E를 쓰고 바로 점멸을 썼을 때\n스킬이 유효함",
  en: "Casting E then immediately Flash keeps the skill effective",
},
R_FLASH: {
  ko: "R을 쓰고 바로 점멸을 썼을 때\n스킬이 유효함",
  en: "Casting R then immediately Flash keeps the skill effective",
},

/* 피흡 */
LIFESTEAL: {
  ko: "피해량에 비례하여 생명력이 회복됨",
  en: "Heals based on damage dealt",
},
HEAL: {
  ko: "생명력 회복",
  en: "Restores health",
},
SHIELD: {
  ko: "보호막",
  en: "Grants a shield",
},
MAX_HP_UP: {
  ko: "최대 체력 증가\n(치감 효과에 영향을 받지 않음)",
  en: "Increases maximum health. (Not affected by Grievous Wounds)",
},

MANA_RESTORE: {
  ko: "마나를 회복함",
  en: "Restores mana",
},
ENERGY_RESTORE: {  
  ko: "기력을 회복함",  
  en: "Energy Restore",
},


AR_SHRED: {
  ko: "방어력 감소",
  en: "Reduces armor",
},
MR_SHRED: {
  ko: "마법저항력 감소",
  en: "Reduces magic resist",
},
AR_MR_SHRED: {
  ko: "방어력, 마법저항력 감소",
  en: "Reduces armor and magic resist",
},
AR_PEN: { 
  ko: "방어력 관통", 
  en: "Armor Penetration" 
},
  MR_PEN: { 
    ko: "마법 저항력 관통", 
    en: "Magic resist penetration" 
},
  AR_MR_PEN: { 
    ko: "방어력, 마법 저항력 관통", 
    en: "Armor and magic penetration" 
},


GW: {
  ko: "치유효과 감소",
  en: "Reduces healing effects",
},



HARD_CC: {
  ko: "기절, 속박, 그랩, 넉백, 에어본, 제압, 수면, 매혹, 도발",
  en: "Strong crowd control that completely prevents actions\n(e.g. stun, knock-up, suppress)",
},

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
  ko: "상대가 나를 강제로 기본공격만 하게 만듦\n(클린즈 계열로 해제 가능)",
  en: "Forces the target to basic attack you (can be cleansed)",
},
SLEEP: {
  ko: "아무런 행동을 할 수 없지만\n즉발적인 공격을 받으면 해제됨(지속피해 제외)\n(클린즈 계열로 해제 가능)",
  en: "Cannot act, but ends immediately when damaged (can be cleansed)",
},
ANTI_DASH: {
  ko: "돌진스킬을 방해하고 에어본과 기절을 검",
  en: "Stops dashes and can apply knock-up or stun",
},


AIRBORNE: {
  ko: "공중에 띄움 - 최상급 CC\n(클린즈 계열로 해제 불가능)",
  en: "Knocks the target airborne — top-tier CC (cannot be cleansed)",
},
SUSPENDING: {
  ko: "공중에 띄워서 거는 기절\n강인함의 영향을 받고, 클린즈 계열로 해제 가능\n야스오 궁 가능",
  en: "A stun that also knocks up\nAffected by Tenacity and can be removed by Cleanse\nYasuo can follow up with his ult",
},
KNOCKBACK: {
  ko: "에어본 + 밀어냄 - 최상급 CC",
  en: "Knocks the target back",
},
GRAB: {
  ko: "에어본 + 잡아당김 - 최상급 CC",
  en: "Pulls the target",
},


SUPPRESS: {
  ko: "상대를 아무것도 할 수 없게 만듬\n스펠 사용도 불가능\n정화(스펠)로는 해제 불가",
  en: "Prevents all actions and summoner spells (cannot be cleansed by Cleanse)",
},

CHARM: {
  ko: "대상을 내 쪽으로 걸어오게 만듦\n(클린즈 계열로 해제 가능)",
  en: "Forces the target to walk toward you (can be cleansed)",
},
SILENCE: {
  ko: "스킬을 사용하지 못하게 만듦\n(클린즈 계열로 해제 가능)",
  en: "Prevents ability casts (can be cleansed)",
},
GROUNDED: {
  ko: "이동스킬(점멸포함)을 사용하지 못하게 만듦",
  en: "Prevents the use of movement abilities",
},
FEAR: {
  ko: "대상이 시전자 반대쪽으로 도망치게 만듦\n(클린즈 계열로 해제 가능)",
  en: "Forces the target to flee away from you (can be cleansed)",
},
CANCEL: {
  ko: "지속스킬을 중단시킴",
  en: "Interrupts channeling abilities",
},
BERSERK: {
  ko: "주변 유닛을 공격함(자신의 아군 우선)\n(클린즈 계열로 해제 가능)",
  en: "Attacks nearby units, prioritizing allies (can be cleansed)",
},
NEARSIGHT: {
  ko: "시야가 축소됨",
  en: "Reduces vision range",
},
BLIND: {
  ko: "평타를 때려도 빗나가게 만듬\n(클린즈 계열로 해제 가능)",
  en: "Basic attacks miss (can be cleansed)",
},
POLYMORPH: {
  ko: "상대를 동물로 변이\n침묵, 무장해제, 고정둔화(60)\n고정둔화는 둔화저항을 무시함\n(단,둔화면역은 무시못함)",
  en: "Transforms the target, preventing attacks and ability casts",
},
UNSTOPPABLE: {
  ko: "CC 계열로 막을 수 없음",
  en: "Cannot be stopped by crowd control",
},

};


export type TagId =
  /* 이동 / 위치 */
  | "ALLY_TP_OK"
  | "WALL_HOP"

  /* 전투 메커니즘 */
  | "AA_RESET"
  | "UNTARGETABLE"
  | "TOWER_DODGE"
  | "SHIELD_BREAK"
  | "SHIELD_PIERCE"
  | "TERRAIN"
  | "SUPPRESS" // 제압
  | "TETHER"
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


    // 시야
  | "VISION"
  | "REVEALED"
  | "TRUE_SIGHT"
  | "POSITION_REVEAL"
  | "POSITION_HIDDEN"
  | "POSITION_INDICATOR"
  | "POSITION_TRACK"
  | "FEEDBACK_SOUND"
  | "FEEDBACK_EFFECT"
  | "FEEDBACK_INDICATOR"



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

  | "DAMAGE_NULLIFY"
  | "INTERCEPT_PROJECTILE"
  


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
  | "UNSTOPPABLE"
  | "BUFF_FORM"


  | "THE_COPYPASTA";
  


export const TAG_LABEL: Record<TagId, { ko: string; en: string }> = {


  /* =========================
 * 1) 스탯 / 자원 변화
 * ========================= */
MS_UP: { ko: "이속↑", en: "MS ↑" },
AS_UP: { ko: "공속↑", en: "AS ↑" },
AS_DOWN: { ko: "공속↓", en: "AS ↓" },
AD_UP: { ko: "공격력↑", en: "AD ↑" },
AD_DOWN: { ko: "공격력↓", en: "AD ↓" },
AP_UP: { ko: "주문력↑", en: "AP Buff" },
RANGE_UP: { ko: "사거리↑", en: "Range↑" },
CRIT: { ko: "치명타", en: "Critical" },

/* =========================
 * 2) 이동 / 위치
 * ========================= */
ALLY_TP_OK: { ko: "아군텔", en: "Ally TP" },
WALL_HOP: { ko: "벽넘기", en: "Wall Hop" },
TERRAIN: { ko: "벽", en: "TERRAIN" },
GHOSTING: { ko: "유체화", en: "Ghosting" },

/* =========================
 * 3) 전투 메커니즘
 * ========================= */
AA_RESET: { ko: "평캔", en: "AA Reset" },
UNTARGETABLE: { ko: "타겟불가", en: "Untargetable" },
TOWER_DODGE: { ko: "타워회피", en: "Tower Dodge" },
DODGE: { ko: "회피", en: "Dodge" },
PIERCE: { ko: "관통", en: "Piercing" },
EXECUTE: { ko: "처형", en: "Execute" },

/* =========================
 * 4) 생존 / 방어
 * ========================= */
INVULNERABLE: { ko: "무적", en: "Invulnerable" },
REVIVE: { ko: "부활", en: "Revive" },
DMG_REDUCE: { ko: "피해감소", en: "Damage Reduction" },
TENACITY: { ko: "강인함", en: "Tenacity" },
CC_CLEANSE: { ko: "CC해제", en: "Cleanse" },
CC_IMMUNE: { ko: "CC면역", en: "CC Immune" },
SLOW_RESIST: { ko: "둔화저항", en: "Slow Resist" },
SLOW_IMMUNE: { ko: "둔화면역", en: "Slow Immune" },
UNSTOPPABLE: { ko: "저지불가", en: "Unstoppable" },
BUFF_FORM: { ko: "자가버프", en: "Buff Form" },


/* =========================
 * 5) 시야 / 은신
 * ========================= */
STEALTH: { ko: "은신", en: "Stealth" },
INVISIBILITY: { ko: "투명", en: "Invisibility" },
CAMOUFLAGE: { ko: "위장", en: "Camouflage" },

NEARSIGHT: { ko: "시야감소", en: "Nearsight" },
BLIND: { ko: "실명", en: "Blind" },

VISION: { ko: "시야", en: "Vision" },
REVEALED: { ko: "드러냄", en: "Revealed" },
TRUE_SIGHT: { ko: "절대시야", en: "True Sight" },
POSITION_REVEAL: { ko: "위치노출", en: "Position Reveal" },
POSITION_HIDDEN: { ko: "위치 은닉", en: "Position Hidden" },
POSITION_INDICATOR: { ko: "위치 단서", en: "Position Indicator" },
FEEDBACK_SOUND:     { ko: "소리 피드백",     en: "Sound Feedback"     },
FEEDBACK_EFFECT:    { ko: "이펙트 피드백",  en: "Effect Feedback"    },
FEEDBACK_INDICATOR: { ko: "피드백",     en: "Indicator Feedback"          },



POSITION_TRACK: { ko: "위치추적", en: "Position Tracking" },


/* =========================
 * 6) 특수(개인 스킬/상호작용)
 * ========================= */
REFLECT: { ko: "반사", en: "Reflect" },
WINDSHIELD: { ko: "장막", en: "Projectile Block" },
PROTECTIVE_ZONE: { ko: "보호 결계", en: "Protective Zone" },
POLYMORPH: { ko: "변이", en: "Polymorph" },
BERSERK: { ko: "광란", en: "Berserk" },
ANTI_DASH: { ko: "돌진방해", en: "Anti-Dash" },
GROUNDED: { ko: "이동기금지", en: "Grounded" },
SPELL_SHIELD: { ko: "주문방어", en: "Spell Shield" },
DAMAGE_NULLIFY: { ko: "피해 무효화", en: "Damage Nullify" },
INTERCEPT_PROJECTILE: { ko: "투사체 차단", en: "Projectile Delete" },
  


/* =========================
 * 7) 회복 / 자원 회복
 * ========================= */
HEAL: { ko: "회복", en: "Heal" },
SHIELD: { ko: "보호막", en: "Shield" },
MAX_HP_UP: { ko: "최대체력↑", en: "Max HP Increase" },
LIFESTEAL: { ko: "피흡", en: "Lifesteal" },
MANA_RESTORE: { ko: "마나회복", en: "Mana Restore" },
ENERGY_RESTORE: { ko: "기력회복", en: "Energy Restore" },

/* =========================
 * 8) 파괴 / 관통 / 치감
 * ========================= */
SHIELD_BREAK:  { ko: "쉴드파괴", en: "Shield Break"  },
SHIELD_PIERCE: { ko: "실드관통", en: "Shield Pierce" },
AR_SHRED: { ko: "방깍", en: "AR Shred" },
MR_SHRED: { ko: "마깍", en: "MR Shred" },
AR_MR_SHRED: { ko: "방마깍", en: "AR+MR Shred" },
AR_PEN: { ko: "방관", en: "AR Penet" },
MR_PEN: { ko: "마관", en: "AR Penet" },
AR_MR_PEN: { ko: "방마관", en: "AR+MR Penet" },
GW: { ko: "치감", en: "Grievous Wounds" },

/* =========================
 * 9) CC
 * ========================= */
SLOW: { ko: "둔화", en: "Slow" },
TETHER: { ko: "사슬", en: "Tether" },
SILENCE: { ko: "침묵", en: "Silence" },
CANCEL: { ko: "캔슬", en: "Channel Cancel" },

HARD_CC: { ko: "하드CC", en: "Hard CC" },
STUN: { ko: "기절", en: "Stun" },
ROOT: { ko: "속박", en: "Root" },
KNOCKBACK: { ko: "넉백", en: "Knockback" },
GRAB: { ko: "그렙", en: "Grab" },
AIRBORNE: { ko: "에어본", en: "Airborne" },
SUSPENDING: { ko: "체공", en: "Suspending" },
SUPPRESS: { ko: "제압", en: "Suppress" },
SLEEP: { ko: "수면", en: "Sleep" },
FEAR: { ko: "공포", en: "Fear" },
CHARM: { ko: "매혹", en: "Charm" },
TAUNT: { ko: "도발", en: "Taunt" },




/* =========================
 * 10) 점멸 연계
 * ========================= */
Q_FLASH: { ko: "Q플", en: "QF" },
W_FLASH: { ko: "W플", en: "WF" },
E_FLASH: { ko: "E플", en: "EF" },
R_FLASH: { ko: "R플", en: "RF" },
INSEC_KICK: { ko: "인섹킥", en: "InSec Kick" },



THE_COPYPASTA: { ko: "그 긴거", en: "The Copypasta"}

  
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
  ko: "타워데미지 무시\n즉, 웬만한 투사체 데미지 무시",
  en: "Ignores turret damage",
},
SHIELD_BREAK: {
  ko: "상대의 보호막을 파괴",
  en: "Breaks shields",
},
SHIELD_PIERCE: {
  ko: "실드를 무시하고 체력에 직접 피해를 줌",
  en: "Bypasses shields and deals damage directly to health",
},
TERRAIN: {
  ko: "벽 생성\n(생성될 때 대체로 에어본)",
  en: "Creates a wall",
},
TETHER: {
  ko: "연결된 대상이 범위를 벗어나지 않으면\n스킬이 계속 유효하거나 추가 효과가 발동함",
  en: "If the linked target does not leave the range,\nthe skill remains active or \nits additional effects will trigger.",
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
  en: "A play that combines a knockback skill with \nFlash to push a target in the opposite direction\n(named after former pro gamer \nand current streamer Insec)",
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
  ko: "기절, 속박, 둔화, 도발, 공포, 매혹, 침묵, 실명, 수면, 변이\n지속시간 감소",
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
  en: "Pierces through targets and can \nhit enemies behind them",
},



VISION: {
  ko: "시야를 보여줌",
  en: "Grants vision",
},
REVEALED: {
  ko: "대상 챔피언만 보여줌 (주변 시야 없음)\n은신 전에 적중한 경우 → 보임\n은신 후에 적중한 경우 → 보이지 않음",
  en: "Reveals only the target champion (no surrounding vision)\nReveals if hit before stealth\nDoes not reveal if hit after stealth",
},
TRUE_SIGHT: {
  ko: "대상과 대상 주변의 약간의 시야를 제공함\n은신 상태와 무관하게 타겟에 디버프로 붙어 계속 보임",
  en: "Reveals the target and grants a small amount of surrounding vision\nApplies a debuff that persists regardless of stealth",
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
  ko: "걸려있는 CC를 해제함\n에어본도 해제가 가능하지만 무빙은 하지 못함\n넉백, 그렙도 해제가 가능하지만 이동은 끝까지 이루어짐",
  en: "Removes existing crowd control effects",
},
STEALTH: {
  ko: "투명화와 위장으로 나뉨\n절대시야에는 보이고, 드러냄 스킬에는 맞고 은신하면 보임",
  en: "Invisibility and Camouflage",
},
INVISIBILITY: {
  ko: "은신류 - 상대 챔피언, 핑와에 발각되지 않음\n단, 절대시야에는 보이고, 드러냄 스킬에는 맞고 은신하면 보임",
  en: "Stealth class\nInvisible units cannot be revealed \nby enemy champions or Control Wards\nOnly revealed by True Sight.",
},
CAMOUFLAGE: {
  ko: "은신류 - 상대 챔피언, 핑와에 발각 됨\n단, 절대시야에는 보이고, 드러냄 스킬에는 맞고 은신하면 보임",
  en: "Stealth class\nRevealed by nearby enemy champions \nor Control Wards.",
},


POSITION_REVEAL: {
  ko: "상대시야 밖에서 시전자가 스킬을 사용했을 때\n스킬 효과, 시야 제공으로 인해 사용자의 위치가 적에게 드러남",
  en: "Casting a skill from fog of war\n reveals the caster’s location to enemies",
},
POSITION_HIDDEN: {
  ko: "시전해도 위치 정보가 노출되지 않음",
  en: "Casting this ability does not reveal your position",
},
POSITION_INDICATOR: {
  ko: "내 위치가 직접 노출되지 않지만\n스킬의 장판이나 이펙트로 내 위치가 간접적 노출.",
  en: "My position is not directly revealed,\nbut the skill’s zone or effects allow\nthe enemy to indirectly infer my location",
},
POSITION_TRACK: {
  ko: "스킬 적중 시 효과음, 표식, 피해 반응 등으로 \n적의 대략적인 위치를 추측 가능",
  en: "On hit, audio/visual cues allow \nenemies to estimate the caster’s location",
},
FEEDBACK_SOUND: {
  ko: "스킬이 시야를 제공하지 않지만\n적중 시 소리로 상대의 존재를 파악할 수 있음",
  en: "The skill does not grant vision\nbut audio cues upon hit reveal the enemy’s presence",
},
FEEDBACK_EFFECT: {
  ko: "스킬이 시야를 제공하지 않지만\n적중 시 이펙트로 상대의 존재를 파악할 수 있음",
  en: "The skill does not grant vision\nbut visual effects upon hit reveal the enemy’s presence",
},
FEEDBACK_INDICATOR: {
  ko: "소리나 이펙트 없이도 스킬 상태 변화나 \n버프/디버프 반응으로\n적의 존재를 간접적으로 알 수 있음.",
  en: "Indirectly detects enemy presence \nthrough skill state changes or buff/debuff reactions, \nwithout sound or visual effects.",
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
  en: "Increases maximum health. \n(Not affected by Grievous Wounds)",
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



HARD_CC: {
  ko: "챔피언이 본인의 의지로 움직일 수 없게 만드는 제어기\n기절, 속박, 그렙, 넉백, 에어본, 체공, 제압, 수면, 공포, 매혹, 도발",
  en: "Stun, Root, Grab, Knockback, Knockup,\nSuspension, Sleep, Fear, Charm, Taunt",
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
  ko: "상대가 나를 강제로 기본공격만 하게 만듦\n(클린즈 계열로 해제 가능)\n단 시전자가 죽으면 도발이 해제됨",
  en: "Forces the target to basic attack you \n(can be cleansed)\nHowever, if the caster dies, the taunt is removed",
},
SLEEP: {
  ko: "아무런 행동을 할 수 없지만\n즉발적인 공격을 받으면 해제됨(지속피해 제외)\n(클린즈 계열로 해제 가능)",
  en: "Cannot act, but ends immediately \nwhen damaged (can be cleansed)",
},
ANTI_DASH: {
  ko: "돌진스킬을 방해하고 에어본과 기절을 검",
  en: "Stops dashes and can apply knock-up or stun",
},


AIRBORNE: {
  ko: "공중에 띄움 - 최상급 CC\n(클린즈 계열로 해제 불가능)\n그랩, 넉백, 체공, 에어본",
  en: "Knocks the target airborne — top-tier CC \n(cannot be cleansed)\nGrab, Knockback, Suspending, Airborne",
},
SUSPENDING: {
  ko: "공중에 띄워서 거는 기절\n야스오 궁 가능\n(강인함의 영향을 받고, 클린즈 계열로 해제 가능)",
  en: "A stun that also knocks up Affected \nby Tenacity and can be removed by Cleanse\nYasuo can follow up with his ult",
},
KNOCKBACK: {
  ko: "에어본 + 밀어냄 - 최상급 CC\n(클린즈 계열로 해제 불가능)",
  en: "Knocks the target back",
},
GRAB: {
  ko: "에어본 + 잡아당김 - 최상급 CC\n(클린즈 계열로 해제 불가능)",
  en: "Pulls the target",
},


SUPPRESS: {
  ko: "상대를 아무것도 할 수 없게 만듬\n스펠 사용도 불가능\n정화(스펠)로는 해제 불가\n수은 미카엘로 해제 가능",
  en: "Prevents all actions and summoner spells \n(cannot be cleansed by Cleanse)",
},

CHARM: {
  ko: "대상을 내 쪽으로 걸어오게 만듦\n(클린즈 계열로 해제 가능)\n단, 시전자가 죽으면 매혹이 해제됨",
  en: "Forces the target to walk toward you \n(can be cleansed)\nHowever, if the caster dies, the charm is removed",
},
SILENCE: {
  ko: "스킬을 사용하지 못하게 만듦\n(클린즈 계열로 해제 가능)",
  en: "Prevents ability casts (can be cleansed)",
},
GROUNDED: {
  ko: "이동스킬(돌진, 순간이동, 점멸, 아이템 벨트 등등)을 \n 사용하지 못하게 만드는 디버프",
  en: "A debuff that prevents the target from using movement abilities \n (dashes, blinks, teleports, etc.)",
},
FEAR: {
  ko: "대상이 시전자 반대쪽으로 도망치게 만듦\n(클린즈 계열로 해제 가능)",
  en: "Forces the target to flee away from you \n(can be cleansed)",
},
CANCEL: {
  ko: "지속스킬을 중단시킴",
  en: "Interrupts channeling abilities",
},
BERSERK: {
  ko: "주변 유닛을 공격함(자신의 아군 우선)\n(클린즈 계열로 해제 가능)",
  en: "Attacks nearby units, prioritizing allies\n(can be cleansed)",
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
  en: "Transforms the target, \npreventing attacks and ability casts",
},
UNSTOPPABLE: {
  ko: "CC 계열을 맞아도 시전자의 스킬이 유효함\n단, 저지불가 상태에서 적중한 CC가\n저지불가 종료 이후에도 남아있다면 CC효과 발동",
  en: "It cannot be blocked by CC\nHowever, if CC hits during an unstoppable state \nand the duration remains after the state ends, \nthe CC takes effect",
},

BUFF_FORM: {
  ko: "버프 형태의 스킬\nCC를 맞아도 취소되지 않음",
  en: "This ability applies a self-buff and cannot be canceled by CC\nCC effects still apply normally",
},

DAMAGE_NULLIFY: { ko: "브라움에게 가해지는 첫 피해를 무효", en: "Nullifies damage dealt to Braum." },
INTERCEPT_PROJECTILE: { ko: "브라움이 아군에게 날아가는 것을 대신 맞아줌\n이때 투사체가 사라질 수 도 있음", en: "Braum leaps to an ally to take the hit for them\nAt this time, the projectile may be destroyed." },


THE_COPYPASTA: { ko: "이게 크산테다 \n체력 4700 방어력 329 마저201인 챔피언👤이\n 저지불가🚫, 실드🛡, 벽🧱 넘기는 거 있고요.\n에어본🌪 있고, 심지어 쿨타임은 1️⃣초밖에 안되고 \n마나🧙‍♂️는 1️⃣5️⃣ 들고 \nw는 심지어 변신💫하면 쿨 초기화에다가 \n패시브는 고정피해🗡가 들어가며 \n그 다음에 방마저🥋 올리면📈 올릴수록📈 \n스킬 가속⏰이 생기고! \nq에 스킬가속⏰이 생기고 스킬 속도🚀가 빨라지고📈 \n그 다음에 공격력🗡 계수가 있어가지고 \nW가 그 이익- 으아아아악😱😱 - Showmaker", 
  en: "This is K'Sante: 4700 HP, 329 armor, 201 MR, \nwith Unstoppable, shield, wall-hop, \nairborne, 1s cooldown, 15 mana cost. \nW resets on transform, P deals true damage, \narmor/MR increase cooldown reduction, \nQ benefits from ability haste and projectile speed \n— AAAAAH — Showmaker"}

};


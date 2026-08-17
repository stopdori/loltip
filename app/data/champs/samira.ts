import type { ChampData } from "../interactions/types";
 

 
const samira: ChampData = {
 
  id: "samira",
 
  skills: {
 
    P: ["BUFF_STACK", "MS_UP", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"],
 
    Q: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "LIFESTEAL", "CRIT"],
 
    W: ["W_FLASH", "WINDSHIELD"],
 
    E: ["E_FLASH", "AS_UP", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "E", "CDR_RESET"],
 
    R: ["R_FLASH", "SEPARATOR", "ST_CONDITIONAL", "LIFESTEAL", "CRIT"],
 
  },
 

 
  vision: {
 
    P: [],
 
    Q: [],
 
    W: [],
 
    E: [],
 
    R: [],
 
  },
 

 
  gimmick: {
 
    P: { phases: [
      { label: { ko: "스타일", en: "Style" }, tags: ["BUFF_INTERACT", "BA", "Q", "W", "E"] },
      { label: { ko: "스타일 효과", en: "Style Effect" }, tags: ["MS_UP"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q 투사체", en: "Q Projectile" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "BUFF_STACK"] },
      { label: { ko: "Q 근접", en: "Q Melee" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "BUFF_STACK"] },
      { label: { ko: "EQ", en: "EQ" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "BUFF_STACK"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_PHYSICAL", "SKILL_CHANNEL", "AOE", "BUFF_STACK"] },
      { label: { ko: "W 장막", en: "W Windshield" }, tags: ["WINDSHIELD"] },
    ] },
 
    E: ["DMG_MAGIC", "DASH", "BUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "E", "CDR_RESET"],
 
    R: ["ST_CONDITIONAL", "STACK_CONSUME", "SEPARATOR", "DMG_PHYSICAL", "SKILL_CHANNEL", "PROJECTILE", "PIERCE", "AOE"],
 
  },
 

 
  notes: {
    skill: {
      note3: {
        ko: [
          "멀리서 [[BA]], Q로 스타일을 잘 쌓다가 \n EQW으로 한 번에 스타일 S 만들어서 R",
        ], en: [
          "Build up Style from range with [[BA]] and Q, \n then EQW to instantly max out Style to S rank and R",
        ] },
      note1: {

        ko: [
          "P는 좀 복잡함.",
          "[[BA]]는 원거리 공격이지만, \n 가까이 있는 적은 근접 공격. \n 근접 공격은 대상의 잃은 체력 비례 [[DMG_MAGIC]] 추가.",
          "[[IMMOBILIZING]]에 걸린 대상을 [[BA]] 공격 시 사미라가 [[DASH]]. \n 대상이 이미 [[AIRBORNE]] 상태라면 그 위치에서 0.5초 [[AIRBORNE]] 적용.",
          "[[BA]]와 스킬이 적중 시 스타일 [[BUFF_STACK]]. \n 최대 6스택 ( E, D, C, B, A, S 랭크 ) \n 스택당 [[MS_UP]] \n \n 단, 스타일 획득 불가 조건이 있음. \n 1. [[BA]]로 스타일을 획득했을 때 \n 다른 스킬로 스타일을 획득해야 다시 [[BA]]로 획득 가능. \n 2. 같은 스킬로 연속해서 스타일 획득 불가. \n 즉, [[BA]]와 [[BA]] 사이에 스킬을 섞는 느낌으로. \n \n",

          "Q는 3가지 형태로 사용 가능. \n \n 투사체 형태 \n [[PROJECTILE]]를 발사하여 [[DMG_PHYSICAL]]. \n \n 근접 형태 \n 근접 공격 범위 내의 적에게 사용하면 [[AOE]] [[DMG_PHYSICAL]]. \n \n 돌진 형태 \n E의 [[DASH]] 도중에 사용하면 \n [[DASH]] 경로 내의 모든 적에게 [[AOE]]로 적용. \n \n 3가지 형태 모두 \n [[LIFESTEAL]]이 있다면 적용. \n [[CRIT]] 피해 적용 가능. \n [[AOE]] 공격이라면 [[AOE]]로 적용. \n \n",           

          "W는 [[AOE]] [[DMG_PHYSICAL]]. \n [[WINDSHIELD]] 효과로 [[AOE]] 안으로 들어오는 적의 [[PROJECTILE]] 파괴. \n 디테일한 판정은 챔피언별로 상호작용 박스에 정리. \n \n",

          "E는 적, 구조물을 통과하여 [[DASH]]하여 [[AS_UP]]. \n 통과한 대상에게 [[DMG_MAGIC]]. \n 3초 이내 킬 관여 시 E [[CDR_RESET]]. \n \n",

          "R은 S랭크 일 때 주변에 적이 있어야지만 사용 가능. \n 쿨타임 5초. \n 사용하고 나면 랭크 초기화. \n \n 사용하면 주변에 [[PIERCE]] [[PROJECTILE]]를 난사하여 [[DMG_PHYSICAL]]. \n [[LIFESTEAL]]이 있다면 적용. \n [[CRIT]] 피해 적용 가능.",
        ],

        en: [
          "P is a bit complex.",
          "[[BA]] is a ranged attack, \n but against nearby enemies it becomes a melee attack. \n Melee attacks add [[DMG_MAGIC]] based on the target's missing health.",
          "[[BA]] attacking a target under [[IMMOBILIZING]] makes Samira [[DASH]] to them. \n If the target is already [[AIRBORNE]], applies [[AIRBORNE]] in place for 0.5s.",
          "Hitting with [[BA]] or a skill grants Style [[BUFF_STACK]]. \n Max 6 stacks (E, D, C, B, A, S rank) \n [[MS_UP]] per stack \n \n However, there are conditions that prevent gaining Style. \n 1. After gaining Style from [[BA]], \n you must gain Style from another skill before [[BA]] can grant it again. \n 2. Cannot gain Style consecutively from the same skill. \n In other words, alternate skills between [[BA]] and [[BA]]. \n \n",

          "Q can be used in 3 forms. \n \n Projectile form \n Fires a [[PROJECTILE]] dealing [[DMG_PHYSICAL]]. \n \n Melee form \n Used against an enemy within melee range, deals [[AOE]] [[DMG_PHYSICAL]]. \n \n Dash form \n Used during E's [[DASH]], \n applies [[AOE]] to all enemies along the [[DASH]] path. \n \n All 3 forms \n apply [[LIFESTEAL]] if present. \n Can [[CRIT]]. \n If it's an [[AOE]] attack, applies as [[AOE]]. \n \n",

          "W deals [[AOE]] [[DMG_PHYSICAL]]. \n Its [[WINDSHIELD]] effect destroys enemy [[PROJECTILE]]s entering the [[AOE]]. \n Detailed interactions are organized per champion in the interaction box. \n \n",

          "E [[DASH]]es through enemies and structures, granting [[AS_UP]]. \n Deals [[DMG_MAGIC]] to targets passed through. \n E [[CDR_RESET]] on a takedown within 3s. \n \n",

          "R can only be used at S rank when there are enemies nearby. \n 5s cooldown. \n Resets Style rank after use. \n \n Fires a barrage of [[PIERCE]] [[PROJECTILE]]s around her, dealing [[DMG_PHYSICAL]]. \n Applies [[LIFESTEAL]] if present. \n Can [[CRIT]].",
        ]

      },

      note2: {
 
        ko: [
        "스킬로 피해를 입히지 않으면 스타일이 사라짐.",
        "P의 [[AIRBORNE]] 추가 효과는 \n 그 자리에서 새로운 [[AIRBORNE]]을 적용하기 때문에 \n [[GRAB]], [[KNOCKBACK]] 대상 공격 시 이동이 멈출 수 있음.", 
        "[[W_FLASH]]은 가능. \n 하지만, W가 즉발스킬이라 최초 데미지는 들어가지 않음.", 
        "R은 미니언에게는 25%의 피해.",
        "R 사용 중에 E 사용 가능."
      ],
 
        en: [
        "If Style deals no skill damage, it disappears.",
        "P's bonus [[AIRBORNE]] effect applies a new [[AIRBORNE]] in place, \n so attacking a [[GRAB]] or [[KNOCKBACK]] target can stop their movement.",
        "[[W_FLASH]] is possible. \n However, since W is an instant-cast skill, the initial hit's damage does not land.",
        "R deals 25% damage to minions.",
        "E can be used while R is active."
      ]

        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },
 

 
  ultCooldown: {
 
    6: 5,
 
    11: 5,
 
    16: 5,
 
  },
 

 
};
 

 
export default samira;
 

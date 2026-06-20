import type { ChampData } from "../interactions/types";

const leesin: ChampData = {
  id: "leesin",
  skills: {
    P: ["AS_UP", "SEPARATOR", "ST_CONDITIONAL", "ENERGY_RESTORE"],

    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["TRUE_SIGHT"] },
      { label: { ko: "Q2", en: "Q2" }, tags: ["SKILL_RECAST", "DASH", "WALL_HOP"] },
    ] },

    W: { phases: [
      { label: { ko: "W1", en: "W1" }, tags: ["W_FLASH", "SHIELD", "DASH", "WALL_HOP"] },
      { label: { ko: "W2", en: "W2" }, tags: ["SKILL_RECAST", "LIFESTEAL"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["E_FLASH", "REVEALED"] },
      { label: { ko: "E2", en: "E2" }, tags: ["SKILL_RECAST", "SLOW"] },
    ] },
    
    R: ["R_FLASH", "KNOCKBACK", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"],
  },

  vision: {
    P: [],
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["TRUE_SIGHT"] },
      { label: { ko: "Q2", en: "Q2" }, tags: [] },
    ] },
    W: [],
    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["REVEALED"] },
      { label: { ko: "E2", en: "E2" }, tags: [] },
    ] },
    R: [],
  },

  gimmick: {
    P: ["BUFF_INTERACT", "Q", "W", "E", "R"],
    
    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "MARK", "SEPARATOR", "BUFF_STACK", "X2"] },
      { label: { ko: "Q2", en: "Q2" }, tags: ["ST_CONDITIONAL", "SKILL_RECAST", "DMG_PHYSICAL", "SINGLE", "DASH", "SEPARATOR", "BUFF_STACK", "X2"] },
    ] },

    W: { phases: [
      { label: { ko: "W1", en: "W1" }, tags: ["TARGETED", "DASH", "SEPARATOR", "BUFF_STACK", "X2"] },
      { label: { ko: "W2", en: "W2" }, tags: ["SKILL_RECAST", "SEPARATOR", "BUFF_STACK", "X2"] },
    ] },

    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE", "SEPARATOR", "BUFF_STACK", "X2"] },
      { label: { ko: "E2", en: "E2" }, tags: ["SKILL_RECAST", "SLOW", "SEPARATOR", "BUFF_STACK", "X2"] },
    ] },

    R: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "SINGLE", "SEPARATOR", "BUFF_STACK", "X2", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_PHYSICAL", "AIRBORNE"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "소규모 전투가 정말 좋음.",
          "뒷라인 딜러 [[INSEC_KICK]]으로 배달하기.",
          "아군 뒷라인 물러오는 상대를 R로 [[KNOCKBACK]]해서 지켜주기.",
          "앞라인 탱커 R로 [[KNOCKBACK]]해서 뒷라인에 당구."
        ], en: [
          "Really strong in small skirmishes.",
          "Deliver the backline carry with an [[INSEC_KICK]].",
          "Protect your retreating backline by [[KNOCKBACK]]ing the chasing enemy with R.",
          "[[KNOCKBACK]] the enemy frontline tank with R to billiard them into the backline."
        ] },
      note1: {

        ko: [
          "P는 Q, W, E, R 스킬을 사용하면 [[BUFF_STACK]] [[X2]]. \n [[BA]] 공격 시 [[BUFF_STACK]]을 소모하여 [[AS_UP]], [[ENERGY_RESTORE]]. \n 2스택일 때 공격하면 기력 20 \n 1스택일 때 공격하면 기력 10 회복.",

          "Q1은 [[TRUE_SIGHT]]와 [[DMG_PHYSICAL]]. \n 적중하면 Q2 사용 가능. \n Q2는 [[DASH]] 하여 대상의 잃은 체력에 비례하여 [[DMG_PHYSICAL]].",

          "W1은 아군 또는 와드에 [[DASH]]하여 [[SHIELD]]. \n 대상이 아군 챔피언이면 대상에게도 [[SHIELD]]. \n W2는 모든 피해 [[LIFESTEAL]] [[BUFF]].",

          "E1은 주변 [[AOE]] [[DMG_MAGIC]]. \n 적중하면 E2 사용 가능. \n E2는 E1에 맞은 대상에게 [[SLOW]].",

          "R은 [[DMG_PHYSICAL]]와 [[KNOCKBACK]]. \n [[KNOCKBACK]]된 챔피언과 부딪힌 적은 \n [[AIRBORNE]]과 날아간 대상의 추가 체력 비례 [[DMG_PHYSICAL]].",
        ],

        en: [
          "P grants [[BUFF_STACK]] [[X2]] when you cast Q, W, E, or R. \n On [[BA]], consume [[BUFF_STACK]] for [[AS_UP]] and [[ENERGY_RESTORE]]. \n Attacking at 2 stacks restores 20 energy, \n attacking at 1 stack restores 10 energy.",

          "Q1 deals [[DMG_PHYSICAL]] and grants [[TRUE_SIGHT]]. \n On hit, Q2 becomes available. \n Q2 [[DASH]]es to the target, dealing [[DMG_PHYSICAL]] based on their missing health.",

          "W1 [[DASH]]es to an ally or ward, granting [[SHIELD]]. \n If the target is an ally champion, they also gain a [[SHIELD]]. \n W2 grants [[LIFESTEAL]] [[BUFF]] on all damage.",

          "E1 deals [[AOE]] [[DMG_MAGIC]] around Lee Sin. \n On hit, E2 becomes available. \n E2 applies [[SLOW]] to the target hit by E1.",

          "R deals [[DMG_PHYSICAL]] and [[KNOCKBACK]]s the target. \n Enemies hit by the knocked-back champion are \n [[AIRBORNE]] and take [[DMG_PHYSICAL]] based on the launched target's bonus health.",
        ]

      },

      note2: {
        ko: [
        "[[Q_FLASH]] 안됨",
        "Q1의 [[TRUE_SIGHT]]는 Q2를 사용하면 사라짐.",
        "E1으로 은신 챔피언을 드러낼 수 있음. \n 단, 은신하기 전에 맞혀야 보임.",
        "R에 부딪히는 대상은 미니언, 몬스터, 에픽몬스터 모두 포함."
      ],
        en: [
          "[[Q_FLASH]] not possible",
          "Q1's [[TRUE_SIGHT]] disappears when Q2 is used.",
          "E1 can reveal stealthed champions. \n However, they must be hit before entering stealth.",
          "Targets hit by the R billiard collision include minions, monsters, and epic monsters."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 85,
    16: 60,
  },

};

export default leesin;

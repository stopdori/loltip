import type { ChampData } from "../interactions/types";

const nami: ChampData = {
  id: "nami",
  skills: {
    P: ["ST_CONDITIONAL", "MS_UP"],
    Q: ["Q_FLASH", "SUSPENDING"],
    W: ["W_FLASH", "HEAL", "SEPARATOR", "ST_CONDITIONAL", "CHAIN"],
    E: ["E_FLASH", "BUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "SLOW"],
    R: ["AIRBORNE", "SLOW"],
  },

  vision: {
    P: [],
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: [] },
      { label: { ko: "Q 적중", en: "Q Hit" }, tags: ["VISION"] },
    ] },
    W: ["POSITION_REVEAL"],
    E: [],
    R: ["VISION"],
  },

  gimmick: {
    P: ["BUFF_STACK",],

    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "ZONE", "SUSPENDING"],

    W: { phases: [
      { label: { ko: "W 아군", en: "W Ally" }, tags: ["HEAL", "TIMING_CAST", "TARGETED", "PROJECTILE", "SEPARATOR", "ST_CONDITIONAL", "CHAIN"] },
      { label: { ko: "W 적군", en: "W Enemy" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "SEPARATOR", "ST_CONDITIONAL", "CHAIN"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["TARGETED"] },
      { label: { ko: "E 버프스택", en: "E Buff Stack" }, tags: ["ON_HIT", "DMG_MAGIC", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC", "SLOW"] },
    ] },
    
    R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "아군에게 W, E로 서포팅 하면서 \n Q, R로 들어오는 상대편 방해.",
          "R로 이니시는 [[PROJECTILE]] 속도가 느려서 생각보다 좀 별로."
        ], en: [
          "Support allies with W and E, \n while disrupting incoming enemies with Q and R.",
          "Initiating with R is less effective than expected due to its slow [[PROJECTILE]] speed.",
        ] },
      note1: {

        ko: [
          "P는 Q, W, E, R 스킬에 닿은 \n 본인 또는 아군 챔피언의 [[MS_UP]].",

          "Q는 [[AOE]] [[DMG_MAGIC]], [[SUSPENDING]].",

          "W는 아군 적군을 번갈아 [[CHAIN]]되는 [[PROJECTILE]] 발사. \n 아군은 [[HEAL]], 적군은 [[DMG_MAGIC]]. \n 최대 2번 [[CHAIN]]. \n [[CHAIN]]될 때마다 효과 감소. \n 같은 대상은 [[CHAIN]] 될 수 없음. \n EX) 아군 적군 아군 / 적군 아군 적군.",

          "E는 아군에게 [[BUFF_STACK]] [[X3]]. \n [[BA]] 또는 스킬에 [[STACK_CONSUME]]하여 [[DMG_MAGIC]]와 [[SLOW]]. \n [[AOE]] 스킬에 적용 시 [[DMG_MAGIC]] 효과 감소.",

          "R은 파도([[PROJECTILE]])를 날려 [[DMG_MAGIC]], [[AIRBORNE]], [[SLOW]]. \n [[SLOW]] 지속시간은 [[PROJECTILE]] 이동 거리에 비례. \n [[PROJECTILE]]에 닿은 아군은 \n P의 [[MS_UP]] 효과 2배.",
        ],

        en: [
          "P grants [[MS_UP]] to Nami or allied champions \n hit by her Q, W, E, or R skills.",

          "Q deals [[AOE]] [[DMG_MAGIC]] and applies [[SUSPENDING]].",

          "W fires a [[PROJECTILE]] that alternately [[CHAIN]]s between allies and enemies. \n Allies are [[HEAL]]ed, enemies take [[DMG_MAGIC]]. \n Can [[CHAIN]] up to 2 times. \n Each [[CHAIN]] reduces effectiveness. \n Cannot [[CHAIN]] to the same target twice. \n EX) Ally → Enemy → Ally / Enemy → Ally → Enemy.",

          "E applies [[BUFF_STACK]] [[X3]] to an ally. \n Each [[BA]] or skill [[STACK_CONSUME]]s to deal [[DMG_MAGIC]] and [[SLOW]]. \n [[DMG_MAGIC]] is reduced when applied via [[AOE]] skills.",

          "R launches a wave ([[PROJECTILE]]) dealing [[DMG_MAGIC]], [[AIRBORNE]], and [[SLOW]]. \n [[SLOW]] duration scales with [[PROJECTILE]] travel distance. \n Allies hit by the [[PROJECTILE]] \n gain double P's [[MS_UP]] effect.",
        ]

      },

      note2: {
        ko: [
        "W는 대상이 시야에 보여야 [[CHAIN]] 가능."
      ],
        en: [
          "W can only [[CHAIN]] to targets that are visible.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 110,
    16: 100,
  },

};

export default nami;

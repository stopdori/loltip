import type { ChampData } from "../interactions/types";

const garen: ChampData = {
  id: "garen",
  skills: {
    P: ["ST_CONDITIONAL", "HP_REGEN"],
    Q: ["AA_RESET", "CC_CLEANSE", "MS_UP", "SILENCE"],
    W: ["SHIELD", "DMG_REDUCE", "TENACITY"],
    E: ["E_FLASH", "SEPARATOR", "ST_CONDITIONAL", "AR_SHRED"],
    R: ["R_FLASH"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "BUFF"],

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["AA_RESET", "CC_CLEANSE"] },
      { label: { ko: "Q 타격", en: "Q Strike" }, tags: ["DMG_PHYSICAL", "ON_HIT", "SILENCE"] },
    ] },

    W: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS", "STACKING"] },
      { label: { ko: "W", en: "W" }, tags: ["DMG_REDUCE", "TENACITY"] },
    ] },

    E: ["DMG_PHYSICAL", "SKILL_TOGGLE", "AOE", "SEPARATOR", "ST_CONDITIONAL", "AR_SHRED"],
    R: ["DMG_TRUE", "TIMING_CAST"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "가렌 그냥 모르겠음. \n 고수분들 제보 부탁드림.",
        ], en: [
          "Not sure about Garen. \n Tips from Garen experts welcome.",
        ] },
      note1: {

        ko: [
          "P는 8초동안 피해, 스킬을 맞지 않으면 [[HP_REGEN]][[BUFF]]. \n 미니언에는 맞아도 유지.",
          "Q는 사용시 [[SLOW_CLEANSE]], [[MS_UP]]. \n 공격시 [[SILENCE]].",
          "W의 [[PASSIVE_BONUS]]는 [[STACKING]] [[AR_MR_UP]]. 최대 30. \n 사용시 4초간 [[DMG_REDUCE]] \n 0.75초간 [[TENACITY]], [[SHIELD]]",
          "E는 공속비례 [[AOE]] [[DMG_PHYSICAL]]. \n 6회 맞으면 [[AR_SHRED]] (여러대상 가능). \n 가장 가까운 대상 25% 추뎀.",
          "R은 [[TARGETED]] 잃은체력 비례 [[DMG_TRUE]].",
        ],

        en: [
          "P grants [[HP_REGEN]] [[BUFF]] if Garen takes no damage or skills for 8 seconds. \n Minion hits do not break the condition.",
          "Q grants [[SLOW_CLEANSE]] and [[MS_UP]] on use. \n Applies [[SILENCE]] on hit.",
          "W's [[PASSIVE_BONUS]] stacks [[AR_MR_UP]] up to 30. \n Active grants [[DMG_REDUCE]] for 4 seconds \n and [[TENACITY]] + [[SHIELD]] for 0.75 seconds.",
          "E deals [[AOE]] [[DMG_PHYSICAL]] scaled by attack speed. \n Applies [[AR_SHRED]] after 6 hits (can target multiple enemies). \n Deals 25% bonus damage to the nearest target.",
          "R is [[TARGETED]] [[DMG_TRUE]] scaled by the target's missing health.",
        ]

      },

      note2: {
        ko: [
        "W를 CC기를 맞기 전에 쓰면, CC기가 금방 해제됨", 
        "E는 어떤 CC를 맞아도 해제되지 않음",
      ],
        en: ["Using W before a CC hits reduces the CC duration significantly", "E cannot be cancelled by any CC"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default garen;

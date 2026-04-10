import type { ChampData } from "../interactions/types";

const jax: ChampData = {
  id: "jax",
  skills: {
    P: ["AS_UP"],
    Q: ["Q_FLASH", "DASH", "WALL_HOP"],
    W: ["AA_RESET"],
    E: ["DODGE", "SEPARATOR", "ST_CONDITIONAL", "DMG_REDUCE", "AOE", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    R: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS", "SEPARATOR", "ST_CONDITIONAL", "BUFF"] },
      { label: { ko: "액티브", en: "Active" }, tags: ["R_FLASH", "AR_MR_UP"] },
    ] },
    
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["BUFF_STACK"],
    Q: ["DMG_PHYSICAL", "TARGETED", "DASH", "WALL_HOP"],
    W: ["DMG_MAGIC", "ON_HIT"],

    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["SKILL_TOGGLE", "SKILL_RECAST"] },
      { label: { ko: "E2", en: "E2" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "AOE"] },
    ] },

    R:    { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["PASSIVE_BONUS", "ON_HIT", "PROC"] },
      { label: { ko: "R", en: "R" }, tags: ["BUFF_FORM", "DMG_MAGIC", "AOE"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "잭스 어려움; 고수분들 제보 부탁드림."
        ], en: [
          "Jax is difficult — Jax mains, please share any tips!",
        ] },
      note1: {

        ko: [
          "P는 [[BA]]를 때리면 [[AS_UP]] 1스택. \n 최대 8스택.",

          "Q는 대상에게 [[DASH]]하여 [[DMG_PHYSICAL]]. \n 아군, 적군, 와드, 수정초 등등 \n 웬만한 대상에 [[DASH]] 가능.",

          "W는 [[BA]]나 Q에 [[DMG_MAGIC]]을 추가. \n [[AA_RESET]] 가능.",

          "E는 [[AOE]] [[DMG_REDUCE]]와 [[BA]]를 무시. \n 2초가 지나거나 E2를 누르면 \n 최대체력 비례 [[DMG_MAGIC]]와 [[STUN]]. \n 회피한 공격당 20% 데미지 증가. \n 미니언 공격도 포함.",

          "R의 [[PASSIVE_BONUS]]는 [[BA]] 2대 때리면 [[BUFF]]. \n [[BUFF]]가 생겼을 때 다음 [[BA]]는 [[DMG_MAGIC]] 추가. \n R을 사용하면 2대가 1대로 바뀜.",

          "R은 [[AOE]] [[DMG_MAGIC]]와 [[AR_MR_UP]]. \n 맞은 적 챔피언 하나당 [[AR_MR_UP]] 추가."
        ],

        en: [
          "P: Gains 1 stack of [[AS_UP]] per [[BA]]. \n Max 8 stacks.",

          "Q: [[DASH]]es to the target dealing [[DMG_PHYSICAL]]. \n Can [[DASH]] to allies, enemies, wards, plants, and most other targets.",

          "W: Adds [[DMG_MAGIC]] to [[BA]] or Q. \n Can [[AA_RESET]].",

          "E: [[AOE]] [[DMG_REDUCE]] and [[BA]] dodge. \n After 2 seconds or pressing E2, deals [[DMG_MAGIC]] scaling with max HP and applies [[STUN]]. \n Damage increases by 20% per dodged attack. \n Minion attacks also count.",

          "R's [[PASSIVE_BONUS]]: Every 2nd [[BA]] grants a [[BUFF]]. \n The buffed [[BA]] deals bonus [[DMG_MAGIC]]. \n Activating R reduces this to every 1st [[BA]].",

          "R: [[AOE]] [[DMG_MAGIC]] and [[AR_MR_UP]]. \n Gains additional [[AR_MR_UP]] per enemy champion hit.",
        ]

      },

      note2: {
        ko: [
        "R 배우고는 항상 마음속으로 ''쿵쿵따''를 생각. \n R을 사용하면 ''쿵따''로 변경. \n''따'' 리듬에 상대를 패기.", 
        "E1을 사용중일 때 CC에 걸리면 \n E2를 사용 할 수 없음. \n 단, [[SLOW]], [[ROOT]] 제외"
      ],
        en: [
          "After learning R, always think 'beat-beat-hit' in your head.\nAfter using R it changes to 'beat-hit'.\nOn the 'hit' rhythm, attack the enemy.",
          "If CC hits Jax while E1 is active, E2 cannot be activated. \n Exception: [[SLOW]] and [[ROOT]] do not prevent E2.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 100,
    16: 90,
  },

};

export default jax;

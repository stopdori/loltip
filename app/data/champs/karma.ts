import type { ChampData } from "../interactions/types";

const karma: ChampData = {
  id: "karma",
  skills: {
    P: [],
    Q: ["Q_FLASH", "SLOW"],

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["W_FLASH", "ROOT", "TETHER", "REVEALED"] },
      { label: { ko: "만트라 W", en: "Mantra W" }, tags: ["W_FLASH", "ROOT", "TETHER", "REVEALED", "HEAL", "SEPARATOR", "ST_CONDITIONAL", "HEAL"] },
    ] },

    E: ["E_FLASH", "SHIELD", "MS_UP"],
    R: [],
  },

  vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "CDR", "R"],

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "SLOW"] },
      { label: { ko: "만트라 Q", en: "Mantra Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "SLOW"
      ] },
      { label: { ko: "장판", en: "Zone" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ST_DELAYED", "ZONE", "SLOW"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED"] },
      { label: { ko: "만트라 W", en: "Mantra W" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED"] },
      { label: { ko: "사슬", en: "Tether" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ROOT"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["TARGETED"] },
      { label: { ko: "만트라 E", en: "Mantra E" }, tags: ["TARGETED", "AOE"] },
      { label: { ko: "만트라 E 범위 쉴드", en: "Mantra E AOE Shield" }, tags: ["ST_CONDITIONAL"] },
    ] },

    R: ["EMPOWERED", "Q", "W", "E", "LOCKED"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "만트라 E의 한타벨류가 정말 좋음. \n Q, W로 방해하면서 P의 [[CDR]]으로 \n 만트라 E를 많이 돌려야 함.",
        ], en: ["Mantra E has exceptional teamfight value.\n Harass with Q and W while using P's [[CDR]]\n to cycle Mantra E as often as possible."] },
      note1: {

        ko: [
          "P는 1레벨부터 R을 배우고 시작. \n 스킬을 맞히면 R의 [[CDR]].",

          "Q는 적중하면 [[AOE]] [[DMG_MAGIC]]와 [[SLOW]]. \n \n 만트라 Q는 추가 [[DMG_MAGIC]]와 [[ZONE]] 생성. \n [[ZONE]]은 [[SLOW]]와 [[ST_DELAYED]] 후 추가 [[DMG_MAGIC]].",

          "W는 [[TARGETED]] [[TETHER]] [[TRUE_SIGHT]]. \n 끊어지지 않으면 [[ROOT]]. \n \n 만트라 W는 사용시 [[HEAL]] 추가와 \n 끊어지지 않으면 다시 [[HEAL]]하고 더 긴 [[ROOT]]시간.",

          "E는 [[SHIELD]]와 [[MS_UP]]. \n \n 만트라 E는 대상에게 2배의 [[SHIELD]]와 일반 [[MS_UP]]. \n 주변에는 일반 [[SHIELD]]와 감소된 [[MS_UP]].",

          "R을 사용하면 다음 Q, W, E를 [[EMPOWERED]]. \n [[LOCKED]].",
        ],

        en: [
          "P starts with R learned at level 1.\n Hitting skills reduces R's [[CDR]].",

          "Q deals [[AOE]] [[DMG_MAGIC]] and applies [[SLOW]] on hit.\n\n Mantra Q adds extra [[DMG_MAGIC]] and creates a [[ZONE]].\n The [[ZONE]] applies [[SLOW]] and deals additional [[DMG_MAGIC]] after a [[ST_DELAYED]] delay.",

          "W is a [[TARGETED]] [[TETHER]].\n If unbroken, it applies [[ROOT]].\n\n Mantra W also [[HEAL]]s on cast.\n If the tether is unbroken, it [[HEAL]]s again with a longer [[ROOT]] duration.",

          "E grants a [[SHIELD]] and [[MS_UP]].\n\n Mantra E grants the target double [[SHIELD]] and normal [[MS_UP]].\n Nearby allies receive a standard [[SHIELD]] and reduced [[MS_UP]].",

          "Using R [[EMPOWERED]]s the next Q, W, or E.\n [[LOCKED]] during cast.",
        ]

      },

      note2: {
        ko: [
        "TMI 제보 부탁드림."
      ],
        en: ["skilled players welcome."],
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 38,
    11: 36,
    16: 34,
  },

};

export default karma;

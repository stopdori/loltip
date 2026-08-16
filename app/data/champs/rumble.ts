import type { ChampData } from "../interactions/types";
 

 
const rumble: ChampData = {
 
  id: "rumble",
 
  skills: {
 
    P: ["ST_CONDITIONAL", "AS_UP", "ON_HIT"],
 
    Q: ["Q_FLASH"],
 
    W: ["MS_UP", "SHIELD"],
 
    E: ["E_FLASH", "SLOW", "MR_SHRED"],
 
    R: ["SLOW"],
 
  },
 

 
  vision: {
 
    P: [],
 
    Q: [],
 
    W: [],
 
    E: ["HIT_INDICATOR"],
 
    R: [],
 
  },
 

 
  gimmick: {
 
    P: ["ST_CONDITIONAL", "AS_UP", "ON_HIT", "DMG_MAGIC"],
 
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "AOE"] },
      { label: { ko: "강화 Q", en: "Empowered Q" }, tags: ["DMG_MAGIC", "AOE"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["MS_UP", "SHIELD"] },
      { label: { ko: "강화 W", en: "Empowered W" }, tags: ["MS_UP", "SHIELD"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SKILL_RECAST", "SLOW", "MR_SHRED"] },
      { label: { ko: "강화 E", en: "Empowered E" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SKILL_RECAST", "SLOW", "MR_SHRED"] },
    ] },
 
    R: ["DMG_MAGIC", "SKILL_VECTOR", "TIMING_CAST", "ZONE", "DOT", "SLOW"],
 
  },
 

 
  notes: {
    skill: {
      note3: { 
        ko: [
          "열기를 50 ~ 149로 관리.",
          "한타전에 반박자 빠른 R로 \n 상대 진영을 가르고 시작하는게 제일 베스트.",
          "대치중에 E로 포킹하다가 한 대상이 E를 연속으로 맞으면 \n 과감하게 R을 깔고 Q를 키고 들이대면 살살녹음.",
        ], en: [
          "Manage Heat between 50 and 149.",
          "Starting the teamfight by splitting the enemy team with a slightly early R \n is the best approach.",
          "If a target gets hit by E multiple times while poking during a standoff, \n boldly drop R, turn on Q, and dive in — they'll melt.",
        ] },
      note1: {

        ko: [
          "P는 스킬을 사용할 때마다 열기 획득. 최대 150. \n 50 이상일 때 \n Q, W, E 스킬을 사용하면 스킬 [[EMPOWERED]]. \n 150이 되면 과열 상태 돌입.", "과열 \n 럼블이 [[SILENCE]]이 되지만 \n [[AS_UP]], 대상의 최대 체력 비례 [[ON_HIT]] [[DMG_MAGIC]]. \n \n",

          "Q는 전방 [[AOE]] 대상의 최대 체력 비례 지속 [[DMG_MAGIC]].", 
          "[[EMPOWERED]] Q는 [[DMG_MAGIC]] 피해량 증가. \n \n",

          "W는 [[MS_UP]], [[SHIELD]].",
          "[[EMPOWERED]] W는 1.5배 효과. \n \n",

          "E는 [[PROJECTILE]]를 발사. \n [[SLOW]], [[MR_SHRED]], [[DMG_MAGIC]]. \n 이미 [[SLOW]] 대상에 적중하면 [[SLOW]], [[MR_SHRED]] 효과 증가.",
          "[[EMPOWERED]] E는 1.5배 효과. \n \n",

          "R은 [[SKILL_VECTOR]]스킬. \n 불타는 [[ZONE]] 생성. \n [[SLOW]], 지속 [[DMG_MAGIC]].",
        ],

        en: [
          "P gains Heat every time a skill is used. Max 150. \n At 50 or more Heat, \n using Q, W, or E [[EMPOWERED]]s the skill. \n At 150, Rumble enters Overheat.", "Overheat \n [[SILENCE]]s Rumble, \n but grants [[AS_UP]] and [[ON_HIT]] [[DMG_MAGIC]] based on the target's max HP. \n \n",

          "Q deals continuous [[AOE]] [[DMG_MAGIC]] in front, based on the target's max HP.",
          "[[EMPOWERED]] Q deals increased [[DMG_MAGIC]]. \n \n",

          "W grants [[MS_UP]] and [[SHIELD]].",
          "[[EMPOWERED]] W has 1.5x the effect. \n \n",

          "E fires a [[PROJECTILE]]. \n Applies [[SLOW]], [[MR_SHRED]], and [[DMG_MAGIC]]. \n If it hits a target already [[SLOW]]ed, the [[SLOW]] and [[MR_SHRED]] effects increase.",
          "[[EMPOWERED]] E has 1.5x the effect. \n \n",

          "R is a [[SKILL_VECTOR]] skill. \n Creates a burning [[ZONE]]. \n Applies [[SLOW]] and continuous [[DMG_MAGIC]].",
        ]

      },

      note2: {

        ko: [
        "럼블 E의 [[MR_SHRED]], [[SLOW]]는 \n 이미 [[SLOW]]인 대상에게 적중하면 1.5배. \n 강화 E도 효과가 1.5배. \n 한마디로 맞지 마라.",

      ],

        en: [
          "Rumble E's [[MR_SHRED]] and [[SLOW]] \n are 1.5x when hitting a target already [[SLOW]]ed. \n [[EMPOWERED]] E is also 1.5x. \n In short: don't get hit.",
        ]

        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },
 

 
  ultCooldown: {
 
    6: 130,
 
    11: 105,
 
    16: 80,
 
  },
 

 
};
 

 
export default rumble;
 


import type { ChampData } from "../interactions/types";

const janna: ChampData = {
  id: "janna",
  skills: {
    P: ["ST_CONDITIONAL", "MS_UP"],
    Q: ["AIRBORNE"],
    W: ["W_FLASH", "MS_UP", "SLOW", "GHOSTING"],
    E: ["E_FLASH", "SHIELD"],
    R: ["HEAL", "KNOCKBACK"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q:    { phases: [
      { label: { ko: "충전", en: "Charge" }, tags: ["SKILL_TOGGLE", "ZONE"] },
      { label: { ko: "발사", en: "Release" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE"] },
    ] },
    
    W: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "액티브", en: "Active" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "SLOW"] },
    ] },

    E: ["TARGETED"],
    R: ["SKILL_CHANNEL", "TIMING_CAST", "AOE"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "되도록 아군 AD챔프에게 E로 [[SHIELD]]를 주고 \n Q, W 로 상대 진입을 방해 하면서 \n R로 광역 [[KNOCKBACK]]과 [[HEAL]].",
        ], en: [
          "Prioritize using E to [[SHIELD]] your AD carry. \n Use Q and W to block enemy engage, \n and R for AOE [[KNOCKBACK]] and [[HEAL]].",
        ] },
      note1: {

        ko: [
          "P는 아군이 잔나에게 다가올 때 [[MS_UP]]. \n W에 이속비례 [[DMG_MAGIC]].",

          "Q는 회오리를 설치하고  Q2를 누르면 발사. \n 충전 시간에 따라 데미지, 사거리, [[AIRBORNE]] 증가.",

          "W의 [[PASSIVE_BONUS]]는 [[MS_UP]]와 [[GHOSTING]].",
          
          "W는 기본 [[DMG_MAGIC]]와 이속비례 [[DMG_MAGIC]] 추가와 [[SLOW]].",
          
          "E는 [[SHIELD]]와 [[AD_UP]]. \n 타워에도 사용할 수 있음. \n 스킬로 CC를 걸면 E [[CDR]].",

          "R은 적 미니언과 챔피언을 [[KNOCKBACK]]하고 \n [[SKILL_CHANNEL]] [[HEAL]] [[ZONE]]을 시전.",
        ],

        en: [
          "P: Allies moving toward Janna gain [[MS_UP]]. \n W damage scales with movement speed.",

          "Q: Places a whirlwind, then fires it on Q2. \n Charge time increases damage, range, and [[AIRBORNE]] duration.",

          "W's [[PASSIVE_BONUS]] grants [[MS_UP]] and [[GHOSTING]].",

          "W: Deals base [[DMG_MAGIC]] plus bonus [[DMG_MAGIC]] scaling with movement speed, and applies [[SLOW]].",

          "E: Grants [[SHIELD]] and [[AD_UP]]. \n Can be cast on towers. \n Applying CC with a skill reduces E's [[CDR]].",

          "R: [[KNOCKBACK]]s enemy minions and champions, \n then channels a [[HEAL]] [[ZONE]].",
        ]

      },

      note2: {
        ko: [
        "P에 [[MS_UP]]는 아군에게 적용되는것",
        "Q1을 사용했을 때 CC에 걸리면 \n Q2를 사용할 수 없음. \n 단, [[SLOW]], [[ROOT]] 제외.",
        "R의 [[KNOCKBACK]]으로 상대편이 [[WALL_HOP]] 불가."
      ],
        en: [
          "P's [[MS_UP]] applies to nearby allies.",
          "If Janna is hit by CC after casting Q1, Q2 cannot be activated. \n Exception: [[SLOW]] and [[ROOT]] do not prevent Q2.",
          "R's [[KNOCKBACK]] prevents enemies from [[WALL_HOP]]ping.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 130,
    11: 115,
    16: 100,
  },

};

export default janna;

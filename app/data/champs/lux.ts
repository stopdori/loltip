import type { ChampData } from "../interactions/types";

const lux: ChampData = {
  id: "lux",
  skills: {
    P: [],
    Q: ["Q_FLASH", "PIERCE_ONCE", "ROOT"],
    W: ["SHIELD"],
    E: ["E_FLASH", "SLOW"],
    R: [],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: ["VISION"],
    R: ["VISION"],
  },

  gimmick: {
    P: ["MARK_INTERACT", "Q", "E", "R", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC"],

    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE_ONCE", "ROOT", "SEPARATOR", "MARK"],

    W: ["PROJECTILE", "SHIELD"],

    E: { phases: [
      { label: { ko: "E 투사체", en: "E Projectile" }, tags: ["TIMING_CAST", "PROJECTILE"] },
      { label: { ko: "E 장판", en: "E Zone" }, tags: ["ZONE", "SLOW", "SKILL_RECAST"] },
      { label: { ko: "E 발동", en: "E Active" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ZONE", "SEPARATOR", "MARK"] },
    ] },
    
    R: ["DMG_MAGIC", "SKILL_CHANNEL", "NON_PROJECTILE", "SEPARATOR", "MARK_CONSUME", "MARK"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "W로 아군 [[SHIELD]] 주면서 \n 멀리서 E, Q 던지면서 포킹. \n R로 킬캐치."
        ], en: [
          "Give allies [[SHIELD]] with W \n while poking from afar with E and Q. \n Use R to catch kills."
        ] },
      note1: {

        ko: [
          "P는 Q, E, R 스킬을 맞히면 [[MARK]]. \n [[BA]] 공격 시 [[MARK_CONSUME]]하여 [[DMG_MAGIC]].",

          "Q는 [[PROJECTILE]]를 날려 [[PIERCE_ONCE]] [[ROOT]], [[MARK]], [[DMG_MAGIC]].",

          "W는 [[PROJECTILE]]에 닿은 아군 챔피언 [[SHIELD]].",

          "E는 [[PROJECTILE]]를 날려 \n [[ZONE]]을 설치하고 지속시간 동안 지속 [[SLOW]]. \n 시간이 경과하거나 [[SKILL_RECAST]]하면 폭발 하여 [[MARK]], [[DMG_MAGIC]].",

          "R은 레이저를 발사하여 [[DMG_MAGIC]]. \n R이 [[MARK_CONSUME]] 하고 다시 [[MARK]] 적용.",
        ],

        en: [
          "P applies [[MARK]] when Q, E, or R hits a target. \n Attacking with [[BA]] consumes the [[MARK]] for [[DMG_MAGIC]].",

          "Q fires a [[PROJECTILE]] that [[PIERCE_ONCE]]s, applying [[ROOT]], [[MARK]], and [[DMG_MAGIC]].",

          "W grants [[SHIELD]] to allied champions touched by the [[PROJECTILE]].",

          "E fires a [[PROJECTILE]] \n that creates a [[ZONE]] applying persistent [[SLOW]] while it lasts. \n It explodes after a duration or on [[SKILL_RECAST]], applying [[MARK]] and [[DMG_MAGIC]].",

          "R fires a laser for [[DMG_MAGIC]]. \n R [[MARK_CONSUME]]s the existing mark and reapplies [[MARK]].",
        ]

      },

      note2: {
        ko: [
        "E에 텔 안타짐"
      ],
        en: [
        "Cannot TP onto E"
      ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 60,
    11: 50,
    16: 40,
  },

};

export default lux;

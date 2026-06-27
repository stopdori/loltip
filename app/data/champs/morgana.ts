import type { ChampData } from "../interactions/types";

const morgana: ChampData = {
  id: "morgana",
  skills: {
    P: ["ST_CONDITIONAL", "LIFESTEAL"],
    Q: ["ROOT"],
    W: ["W_FLASH"],
    E: ["E_FLASH", "SHIELD", "CC_IMMUNE"],
    R: ["MS_UP", "SLOW", "TRUE_SIGHT", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
  },

  vision: {
    P: [],
    Q: ["HIT_INDICATOR"],
    W: [],
    E: [],
    R: ["TRUE_SIGHT", "POSITION_REVEAL"],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "LIFESTEAL"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "ROOT"],
    W: ["DMG_MAGIC", "TIMING_CAST", "ZONE"],
    E: ["TARGETED", "SHIELD"],
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["DMG_MAGIC", "TIMING_CAST", "NON_PROJECTILE", "SWARM", "MS_UP", "SLOW", "TRUE_SIGHT"] },
      { label: { ko: "R 사슬", en: "R Tether" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "STUN"] },
    ] },
  
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "Q, W로 포킹하면서 각 보기",
          "E의 [[CC_IMMUNE]]으로 아군을 보호하면서 \n R로 어그로끌기.",
        ], en: [
          "Poke with Q and W while farming.",
          "Protect allies with E's [[CC_IMMUNE]] \n while drawing aggro with R.",
        ] },
      note1: {

        ko: [
          "P는 챔피언, 대형, 에픽 몬스터 대상 스킬 [[LIFESTEAL]].",
          
          "Q는 [[PROJECTILE]]를 발사. \n [[DMG_MAGIC]]와 [[ROOT]].",

          "W는 지속 [[ZONE]] [[DMG_MAGIC]]. \n P의 [[LIFESTEAL]] 발동될 때마다 W [[CDR]].",

          "E는 [[DMG_MAGIC]]만 막아주는 [[SHIELD]]. \n [[SHIELD]]가 유지되는 동안 [[CC_IMMUNE]].",

          "R은 주변에 대상이 있다면 사용할 수 있음. \n [[MS_UP]] 되고 [[TETHER]]을 연결하여 [[DMG_MAGIC]], [[SLOW]], [[TRUE_SIGHT]]. \n [[TETHER]]이 끊어지지 않고 종료되면 추가 [[DMG_MAGIC]], [[STUN]].",
        ],

        en: [
          "P grants [[LIFESTEAL]] on skills that hit champions, large, or epic monsters.",

          "Q fires a [[PROJECTILE]] \n dealing [[DMG_MAGIC]] and applying [[ROOT]].",

          "W is a persistent [[ZONE]] [[DMG_MAGIC]]. \n Each time P's [[LIFESTEAL]] triggers, W gains [[CDR]].",

          "E is a [[SHIELD]] that blocks only [[DMG_MAGIC]]. \n While the [[SHIELD]] holds, grants [[CC_IMMUNE]].",

          "R can be used when there are targets nearby. \n Gain [[MS_UP]] and attach a [[TETHER]] dealing [[DMG_MAGIC]], [[SLOW]], [[TRUE_SIGHT]]. \n If the [[TETHER]] holds until the end, deals bonus [[DMG_MAGIC]] and [[STUN]].",
        ]

      },

      note2: {
        ko: [
        "[[Q_FLASH]] 안됨",
        "E(블랙쉴드)는 [[SHIELD]]가 유지되는동안 [[CC_IMMUNE]]. \n 지속시간이 끝나거나 피해로 [[SHIELD]]가 벗겨지면 [[CC_IMMUNE]] 끝. \n \n 단, [[SHIELD]]가 사라질정도의 충분한 데미지로 CC를 맞으면 \n 그 스킬의 CC까지는 면역. \n 예) 애쉬 R 데미지 500, 모르가나 E 보호막 200일때 맞으면 [[SHIELD]]가 사라지면서 300의 데미지가 들어오지만 CC는 면역",
        "R은 단발성 [[SLOW]]. 지속[[SLOW]]가 아님.",
        "R은 상대가 [[STEALTH]]으로 주변에 다가와도 활성화 가능.",
      ],
        en: [
          "[[Q_FLASH]] is not possible.",
          "E (Black Shield) grants [[CC_IMMUNE]] while the [[SHIELD]] holds. \n [[CC_IMMUNE]] ends when the duration expires or the [[SHIELD]] is broken by damage. \n \n However, if hit by CC with enough damage to destroy the [[SHIELD]], \n the CC from that skill is still negated. \n Ex) If Ashe R deals 500 dmg and Morgana E shield is 200, the [[SHIELD]] breaks and 300 dmg is taken, but the CC is negated.",
          "R's [[SLOW]] is a one-time application, not a persistent [[SLOW]].",
          "R can activate even if the enemy approaches while in [[STEALTH]].",
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

export default morgana;

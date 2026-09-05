import type { ChampData } from "../interactions/types";

const malphite: ChampData = {
  id: "malphite",
  skills: {
    P: ["ST_CONDITIONAL", "SHIELD"],
    Q: ["Q_FLASH", "SLOW", "MS_UP"],
    W: ["AA_RESET"],
    E: ["E_FLASH", "CRIPPLE"],
    R: ["AIRBORNE", "DASH", "UNSTOPPABLE", "WALL_HOP"],
  },

  vision: {
    P: [],
    Q: ["POSITION_REVEAL"],
    W: [],
    E: ["POSITION_REVEAL"],
    R: ["HIT_SOUND"],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "SHIELD"],

    Q: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "SLOW", "MS_UP"],

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["AR_UP", "SEPARATOR", "ST_CONDITIONAL", "AR_UP"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["DMG_PHYSICAL", "ON_HIT"] },
      { label: { ko: "W 충격파", en: "W Cone" }, tags: ["DMG_PHYSICAL", "AOE"] },
    ] },

    E: ["DMG_MAGIC", "TIMING_CAST", "AOE", "CRIPPLE"],

    R: ["DMG_MAGIC", "AOE", "DASH", "UNSTOPPABLE", "AIRBORNE"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "앞에서 눈치보다가 최대한 많은 대상을 R로 박으면 캐리. \n 또는 상대 뒷라인에 R로 박으면 캐리.",
        ], en: [
          "Carry by waiting it out in the front line and landing R on as many targets as possible. \n Or carry by landing R on the enemy backline.",
        ] },
      note1: {

        ko: [
          "P는 잠시동안 피해를 입지 않으면 \n 최대 체력 비례 [[SHIELD]].",

          "Q는 바위를 굴려 [[DMG_MAGIC]] [[SLOW]]와 [[MS_UP]].",

          "W의 [[PASSIVE_BONUS]]는 방어력 비례 [[AR_UP]]. \n \n W는 다음 [[BA]]를 강화하여 [[ON_HIT]] [[DMG_PHYSICAL]]. \n 이후 원뿔 모양의 충격파로 [[AOE]] [[DMG_PHYSICAL]]. \n [[AA_RESET]] 가능.",

          "E는 [[AOE]] [[DMG_MAGIC]]와 [[CRIPPLE]] [[DEBUFF]].",

          "R은 [[UNSTOPPABLE]] [[DASH]]. \n 도착 지점에 [[AOE]] [[DMG_MAGIC]]와 [[AIRBORNE]].",
        ],

        en: [
          "If P takes no damage for a short time, \n gain a [[SHIELD]] proportional to max health.",

          "Q rolls a boulder for [[DMG_MAGIC]], applying [[SLOW]] and [[MS_UP]].",

          "W's [[PASSIVE_BONUS]] grants [[AR_UP]] proportional to armor. \n \n W empowers the next [[BA]] for [[ON_HIT]] [[DMG_PHYSICAL]]. \n It then releases a cone-shaped shockwave for [[AOE]] [[DMG_PHYSICAL]]. \n Can [[AA_RESET]].",

          "E deals [[AOE]] [[DMG_MAGIC]] and applies a [[CRIPPLE]] [[DEBUFF]].",

          "R is an [[UNSTOPPABLE]] [[DASH]]. \n On arrival, deals [[AOE]] [[DMG_MAGIC]] and applies [[AIRBORNE]].",
        ]

      },

      note2: {
        ko: [
        "[[R_FLASH]] 안됨",
        "W의 [[PASSIVE_BONUS]]는 P의 [[SHIELD]]가 활성화되어있는 동안 효과 증가.",
        "R은 맨바닥에 박을 때랑 적을 박을 때 소리가 다름. 그래서 [[STEALTH]] 또는 모습이 보이지 않는 적을 맞히면 소리로 알 수 있음."
      ],
        en: [
          "[[R_FLASH]] not possible",
          "W's [[PASSIVE_BONUS]] effect is increased while P's [[SHIELD]] is active.",
          "R sounds different when it lands on the bare ground versus on an enemy. So hitting a [[STEALTH]]ed or invisible enemy can be identified by sound."
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

export default malphite;

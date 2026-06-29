import type { ChampData } from "../interactions/types";

const nilah: ChampData = {
  id: "nilah",
  skills: {
    P: ["HS_POWER", "SEPARATOR", "ST_CONDITIONAL", "HEAL", "SEPARATOR", "ST_CONDITIONAL", "SHIELD"],

    Q: { phases: [
      { label: { ko: "Q 패시브", en: "Q Passive" }, tags: ["AR_PEN", "SEPARATOR", "ST_CONDITIONAL", "HEAL", "SEPARATOR", "ST_CONDITIONAL", "SHIELD"] },
      { label: { ko: "Q 액티브", en: "Q Active" }, tags: ["Q_FLASH", "AA_RESET", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "BA", "AOE", "RANGE_UP", "AS_UP", "SEPARATOR", "ST_CONDITIONAL", "LIFESTEAL"] },
  ] },

    W: ["MS_UP", "GHOSTING", "DODGE", "MAGIC_DR", "SEPARATOR", "ST_CONDITIONAL", "CHAIN", "DODGE"],

    E: ["E_FLASH", "DASH", "WALL_HOP"],

    R: ["R_FLASH", "OMNIVAMP", "GRAB", "SEPARATOR",  "ST_CONDITIONAL", "HEAL", "SEPARATOR", "ST_CONDITIONAL", "SHIELD"],
  },

  vision: {
    P: [],
    Q: ["HIT_INDICATOR"],
    W: [],
    E: ["POSITION_REVEAL"],
    R: [],
  },

  gimmick: {
    P: ["HS_POWER", "SEPARATOR", "ST_CONDITIONAL", "HEAL", "SEPARATOR", "ST_CONDITIONAL", "SHIELD"],

    Q: { phases: [
      { label: { ko: "Q 패시브", en: "Q Passive" }, tags: ["AR_PEN", "SEPARATOR", "ST_CONDITIONAL", "HEAL", "SEPARATOR", "ST_CONDITIONAL", "SHIELD"] },
      { label: { ko: "Q 액티브", en: "Q Active" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "NON_TARGETED", "AOE", "AA_RESET", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "BA", "AOE", "RANGE_UP", "AS_UP", "SEPARATOR", "ST_CONDITIONAL", "LIFESTEAL"] },
    ] },

    W: ["BUFF_FORM", "MS_UP", "GHOSTING", "DODGE", "MAGIC_DR", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "CHAIN", "DODGE"],

    E: ["DMG_PHYSICAL", "TARGETED", "AOE", "RECHARGE", "DASH", "WALL_HOP"],

    R: ["DMG_PHYSICAL", "AOE", "LOCKED", "OMNIVAMP", "GRAB", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "HEAL", "SEPARATOR", "ST_CONDITIONAL", "SHIELD"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "R을 많이 맞히면 캐리인듯? \n 솔직히 잘 모르겠음.",
        ], en: [
          "Land R on as many targets as possible and you'll carry? \n Honestly, not entirely sure.",
        ] },
      note1: {

        ko: [
          "P는 미니언 처치 시 경험치 분배로 잃은 양의 50%만큼 \n 가장 가까운 아군에게 분배. \n 요약) 사라지는 경험치의 절반을 아군과 나눠가짐. \n \n 닐라, 아군(자신)에게 사용하는 [[HS_POWER]]. \n 그리고 대상이 닐라이면 \n [[HEAL]], [[SHIELD]]양의 일부를 아군(자신)에게 나누어 주고 \n 대상이 아군(자신)이면 \n [[HEAL]], [[SHIELD]]양의 일부를 닐라에게 나누어 줌. \n \n P의 사거리는 성벽 1개 정도.",

          "Q의 [[PASSIVE_BONUS]]는 \n [[CRIT]] 비례 [[ON_HIT]] [[HEAL]]. \n [[CRIT]] 비례 [[AR_PEN]] 획득. \n 최대 체력을 넘어선 [[HEAL]]은 [[SHIELD]]로 전환. \n \n Q는 전방 [[AOE]] [[CRIT]] 확률, 피해량 비례 [[DMG_PHYSICAL]]. \n Q 적중 시 [[AS_UP]]. \n [[BA]]가 원뿔 모양 [[AOE]] 공격으로 바뀌고 [[RANGE_UP]], ",

          "W는 [[MS_UP]], [[GHOSTING]], [[DODGE]], [[MAGIC_DR]]. \n 닐라와 닿은 아군도 [[DODGE]] 효과 획득.",

          "E는 대상에게 [[DASH]]하여 경로상 적에게 [[DMG_PHYSICAL]]. \n 2회 [[RECHARGE]] 가능. \n [[DASH]] 중에 Q 사용시 경로상 적에게 Q 적중.",

          "R은 잠깐 지속 [[AOE]] [[DMG_PHYSICAL]]. \n 잠시 뒤 추가 [[DMG_PHYSICAL]]와 닐라 쪽으로 [[GRAB]]. \n 적 챔피언에게 입힌 [[DMG_PHYSICAL]] 만큼 \n 닐라와 주변 아군들 치명타 비례 [[HEAL]]. \n \n R의 [[HEAL]] 범위는 P의 범위와 동일",
        ],

        en: [
          "P: When killing a minion, 50% of the lost shared XP \n is redistributed to the nearest ally. \n In short: shares half of the 'missing' XP with an ally. \n \n Nilah and nearby allies gain [[HS_POWER]]. \n Additionally, if the target is Nilah, \n a portion of [[HEAL]] and [[SHIELD]] is shared with allies, \n and if the target is an ally, \n a portion is shared back with Nilah. \n \n P's range is roughly one wall segment.",

          "Q [[PASSIVE_BONUS]]: \n Grants [[ON_HIT]] [[HEAL]] scaling with [[CRIT]] chance. \n Grants [[AR_PEN]] scaling with [[CRIT]] chance. \n [[HEAL]] exceeding max HP converts to [[SHIELD]]. \n \n Q deals forward [[AOE]] [[DMG_PHYSICAL]] scaling with [[CRIT]] chance and damage. \n On hit, grants [[AS_UP]]. \n [[BA]] becomes a cone-shaped [[AOE]] attack with [[RANGE_UP]], ",

          "W grants [[MS_UP]], [[GHOSTING]], [[DODGE]], and [[MAGIC_DR]]. \n Allies in contact with Nilah also gain [[DODGE]].",

          "E [[DASH]]es to a target, dealing [[DMG_PHYSICAL]] to enemies along the path. \n Can [[RECHARGE]] up to 2 times. \n Using Q during the [[DASH]] applies Q to enemies along the path.",

          "R briefly deals sustained [[AOE]] [[DMG_PHYSICAL]]. \n After a short delay, deals additional [[DMG_PHYSICAL]] and [[GRAB]]s enemies toward Nilah. \n [[HEAL]]s Nilah and nearby allies based on [[DMG_PHYSICAL]] dealt to enemy champions, \n scaling with critical strike chance. \n \n R's [[HEAL]] range is the same as P's range.",
        ]

      },

      note2: {
        ko: [
        "Q는 구조물에도 적중.",
        "E는 아군에게도 사용 가능,"
      ],
        en: [
          "Q also hits structures.",
          "E can also be cast on allies.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 95,
    16: 80,
  },

};

export default nilah;

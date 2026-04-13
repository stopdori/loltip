import type { ChampData } from "../interactions/types";

const katarina: ChampData = {
  id: "katarina",
  skills: {
    P: [],
    Q: ["Q_FLASH", "DROP", "SEPARATOR", "ST_CONDITIONAL", "CHAIN"],
    W: ["MS_UP", "DROP"],
    E: ["E_FLASH", "AA_RESET", "BLINK", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    R: ["GW"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["ST_CONDITIONAL", "CDR", "Q", "W", "E", "R"] },
      { label: { ko: "단검 줍기", en: "Dagger Pickup" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "AOE"] },
    ] },
    
    Q: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "DROP", "SEPARATOR", "ST_CONDITIONAL", "CHAIN"],
    W: ["DROP"],
    E: ["AA_RESET", "DMG_MAGIC", "ON_HIT", "BLINK", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    R: ["ST_CONDITIONAL", "DMG_MAGIC", "SKILL_CHANNEL", "PROJECTILE", "SWARM", "SINGLE", "CANCELLABLE", "GW"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "난전에 강함.", "Q로 포킹하다 늦게 진입해서 \n 상대 딜러라인에 E, 평, R로 한번에 누킹",
        ], en: [
          "Strong in chaotic fights.", "Poke with Q, then engage late \n and nuke the enemy damage dealers with E, AA, and R.",
        ] },
      note1: {

        ko: [
          "P는 3초이내 킬 관여 시 모든스킬 [[CDR]]. \n 단검을 주우면 [[AOE]] [[DMG_MAGIC]].",

          "Q는 단검을 던지고 주변 2명에게 [[CHAIN]]. \n 단검은 첫대상 뒤에 [[DROP]].",

          "W는 [[MS_UP]]하고 단검 [[DROP]].",

          "E는 대상 주변에 [[BLINK]] 공격. \n 아군, 적군, 단검([[DROP]]), 중립식생에 사용 가능. \n 단검을 주우면 E [[CDR]].",

          "R은 최대 3명의 챔피언에게 [[SKILL_CHANNEL]] [[DMG_MAGIC]], [[DMG_PHYSICAL]]. \n [[GW]]도 적용.",
        ],

        en: [
          "P: Kill participation within 3 seconds reduces all skill cooldowns [[CDR]]. \n Picking up a dagger deals [[AOE]] [[DMG_MAGIC]].",

          "Q throws a dagger that [[CHAIN]]s to 2 nearby enemies. \n The dagger [[DROP]]s behind the first target.",

          "W grants [[MS_UP]] and [[DROP]]s a dagger.",

          "E [[BLINK]]s to the target and strikes. \n Can be cast on allies, enemies, daggers ([[DROP]]), and plants. \n Picking up a dagger reduces E's cooldown [[CDR]].",

          "R channels and deals [[DMG_MAGIC]] and [[DMG_PHYSICAL]] to up to 3 nearby champions. \n Also applies [[GW]].",
        ]

      },

      note2: {
        ko: [
        "단검([[DROP]])에 텔 안됨",
        "R은 움직이면 취소."
      ],
        en: ["Cannot TP onto daggers", "R is cancelled if Katarina moves."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 75,
    11: 60,
    16: 45,
  },

};

export default katarina;

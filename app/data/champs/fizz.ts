import type { ChampData } from "../interactions/types";

const fizz: ChampData = {
  id: "fizz",
  skills: {
    P: ["GHOSTING"],
    Q: ["Q_FLASH", "DASH", "WALL_HOP"],
    W: ["AA_RESET"],
    E: ["E_FLASH", "DASH", "WALL_HOP", "UNTARGETABLE", "TOWER_DODGE", "SEPARATOR", "ST_CONDITIONAL", "SLOW"],
    R: ["R_FLASH", "SLOW", "AIRBORNE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: ["TRUE_SIGHT"],
  },

  gimmick: {
    P: ["GHOSTING"],
    Q: ["DMG_MAGIC", "TARGETED", "ON_HIT", "DASH", "WALL_HOP"],

    W: { phases: [
      { label: { ko: "W 기본효과", en: "W Passive" }, tags: ["PASSIVE_BONUS", "DMG_MAGIC", "ON_HIT", "DOT"] },
      { label: { ko: "W 사용", en: "W Active" }, tags: ["AA_RESET", "DMG_MAGIC", "ON_HIT"] },
    ] },
    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["DASH", "UNTARGETABLE", "TOWER_DODGE", "SKILL_RECAST"] },
      { label: { ko: "E2 (재시전)", en: "E2 (Recast)" }, tags: ["DMG_MAGIC", "AOE"] },
      { label: { ko: "E2", en: "E2" }, tags: ["ST_DELAYED", "DMG_MAGIC", "AOE", "DASH", "SLOW"] },
    ] },
    R: { phases: [
      { label: { ko: "미끼부착", en: "Bait" }, tags: ["TIMING_CAST", "PROJECTILE", "PIERCE_MINION", "SLOW"] },
      { label: { ko: "상어", en: "Shark" }, tags: ["DMG_MAGIC", "AOE", "SLOW", "KNOCKBACK", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "소규모 교전이 강함.", "R로 딜러라인에 미끼를 부착하고 \n [[E_FLASH]] WQ로 암살하면서 빠져나오기. \n 또는 W [[Q_FLASH]]로 누킹하고 E로 빠지기. "
        ], en: [
          "Strong in small skirmishes.",
          "Attach the bait to the enemy carry with R, \n then assassinate with [[E_FLASH]] WQ and escape. \n Or nuke with W [[Q_FLASH]] and disengage with E.",
        ] },
      note1: {

        ko: [
          "P는 [[GHOSTING]]과 모든 공격에 대해 [[DMG_REDUCE]]. \n 최대 50%까지 감소.",
          "Q는 [[TARGETED]] [[DASH]].",
          "W의 [[PASSIVE_BONUS]]는 [[ON_HIT]] [[DOT]].",
          "W는 다음 [[BA]] [[EMPOWERED]]. \n 대상을 처치하면 [[MANA_RESTORE]], [[CDR]] 1초로. \n 처치하지 못하면 [[BUFF]] 5초. ([[ON_HIT]] [[DMG_MAGIC]])  \n [[AA_RESET]] 가능.",
          "E는 [[DASH]] 하면서 [[UNTARGETABLE]], [[TOWER_DODGE]] \n E [[SKILL_RECAST]]으로 일찍 종료하면 좁은 [[AOE]] [[DMG_MAGIC]]. \n \n 기다렸다 착지하면 넓은 [[AOE]] [[DMG_MAGIC]]와 [[SLOW]]. \n 이때 우클릭으로 착지방향으로 [[DASH]] 가능.",
          "R은 미끼 투척. \n 상대 챔피언이 닿으면 부착되고 \n 거리에 비례한 [[SLOW]]. \n \n 카운팅하고 상어가 튀어나와 \n 대상 [[AIRBORNE]], 주변 광역 [[KNOCKBACK]]. \n 동시에 미끼의 이동거리에 비례한 [[AOE]], [[DMG_MAGIC]], [[SLOW]]. \n \n 부착되지 않으면 미끼가 도착한 곳에 [[ZONE]]. \n 역시 광역 [[KNOCKBACK]]과 \n 이동거리에 비례한 [[AOE]], [[DMG_MAGIC]], [[SLOW]].",
        ],

        en: [
          "P grants [[GHOSTING]] and [[DMG_REDUCE]] against all attacks, up to 50%.",
          "Q is a [[TARGETED]] [[DASH]].",
          "W's [[PASSIVE_BONUS]] applies [[ON_HIT]] [[DOT]].",
          "W empowers the next [[BA]]. \n If it kills the target, grants [[MANA_RESTORE]] and [[CDR]] by 1 second. \n If not, the [[BUFF]] lasts 5 seconds ([[ON_HIT]] [[DMG_MAGIC]]). \n [[AA_RESET]] is possible.",
          "E [[DASH]]es while becoming [[UNTARGETABLE]] and [[TOWER_DODGE]]. \n Recasting early creates a small [[AOE]] [[DMG_MAGIC]]. \n \n Landing naturally creates a large [[AOE]] [[DMG_MAGIC]] and [[SLOW]]. \n Right-clicking during the jump [[DASH]]es toward the landing direction.",
          "R throws a bait. \n If it hits an enemy champion, it attaches and applies [[SLOW]] scaled by distance. \n \n After a delay, a shark erupts, \n [[AIRBORNE]]ing the target and [[KNOCKBACK]]ing nearby enemies. \n Deals [[AOE]] [[DMG_MAGIC]] and [[SLOW]] scaled by travel distance. \n \n If it misses, the bait lands at the target location as a [[ZONE]], \n still applying [[KNOCKBACK]] and [[AOE]] [[DMG_MAGIC]] [[SLOW]] scaled by travel distance.",
        ]

      },

      note2: {
        ko: [
        "Q를 벽 넘어 대상에게 시전해야만 [[WALL_HOP]] 가능. \n 벽 넘어가 아닌 대상에게 쓰면 [[WALL_HOP]] 불가.", "E의 [[SLOW]]는 재사용 없이 착지해야 적용.", "R의 [[SLOW]]는 두 번 걸림\n1번 미끼가 적중할 때\n2번 상어가 물었을 때", "R은 마우스 멀리놓고 사용해야 멀리 날아감"
      ],
        en: ["Q wall-hop only works by targeting an enemy across the wall", "E's [[SLOW]] only applies if landing without recasting", "R's [[SLOW]] applies twice:\n1. When the fish hits\n2. When the shark bites", "Place mouse far away before using R for maximum range"]
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

export default fizz;

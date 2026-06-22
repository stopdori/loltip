import type { ChampData } from "../interactions/types";

const lissandra: ChampData = {
  id: "lissandra",
  skills: {
    P: ["SLOW"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["ROOT"],
    E: ["BLINK", "WALL_HOP"],
    R: { phases: [
      { label: { ko: "R 상대", en: "R Enemy" }, tags: ["R_FLASH", "STUN", "SLOW"] },
      { label: { ko: "R 자신", en: "R Self Cast" }, tags: ["UNTARGETABLE", "TOWER_DODGE", "SLOW", "HEAL"] },
    ] },
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: { phases: [
      { label: { ko: "R 상대", en: "R Enemy" }, tags: ["POSITION_REVEAL"] },
      { label: { ko: "R 자신", en: "R Self Cast" }, tags: [] },
    ] },
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "SUMMON", "DMG_MAGIC", "ZONE", "HOMING", "SLOW"],

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SINGLE", "SLOW"] },
      { label: { ko: "Q 파편", en: "Q Shatter" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "PROJECTILE", "PIERCE", "SLOW"] },
    ] },

    W: ["DMG_MAGIC", "AOE", "ROOT"],

    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "ZONE", "SKILL_RECAST"] },
      { label: { ko: "E2", en: "E2" }, tags: ["BLINK"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R 상대", en: "R Enemy" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "ZONE", "SLOW"] },
      { label: { ko: "R 자신", en: "R Self Cast" }, tags: ["TARGETED", "UNTARGETABLE", "TOWER_DODGE", "HEAL", "SEPARATOR_NEWLINE", "SEPARATOR", "DMG_MAGIC", "ZONE", "SLOW"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "소규모 교전이 상당히 좋음 \n R로 하나 얼려서 확실하게 자르기.",
          "E 갈퀴를 지형지물에 잘 숨겨서 깔고 \n [[BLINK]]하여 W로 [[AOE]] [[ROOT]]. \n Q 던지고 R을 자신에게 써서 어그로 핑퐁 = 한타 캐리."
        ], en: [
          "Quite strong in small skirmishes \n Freeze one target with R to secure a clean pick.",
          "Hide the E claw well in terrain \n then [[BLINK]] in and [[AOE]] [[ROOT]] with W. \n Throw Q and cast R on yourself to ping-pong aggro = carry the teamfight."
        ] },
      note1: {

        ko: [
          "P는 리산드라 근처 적 챔피언이 죽으면 \n 상대를 따라다니는 노예 [[SUMMON]]. \n [[AOE]] 지속 [[SLOW]], 폭발하면서 [[AOE]] [[DMG_MAGIC]].",

          "Q는 [[SLOW]]와 [[DMG_MAGIC]]. \n 적중하면 뒤쪽에 파편이 튀어 똑같은 효과.",

          "W는 [[AOE]] [[ROOT]], [[DMG_MAGIC]].",

          "E는 갈퀴모양 [[PROJECTILE]]를 날려 [[DMG_MAGIC]]. \n [[SKILL_RECAST]] 하면 갈퀴 위치로 [[BLINK]].",

          "R은 두 가지 \n R을 상대 챔피언에게 사용하면 \n 대상 [[STUN]]과 [[AOE]] [[SLOW]], [[DMG_MAGIC]]. \n \n R을 자신에게 사용하면, \n [[UNTARGETABLE]]와 잃은 체력 비례 [[HEAL]]. \n 주변에는 [[AOE]] [[SLOW]], [[DMG_MAGIC]].",
        ],

        en: [
          "P [[SUMMON]]s a thrall that chases the enemy \n when an enemy champion dies near Lissandra. \n It applies persistent [[AOE]] [[SLOW]] and deals [[AOE]] [[DMG_MAGIC]] when it explodes.",

          "Q applies [[SLOW]] and [[DMG_MAGIC]]. \n On hit, a shard bounces behind the target with the same effect.",

          "W deals [[AOE]] [[ROOT]] and [[DMG_MAGIC]].",

          "E throws a claw-shaped [[PROJECTILE]] for [[DMG_MAGIC]]. \n [[SKILL_RECAST]] to [[BLINK]] to the claw's location.",

          "R has two modes \n Cast on an enemy champion: \n target [[STUN]] plus [[AOE]] [[SLOW]] and [[DMG_MAGIC]]. \n \n Cast on herself: \n [[UNTARGETABLE]] and [[HEAL]] proportional to missing health. \n Also deals [[AOE]] [[SLOW]] and [[DMG_MAGIC]] around her.",
        ]

      },

      note2: {
        ko: [
        "[[W_FLASH]] 안됨", 
        "P는 처치관여 하지 않아도 [[SUMMON]].\n 범위는 미드 일자부쉬 거리 정도.", 
        "P와 R의 [[SLOW]]는 지속 [[AOE]] [[SLOW]].", 
        "Q는 적중해야 뒤쪽에 파편으로 [[PIERCE]] 피해.", 
        "R은 적에게 사용할때 [[TIMING_CAST]]이 있음. \n 자신에게 쓸 때는 즉시시전.",
        "R은 상대에게 쓰나 자신에게 쓰나 데미지 차이가 없음. \n 심지어 대상과 대상 주변의 피해량이 같음."
      ],
        en: [
        "[[W_FLASH]] not possible",
        "P [[SUMMON]]s even without kill participation. \n The range is about the width of the mid lane side brush.",
        "P's and R's [[SLOW]] are persistent [[AOE]] [[SLOW]].",
        "Q must hit to deal [[PIERCE]] damage with a shard behind the target.",
        "R has [[TIMING_CAST]] when cast on an enemy. \n When cast on herself, it is instant.",
        "R deals the same damage whether cast on an enemy or on herself. \n Even the damage to the target and to those around it is identical."
      ]
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

export default lissandra;

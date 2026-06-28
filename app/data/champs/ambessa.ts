import type { ChampData } from "../interactions/types";

const ambessa: ChampData = {
  id: "ambessa",
  skills: {
    P: { phases: [
      { label: { ko: "P 돌진", en: "P Dash" }, tags: ["ST_CONDITIONAL", "DASH"] },
      { label: { ko: "P 버프 스택", en: "P Buff Stack"  }, tags: ["ON_HIT", "RANGE_UP", "AS_UP", "ENERGY_RESTORE"] },
    ] },
    
    Q: ["Q_FLASH", "SKILL_RECAST", "SEPARATOR", "BUFF_STACK"],
    W: ["W_FLASH", "SHIELD", "SEPARATOR", "BUFF_STACK"],
    E: ["E_FLASH", "SLOW", "SEPARATOR", "BUFF_STACK"],
    R: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS", "AR_PEN", "SEPARATOR", "ST_CONDITIONAL", "OMNIVAMP"] },
      { label: { ko: "액티브", en: "Active" }, tags: [ "BLINK", "WALL_HOP", "SUPPRESS", "STUN", "UNSTOPPABLE"] },
      ] },
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
      { label: { ko: "P", en: "P" }, tags: ["ST_CONDITIONAL", "DASH"] },
      { label: { ko: "P 버프스택", en: "P Buff Stack"  }, tags: ["ST_CONDITIONAL", "STACK_CONSUME", "BA", "SEPARATOR_NEWLINE", "SEPARATOR", "ON_HIT", "DMG_PHYSICAL", "RANGE_UP", "AS_UP", "ENERGY_RESTORE"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "SKILL_RECAST", "SEPARATOR", "BUFF_STACK"] },
      { label: { ko: "Q2", en: "Q2"  }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "SEPARATOR", "BUFF_STACK"] },
    ] },

    W: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "SHIELD", "SEPARATOR", "BUFF_STACK"],

    E: ["DMG_PHYSICAL", "AOE", "SLOW", "SEPARATOR", "BUFF_STACK"],

    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["PASSIVE_BONUS", "AR_PEN", "SEPARATOR", "ST_CONDITIONAL", "OMNIVAMP"] },
      { label: { ko: "R 액티브", en: "R Active" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "LOCKED", "SINGLE", "SEPARATOR_NEWLINE", "SEPARATOR", "BLINK", "UNSTOPPABLE", "SUPPRESS", "STUN", "SEPARATOR", "BUFF_STACK"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: { 
        ko: [
        "Q, W, E로 어그로끌다 R로 진입해서 각만들기.\n또는 R로 도망치기.", "R로 고립된 챔피언 암살.", "그냥 잘 싸우기."
        ], en: [
          "Poke with Q, W, and E, then dive in with R to find an opening.\nOr use R to escape.",
          "Use R to assassinate isolated champions.",
          "Just play well.",
        ] },
      note1: {

        ko: [
        "스킬을 사용하고 이동을 하면 [[DASH]]. \n \n 스킬을 사용하면 [[BUFF_STACK]] 획득. \n 체력바 밑에 표시. \n [[BUFF_STACK]]이 있을 때 [[RANGE_UP]], [[AS_UP]]. \n  [[BA]]를 치면 [[STACK_CONSUME]] [[DMG_PHYSICAL]], [[ENERGY_RESTORE]]. \n 그래서 스킬 스킬 사이에 평타를 섞어주면 좋음.",
       
        "Q1, Q2로 나뉨 \n Q1은 [[AOE]] [[DMG_PHYSICAL]]. \n 적중 시 Q2 [[SKILL_RECAST]] 가능. \n Q2는 좁은 직선 [[AOE]] [[DMG_PHYSICAL]]. \n Q1은 가장자리, Q2는 처음대상에게 강한 피해. \n Q1, Q2 사용 후 P의 효과로 [[DASH]] 가능.",

        "W는 [[SHIELD]]. \n 0.5초 뒤 [[AOE]] [[DMG_PHYSICAL]]. \n 0.5초 동안 피해를 받는다면 강화 [[DMG_PHYSICAL]]. \n 0.5초 동안 P의 효과로 [[DASH]] 가능.",

        "E는 제자리에서 회전하여 [[AOE]] [[DMG_PHYSICAL]]. \n P의 효과로 [[DASH]] 하면 \n 한 번 더 회전하여 [[AOE]] [[DMG_PHYSICAL]]. \n [[DASH]] 하지 않으면 추가 발동 없음.",

        "R의 [[PASSIVE_BONUS]]는 [[AR_PEN]]. \n 스킬 피해에 [[OMNIVAMP]]. \n 그래서 사실상 모든 스킬에 [[OMNIVAMP]]. \n \n R은 경로상 맨 뒤 적챔피언에게 적중. \n [[SUPPRESS]]하고 착지할 때 [[DMG_PHYSICAL]], 잠깐의 [[STUN]]. \n 끝나고 바로 Q를 쓰는 게 국민 콤보.",


        ],

        en: [
          "Moving after using a skill triggers a [[DASH]]. \n \n Using a skill grants a [[BUFF_STACK]]. \n Shown below the health bar. \n While holding a [[BUFF_STACK]], gain [[RANGE_UP]] and [[AS_UP]]. \n [[BA]] consumes the stack for bonus [[DMG_PHYSICAL]] and [[ENERGY_RESTORE]]. \n Weaving autos between skills is recommended.",

          "Divided into Q1 and Q2. \n Q1 deals [[AOE]] [[DMG_PHYSICAL]]. \n On hit, Q2 can be [[SKILL_RECAST]]. \n Q2 deals narrow line [[AOE]] [[DMG_PHYSICAL]]. \n Q1 deals increased damage at the edge; Q2 deals increased damage to the first target. \n After using Q1 or Q2, P allows a [[DASH]].",

          "W grants a [[SHIELD]]. \n After 0.5 seconds, deals [[AOE]] [[DMG_PHYSICAL]]. \n If hit during the 0.5 seconds, deals enhanced [[DMG_PHYSICAL]]. \n During the 0.5 seconds, P allows a [[DASH]].",

          "E spins in place, dealing [[AOE]] [[DMG_PHYSICAL]]. \n If P triggers a [[DASH]], \n spins once more for additional [[AOE]] [[DMG_PHYSICAL]]. \n No extra spin without the [[DASH]].",

          "R's [[PASSIVE_BONUS]] is [[AR_PEN]]. \n Grants [[OMNIVAMP]] on skill damage. \n So effectively all skills benefit from [[OMNIVAMP]]. \n \n R targets the rearmost enemy champion in its path. \n [[SUPPRESS]]es the target, then deals [[DMG_PHYSICAL]] and a brief [[STUN]] on landing. \n Following up immediately with Q is the standard combo.",
        ]

      },

      note2: {
        ko: [
        "암베사 P로 [[WALL_HOP]] 불가.",
        "R은 판정이 상당히 강력한 [[SUPPRESS]]. \n [[CC_BUFFER]]도 무시하고 그 자리에서 [[SUPPRESS]]함."
      ],
        en: [
          "Ambessa's P cannot [[WALL_HOP]].",
          "R applies a notably powerful [[SUPPRESS]]. \n It even ignores [[CC_BUFFER]] and [[SUPPRESS]]es on the spot.",
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

export default ambessa;

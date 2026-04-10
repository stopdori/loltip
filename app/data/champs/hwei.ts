import type { ChampData } from "../interactions/types";

const hwei: ChampData = {
  id: "hwei",

  skills: {
    base: {
      // 🔫 Q스킬 기반
      P: [],
      Q: ["Q_FLASH"],
      W: ["W_FLASH"],
      E: ["SLOW"],
      R: ["R_FLASH", "SLOW"],
    },

    alt: {
      // 🔨 W스킬 기반
      P: [],
      Q: ["MS_UP"],
      W: ["W_FLASH", "SHIELD"],
      E: ["MANA_RESTORE"],
      R: ["R_FLASH", "SLOW"],
    },

    alt2: {
      // 🔨 E스킬 기반
      P: [],
      Q: ["Q_FLASH", "FEAR"],
      W: ["W_FLASH", "ROOT"],
      E: ["E_FLASH", "AIRBORNE", "SLOW"],
      R: ["R_FLASH", "SLOW"],
    },
  },

  vision: {
    base: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
    alt2: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: ["DMG_MAGIC", "PROC", "ZONE", "ST_DELAYED"],
      Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "DEBUFF_STACK"],
      W: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "DEBUFF_STACK", "ST_DELAYED"],
      E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "ZONE", "DOT", "DEBUFF_STACK", "ST_DELAYED", "SLOW"],
      R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "DEBUFF_STACK", "ST_DELAYED"],
    },


    alt: {
      P: ["DMG_MAGIC", "ZONE", "PROC"],
      Q: ["PROJECTILE", "ZONE"],
      W: ["ZONE"],
      E: ["DMG_MAGIC", "PROJECTILE", "BUFF_STACK", "DEBUFF_STACK", "ON_HIT"],
      R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "DEBUFF_STACK", "ST_DELAYED"],
    },


    alt2: {
      P: ["DMG_MAGIC", "ZONE", "PROC"],
      Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "DEBUFF_STACK", "FEAR"],

      W:{ phases: [
      { label: { ko: "EW 장판", en: "EW Zone" }, tags: ["TIMING_CAST", "PROJECTILE", "ZONE", "ST_DELAYED"] },
      { label: { ko: "EW 투사체", en: "EW Projectile" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "PROJECTILE", "HOMING", "SINGLE", "DEBUFF_STACK", "ROOT"] },
    ] },

      E: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "DEBUFF_STACK", "ST_DELAYED", "AIRBORNE"],
      R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "DEBUFF_STACK", "ST_DELAYED"],
    },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "Q 계열로 포킹을 하다 \n E 계열로 이동을 제한하고 \n R을 묻혀 광역피해.", "R을 맞히면 QE, EE로 최대한 P의 [[DEBUFF]]를 많이 터뜨려 \n [[AOE]] [[DMG_MAGIC]]를 많이 넣는게 좋음.",
        ],
        en: [
          "Poke with Q skills, \n then limit movement with E skills \n and land R for area damage.",
          "After landing R, use QE and EE to trigger as many P [[DEBUFF]] explosions as possible \n for maximum [[AOE]] [[DMG_MAGIC]].",
        ] },
      note1: {

        ko: [
          "흐웨이는 Q, W, E를 눌러서 스킬을 준비. \n 이때 Q, W, E, R이 변경됨. R은 취소버튼. \n \n Q는 큰 피해를 주는 3개의 스킬 \n W는 아군에게 이로운 3개의 스킬 \n E는 CC 계열 3개의 스킬 \n \n 그래서 일반 R까지 총 10개의 스킬이 있음. \n \n",

          "P는 스킬로 [[DEBUFF]]를 걸고 \n 스킬로 한 번 더 걸면 \n 발밑에 폭발이 일어나 [[AOE]] [[DMG_MAGIC]]. \n \n",

          "Q는 빨강 데미지 계열 \n \n QQ 적 최대체력 비례 [[AOE]] [[DMG_MAGIC]]와 [[DEBUFF]]. \n \n QW [[AOE]] [[DMG_MAGIC]]와 [[DEBUFF]]. \n 고립, 이동불가 챔피언에 잃은체력 비례 데미지. \n \n QE [[ZONE]] [[DOT]] [[DMG_MAGIC]]와 [[DEBUFF]]와 [[SLOW]]. \n \n",

          "W는 파랑 아군 [[BUFF]] 계열. \n \n WQ 아군 [[MS_UP]] [[ZONE]]. \n \n WW 지속적으로 차는 [[SHIELD]] [[ZONE]]. \n \n WE [[BUFF]]스택 3개 추가. \n 스킬과 [[BA]]마다 1개 소모. \n [[BUFF]] 하나당 [[MANA_RESTORE]]과 [[DMG_MAGIC]]. \n [[BA]]에는 [[DEBUFF]]도 추가. \n \n",

          "E는 보라 CC 계열 \n \n EQ [[SINGLE]]대상 [[FEAR]] [[DEBUFF]] [[PROJECTILE]] 발사. \n \n EW [[ZONE]]을 깔고 잠시뒤에 \n [[ZONE]]이 사라지면서 [[AOE]]내의 적 챔피언에게 \n [[ROOT]] [[DEBUFF]] [[PROJECTILE]] 발사. \n [[PIERCE]] 안됨. 미니언에도 막힘. \n \n EE [[AOE]] [[AIRBORNE]]과 [[SLOW]]와 [[DEBUFF]]. \n \n ",

          "R은 [[PROJECTILE]]를 발사. \n 적 챔피언이 맞으면 대상 주변에 [[AURA]]를 생성. \n [[AURA]]는 [[DOT]] [[DMG_MAGIC]]와 중첩되는 [[SLOW]]. \n [[DEBUFF]]는 1번. \n 시간이 지나면 [[AURA]]가 폭발하여 광역 [[DMG_MAGIC]].",
        ],

        en: [
          "Hwei prepares a skill by pressing Q, W, or E. \n This changes Q, W, E, and R — R becomes a cancel button. \n \n Q: 3 high-damage skills \n W: 3 ally utility skills \n E: 3 CC skills \n \n Including the base R, Hwei has 10 skills total. \n \n",

          "P: Applying [[DEBUFF]] with a skill, \n then applying it again \n triggers an explosion at the target's feet for [[AOE]] [[DMG_MAGIC]]. \n \n",

          "Q — Red damage skills. \n \n QQ: [[AOE]] [[DMG_MAGIC]] and [[DEBUFF]] scaling with enemy max HP. \n \n QW: [[AOE]] [[DMG_MAGIC]] and [[DEBUFF]]. \n Bonus damage scaling with missing HP against isolated or immobilized champions. \n \n QE: [[ZONE]] [[DOT]] [[DMG_MAGIC]] with [[DEBUFF]] and [[SLOW]]. \n \n",

          "W — Blue ally [[BUFF]] skills. \n \n WQ: [[ZONE]] that grants ally [[MS_UP]]. \n \n WW: [[ZONE]] that continuously regenerates a [[SHIELD]]. \n \n WE: Adds 3 [[BUFF]] stacks. \n Each skill or [[BA]] consumes 1 stack. \n Each stack provides [[MANA_RESTORE]] and [[DMG_MAGIC]]. \n [[BA]]s also apply [[DEBUFF]]. \n \n",

          "E — Purple CC skills. \n \n EQ: Fires a [[SINGLE]]-target [[PROJECTILE]] applying [[FEAR]] and [[DEBUFF]]. \n \n EW: Places a [[ZONE]], then after a delay the zone collapses \n and fires a [[ROOT]] [[DEBUFF]] [[PROJECTILE]] at enemy champions inside. \n Cannot [[PIERCE]] — blocked by minions. \n \n EE: [[AOE]] [[AIRBORNE]], [[SLOW]], and [[DEBUFF]]. \n \n",

          "R: Fires a [[PROJECTILE]]. \n Hitting an enemy champion creates an [[AURA]] around them. \n The [[AURA]] deals [[DOT]] [[DMG_MAGIC]] and stacking [[SLOW]]. \n Applies [[DEBUFF]] once. \n After a delay, the [[AURA]] explodes for [[AOE]] [[DMG_MAGIC]].",
        ]

      },

      note2: {
        ko: [
        "WW [[SHIELD]]는 아군에게 효과 15% 감소",
        "P의 [[DEBUFF]]가 쌓이는 스킬\nQQ, QW, QE, WE([[BA]]) \n EQ, EW, EE, R ([[AURA]] 범위에 닿으면)",
        "귀환 중에 Q, W, E로 준비를 해도 \n 귀환이 끊기지 않음.",
      ],
        en: [
          "WW [[SHIELD]] is 15% less effective on allies.",
          "Skills that apply P's [[DEBUFF]]:\nQQ, QW, QE, WE ([[BA]]) \n EQ, EW, EE, R (on contact with the [[AURA]])",
          "Preparing a skill with Q, W, or E during recall \n does not cancel the recall.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 115,
    16: 80,
  },
};

export default hwei;
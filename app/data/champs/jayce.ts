import type { ChampData } from "../interactions/types";

const jayce: ChampData = {
  id: "jayce",

  skills: {
    base: {
      // 캐논
      P: ["ST_CONDITIONAL", "MS_UP"],
      Q: ["Q_FLASH"],
      W: ["AA_RESET", "AS_UP"],
      E: ["MS_UP", "SEPARATOR", "ST_CONDITIONAL", "ST_CONDITIONAL", "EMPOWERED", "Q"],
      R: ["TRANSFORM"],
    },

    alt: {
      // 해머
      P: ["MS_UP"],
      Q: ["Q_FLASH", "SLOW", "DASH", "WALL_HOP"],
      W: ["AURA"],
      E: ["E_FLASH", "KNOCKBACK", "SEPARATOR", "ST_CONDITIONAL", "INSEC_KICK"],
      R: ["TRANSFORM", "SEPARATOR", "ST_CONDITIONAL", "AR_MR_SHRED"],
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
  },

  gimmick: {
    base: {
      P: ["ST_CONDITIONAL", "BUFF", "MS_UP"],

      Q:    { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "AOE"] },
      { label: { ko: "강화 (QE)", en: "Empowered (QE)" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "AOE"] },
    ] },

      W: ["DMG_PHYSICAL", "PROJECTILE", "ON_HIT", "AA_RESET"],

      E: ["ZONE", "SEPARATOR", "ST_CONDITIONAL", "EMPOWERED", "Q"],

      R:    { phases: [
      { label: { ko: "해머폼", en: "Hammer Form" }, tags: ["TRANSFORM"] },
      { label: { ko: "해머폼 버프", en: "Hammer Buff" }, tags: ["BUFF_FORM", "AR_MR_UP", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC", "ON_HIT"] },
    ] },
    },

    
    alt: {
      P: [],
      Q: ["DMG_PHYSICAL", "TARGETED", "AOE", "DASH", "WALL_HOP", "SLOW"],

      W: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS", "ST_CONDITIONAL", "MANA_RESTORE"] },
      { label: { ko: "액티브", en: "Active" }, tags: ["DMG_MAGIC", "AURA"] },
    ] },

      E: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "KNOCKBACK", "SEPARATOR", "ST_CONDITIONAL", "INSEC_KICK"],

      R:    { phases: [
      { label: { ko: "캐논폼", en: "Cannon Form" }, tags: ["TRANSFORM"] },
      { label: { ko: "캐논폼 버프", en: "Cannon Buff" }, tags: ["ON_HIT", "AR_MR_SHRED"] },
    ] },
    },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "캐논폼 들고 QE 포킹, 카이팅 하다 \n 정말 중요할 때 해머로 내려찍고 E의 [[KNOCKBACK]]으로 \n 거리 벌려서 다시 캐논 카이팅 ", "정말 어려운 챔프같음 고수님들 제보 부탁드림."
        ], en: ["Poke and kite in cannon form with QE, \n then switch to hammer and slam at key moments, \n use E's [[KNOCKBACK]] to create distance and return to cannon kiting", "Seems like a very difficult champion — input from skilled players welcome."] },
      note1: {

        ko: [
          "P는 [[TRANSFORM]] 할 때 잠깐 [[MS_UP]]. \n 1레벨부터 [[TRANSFORM]] 가능. \n \n ",

          "캐논폼 \n \n Q는 [[AOE]] [[PROJECTILE]] 발사. \n \n W는 사용하면 [[BUFF_FORM]]. \n 지속되는 동안 3번의 [[BA]] 최대치로 [[AS_UP]]. \n [[AA_RESET]] 가능. \n \n E는 [[MS_UP]] [[ZONE]]을 설치. \n Q가 통과하면 [[EMPOWERED]]. \n \n R은 해머로 [[TRANSFORM]] 하고 추가 [[AR_MR_UP]]. \n \n ",
          "해머폼 \n \n Q는 [[DASH]] [[AOE]] [[SLOW]]. \n \n W의 [[PASSIVE_BONUS]]는 [[BA]] 공격 시 [[MANA_RESTORE]]. \n \n W는 [[AURA]] [[DMG_MAGIC]]. \n \n E는 [[SINGLE]] [[TARGETED]] 체력비례 [[DMG_PHYSICAL]]와 [[KNOCKBACK]]. \n \n R은 캐논으로 [[TRANSFORM]] 하고 다음 [[BA]] 시 [[AR_MR_SHRED]]. \n 챔피언 아닌 대상에게도 소모. \n \n ",
          
        ],

        en: [
          "P grants a brief [[MS_UP]] on [[TRANSFORM]]. \n [[TRANSFORM]] is available from level 1. \n \n ",
          "Cannon Form \n \n Q fires an [[AOE]] [[PROJECTILE]]. \n \n W activates [[BUFF_FORM]]. \n While active, up to 3 [[BA]]s benefit from max [[AS_UP]]. \n [[AA_RESET]] possible. \n \n E places an [[MS_UP]] [[ZONE]]. \n Q passing through it becomes [[EMPOWERED]]. \n \n R [[TRANSFORM]]s to hammer and grants additional [[AR_MR_UP]]. \n \n ",
          "Hammer Form \n \n Q is a [[DASH]] [[AOE]] [[SLOW]]. \n \n W's [[PASSIVE_BONUS]] [[MANA_RESTORE]]s on [[BA]]. \n \n W deals [[AURA]] [[DMG_MAGIC]]. \n \n E deals [[SINGLE]] [[TARGETED]] max-HP-scaling [[DMG_PHYSICAL]] with [[KNOCKBACK]]. \n \n R [[TRANSFORM]]s to cannon and applies [[AR_MR_SHRED]] on the next [[BA]]. \n Also consumed on non-champion targets. \n \n ",
        ]

      },

      note2: {
        ko: [
        "EQ보다 QE가 상대 입장에서 더 까다로움.", "[[Q_FLASH]] 할때 [[Q_FLASH]] E를 하면 [[EMPOWERED]] 가능.", "캐논폼 W의 [[AS_UP]]는 \n 해머폼으로 [[TRANSFORM]]해도 유지."
      ],
        en: ["QE is harder to deal with from the opponent's perspective than EQ.", "Using E after [[Q_FLASH]] allows [[EMPOWERED]].", "Cannon form W's [[AS_UP]] \n persists even after [[TRANSFORM]]ing to hammer form."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },
};

export default jayce;

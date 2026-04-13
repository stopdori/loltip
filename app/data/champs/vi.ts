import type { ChampData } from "../interactions/types";

const vi: ChampData = {
  id: "vi",
  skills: {
    P: ["SHIELD"],
    Q: ["Q_FLASH", "AIRBORNE", "WALL_HOP"],
    W: ["AR_SHRED", "AS_UP"],
    E: ["AA_RESET"],
    R: ["R_FLASH", "REVEALED", "KNOCKBACK", "STUN", "WALL_HOP", "UNSTOPPABLE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["PASSIVE_BONUS"],
    Q: ["DMG_PHYSICAL", "SKILL_CHARGED", "DASH", "SINGLE", "DEBUFF_STACK"],
    W: ["PASSIVE_BONUS", "DEBUFF_INTERACT", "BA", "Q", "E"],

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_PHYSICAL", "ON_HIT", "RECHARGE", "DEBUFF_STACK"] },
      { label: { ko: "E 장풍", en: "E Cone" }, tags: ["DMG_PHYSICAL", "AOE"] },
    ] },

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "SINGLE", "HOMING", "DASH", "LOCKED", "UNSTOPPABLE"] },
      { label: { ko: "R 경로", en: "R Through" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "AOE"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "",
        ], en: [] },
      note1: {

        ko: [
          "P",
          "Q",
          "W",
          "E",
          "R",
        ],

        en: []

      },

      note2: {
        ko: [
        "바이가 cc를 먼저 넣어주면\n팀이 연계하기 상당히 편함", "Q로 적중 시키면 W 효과 적용", "R로 대상을 지정하면 [[INVISIBILITY]]도 보임\n대상경로 적들을 [[KNOCKBACK]], [[STUN]] 시킴"
      ],
        en: ["Setting up CC first makes it much easier for teammates to follow up", "W effects apply on Q hit", "R targets are visible even through [[INVISIBILITY]].\nEnemies in R's path are [[KNOCKBACK]]ed and [[STUN]]ed"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 115,
    16: 90,
  },

};

export default vi;

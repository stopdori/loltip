import type { ChampData } from "../interactions/types";

const yorick: ChampData = {
  id: "yorick",
  skills: {
    P: ["ALLY_TP_OK"],
    Q: ["HEAL", "AA_RESET"],
    W: ["W_FLASH", "TERRAIN", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"],
    E: ["E_FLASH", "MS_UP", "SLOW", "AR_SHRED"],
    R: ["ALLY_TP_OK"],
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

    Q: { phases: [
      { label: { ko: "평타 강화", en: "Empowered Basic Attack" }, tags: ["EMPOWERED", "BA", "DMG_PHYSICAL", "ON_HIT"] },
      { label: { ko: "망령 소환", en: "Wlaker Summon" }, tags: ["ST_CONDITIONAL", "SUMMON"] },
    ] },

    W: ["SUMMON", "TERRAIN", "ZONE"],
    
    E: { phases: [
      { label: { ko: "투사체", en: "Projectile" }, tags: ["TIMING_CAST", "PROJECTILE"] },
      { label: { ko: "장판", en: "Zone" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ZONE", "MARK"] },
    ] },
  
    R: { phases: [
      { label: { ko: "망령 2, 마녀 소환", en: "2 Walkers And Maiden Summon" }, tags: ["TIMING_CAST", "SUMMON", "SKILL_RECAST", "CANCELLABLE"] },
      { label: { ko: "마녀", en: "Maiden" }, tags: ["DMG_MAGIC", "NON_PROJECTILE", "SINGLE"] },
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
        "W에 텔 안됨", "R 재사용하면 다시 불러들일 수 없음"
      ],
        en: ["Cannot TP onto W", "R cannot be recalled after recasting"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default yorick;

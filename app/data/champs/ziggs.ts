import type { ChampData } from "../interactions/types";

const ziggs: ChampData = {
  id: "ziggs",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "AIRBORNE", "WALL_HOP"],
    E: ["E_FLASH", "SLOW"],
    R: ["R_FLASH"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "ON_HIT"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE"],

    W: { phases: [
      { label: { ko: "투사체", en: "Projectile" }, tags: ["TIMING_CAST", "PROJECTILE", "SKILL_RECAST"] },
      { label: { ko: "장판", en: "Zone" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ZONE", "AIRBORNE"] },
      { label: { ko: "포탑 처형", en: "Turret Execute" }, tags: ["ST_CONDITIONAL", "EXECUTE"] },
    ] },

    E: { phases: [
      { label: { ko: "투사체", en: "Projectile" }, tags: ["TIMING_CAST", "PROJECTILE"] },
      { label: { ko: "장판", en: "Zone" }, tags: ["DMG_MAGIC", "ZONE", "SLOW"] },
    ] },
    
    R: ["DMG_MAGIC", "TIMING_CAST", "NON_PROJECTILE", "ZONE"],
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
        "[[W_FLASH]], [[E_FLASH]] 안됨", "W로 타워[[EXECUTE]] 가능", "R은 중심이 효과가 큼"
      ],
        en: ["[[W_FLASH]] and [[E_FLASH]] not possible", "W can [[EXECUTE]] towers", "R deals maximum damage in the center"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 95,
    16: 70,
  },

};

export default ziggs;

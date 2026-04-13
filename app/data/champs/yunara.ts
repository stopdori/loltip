import type { ChampData } from "../interactions/types";

const yunara: ChampData = {
  id: "yunara",
  skills: {
    P: [],
    Q: ["AS_UP"],
    W: ["W_FLASH", "SLOW"],
    E: ["MS_UP"],
    R: [],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "DMG_MAGIC", "ON_HIT"],

    Q: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["DMG_MAGIC", "ON_HIT", "BUFF_STACK"] },
      { label: { ko: "액티브", en: "Active" }, tags: ["STACK_CONSUME", "BUFF_FORM", "DMG_MAGIC", "PROJECTILE", "ON_HIT"] },
      { label: { ko: "액티브 온힛 전이", en: "Active On-hit Chain" }, tags: ["ST_CONDITIONAL", "CHAIN", "DMG_PHYSICAL", "PROJECTILE"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "DOT"] },
      { label: { ko: "W 초월", en: "W Transcend" }, tags: ["DMG_MAGIC", "TIMING_CAST", "NON_PROJECTILE", "AOE"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: [] },
      { label: { ko: "E 초월", en: "E Transcend" }, tags: ["DASH"] },
    ] },

    R: ["BUFF_FORM"],
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
        "W를 쓰고 R을 쓰면 쿨타임 80% 감소", "E를 쓰고 R을 쓰면 E 초기화"
      ],
        en: ["Using W then R reduces W cooldown by 80%", "Using E then R resets E"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

};

export default yunara;

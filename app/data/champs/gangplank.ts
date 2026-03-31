import type { ChampData } from "../interactions/types";

const gangplank: ChampData = {
  id: "gangplank",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH"],
    W: ["HEAL", "CC_CLEANSE"],
    E: ["E_FLASH", "SLOW", ],
    R: ["SLOW"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DMG_TRUE", "ON_HIT", "DOT"],
    Q: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "PROJECTILE"],
    W: [],
    E: ["DMG_PHYSICAL", "TIMING_CAST", "ZONE", "CHAIN", "SUMMON"],
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "DOT", "LOCKED"] },
      { label: { ko: "죽음의 여신", en: " Death's Daughter" }, tags: ["DMG_TRUE"] },
    ] },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "P의 쿨타임은 갱플랭크가 화약통을 폭발시키면 초기화 됨.", "마나 게이지 밑에 화약통 갯수 나옴", 
      ],
        en: ["Powder keg count is shown below the mana bar"]
        },
    },
  },

  ultCooldown: {
    6: 160,
    11: 140,
    16: 120,
  },

};

export default gangplank;

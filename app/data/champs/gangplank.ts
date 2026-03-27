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
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  notes: {
    ko: [
    "마나 게이지 밑에 화약통 갯수 나옴"
  ],
    en: ["Powder keg count is shown below the mana bar"]
  },

  ultCooldown: {
    6: 160,
    11: 140,
    16: 120,
  },

};

export default gangplank;

import type { ChampData } from "../interactions/types";

const gangplank: ChampData = {
  id: "gangplank",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH"],
    W: ["HEAL", "CC_CLEANSE"],
    E: ["E_FLASH", "SLOW", ],
    R: ["SLOW"],
    ETC: [],
  },

  notes: {
    ko: [
    "마나 게이지 밑에 화약통 갯수 나옴"
  ],
    en: []
  },

vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
    ETC: [],
  },


  ultCooldown: {
    6: 160,
    11: 140,
    16: 120,
  },

};

export default gangplank;

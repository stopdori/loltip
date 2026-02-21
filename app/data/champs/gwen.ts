import type { ChampData } from "../interactions/types";

const gwen: ChampData = {
  id: "gwen",
  skills: {
    P: ["LIFESTEAL"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "UNTARGETABLE"],
    E: ["E_FLASH", "AA_RESET", "WALL_HOP"],
    R: ["R_FLASH", "SLOW"],
    ETC: [],
  },

  notes: {
    ko: [
    "Q는 중앙에 명중해야 좋음",
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
    6: 120,
    11: 100,
    16: 80,
  },

};

export default gwen;

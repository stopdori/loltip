import type { ChampData } from "../interactions/types";

const malphite: ChampData = {
  id: "malphite",
  skills: {
    P: ["SHIELD"],
    Q: ["Q_FLASH", "SLOW", "MS_UP"],
    W: ["AA_RESET"],
    E: ["E_FLASH", "AS_DOWN"],
    R: ["WALL_HOP", "UNSTOPPABLE"],
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
    "[[R_FLASH]] 안됨", "E에는 상대 공속감소가 있음"
  ],
    en: ["[[R_FLASH]] not possible", "E reduces the target's attack speed"]
  },

  ultCooldown: {
    6: 130,
    11: 115,
    16: 100,
  },

};

export default malphite;

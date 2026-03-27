import type { ChampData } from "../interactions/types";

const leblanc: ChampData = {
  id: "leblanc",
  skills: {
    P: ["INVISIBILITY"],
    Q: ["Q_FLASH"],
    W: ["WALL_HOP"],
    E: ["E_FLASH", "REVEALED", "ROOT"],
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
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  notes: {
    ko: [
    "[[W_FLASH]] 안됨", "분신 컨트롤은 alt 우클릭으로 가능"
  ],
    en: ["[[W_FLASH]] not possible", "Clone can be controlled with alt + right-click"]
  },

  ultCooldown: {
    6: 45,
    11: 35,
    16: 25,
  },

};

export default leblanc;

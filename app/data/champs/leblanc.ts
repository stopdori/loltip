import type { ChampData } from "../interactions/types";

const leblanc: ChampData = {
  id: "leblanc",
  skills: {
    P: ["INVISIBILITY"],
    Q: ["Q_FLASH"],
    W: ["WALL_HOP"],
    E: ["E_FLASH", "REVEALED", "ROOT"],
    R: [],
    ETC: [],
  },

  notes: {
    ko: [
    "[[W_FLASH]] 안됨", "분신 컨트롤은 alt 우클릭으로 가능"
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
    6: 45,
    11: 35,
    16: 25,
  },

};

export default leblanc;

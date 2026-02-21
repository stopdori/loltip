import type { ChampData } from "../interactions/types";

const vex: ChampData = {
  id: "vex",
  skills: {
    P: ["FEAR"],
    Q: ["Q_FLASH"],
    W: ["SHIELD"],
    E: ["SLOW"],
    R: ["R_FLASH", "WALL_HOP"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[W_FLASH]], [[E_FLASH]] 안됨", "R로 날아갈 때 점멸로 멈출 수 있음 ",
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
    6: 140,
    11: 120,
    16: 100,
  },

};

export default vex;

import type { ChampData } from "../interactions/types";

const ziggs: ChampData = {
  id: "ziggs",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "AIRBORNE", "WALL_HOP"],
    E: ["E_FLASH", "SLOW"],
    R: ["R_FLASH"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[W_FLASH]], [[E_FLASH]] 안됨", "W로 타워[[EXECUTE]] 가능", "R은 중앙이 효과가 큼"
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
    11: 95,
    16: 70,
  },

};

export default ziggs;

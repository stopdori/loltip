import type { ChampData } from "../interactions/types";

const gragas: ChampData = {
  id: "gragas",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["DMG_REDUCE"],
    E: ["E_FLASH", "KNOCKBACK", "WALL_HOP"],
    R: ["R_FLASH", "KNOCKBACK"],
    ETC: [],
  },

  notes: {
    ko: [
    "E로 날아가는 도중에 Q R 다 가능",
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
    6: 100,
    11: 85,
    16: 70,
  },

};

export default gragas;

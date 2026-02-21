import type { ChampData } from "../interactions/types";

const irelia: ChampData = {
  id: "irelia",
  skills: {
    P: ["AS_UP"],
    Q: ["Q_FLASH", "LIFESTEAL", "WALL_HOP"],
    W: ["W_FLASH", "DMG_REDUCE", "UNSTOPPABLE"],
    E: ["STUN"],
    R: ["R_FLASH", "SLOW"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[E_FLASH]] 안됨", "P는 최대 4스택\n 중첩 유지는 챔피언, 타워 때려야 됨"
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
    6: 125,
    11: 105,
    16: 85,
  },

};

export default irelia;

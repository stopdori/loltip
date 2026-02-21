import type { ChampData } from "../interactions/types";

const cassiopeia: ChampData = {
  id: "cassiopeia",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH", "MS_UP"],
    W: ["W_FLASH", "GROUNDED", "SLOW"],
    E: ["E_FLASH", "HEAL"],
    R: ["R_FLASH", "STUN", "SLOW"],
    ETC: [],
  },

  notes: {
    ko: [
    "이제 신발 구매가능함", "Q [[MS_UP]]는 맞혀야 증가함", "R은 카시를 바라보고 걸리면 [[STUN]]\n카시를 등지고 걸리면 [[SLOW]]"
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

export default cassiopeia;

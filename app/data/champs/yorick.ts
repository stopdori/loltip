import type { ChampData } from "../interactions/types";

const yorick: ChampData = {
  id: "yorick",
  skills: {
    P: ["ALLY_TP_OK"],
    Q: ["HEAL", "AA_RESET"],
    W: ["W_FLASH", "WALL"],
    E: ["E_FLASH", "MS_UP", "SLOW", "AR_SHRED"],
    R: ["ALLY_TP_OK"],
    ETC: [],
  },

  notes: {
    ko: [
    "W에 텔 안됨", "R 재사용하면 다시 불러들일 수 없음"
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

export default yorick;

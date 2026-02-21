import type { ChampData } from "../interactions/types";

const taric: ChampData = {
  id: "taric",
  skills: {
    P: ["AS_UP"],
    Q: ["HEAL"],
    W: ["W_FLASH", "SHIELD"],
    E: ["E_FLASH", "STUN"],
    R: ["R_FLASH", "INVULNERABLE"],
    ETC: [],
  },

  notes: {
    ko: [
    "P의 [[MS_UP]]은 스킬 사용 후 다음 평타 2대",
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
    6: 180,
    11: 150,
    16: 120,
  },

};

export default taric;

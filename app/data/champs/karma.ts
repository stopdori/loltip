import type { ChampData } from "../interactions/types";

const karma: ChampData = {
  id: "karma",
  skills: {
    base : {
    P: [],
    Q: ["Q_FLASH", "SLOW"],
    W: ["W_FLASH", "ROOT", "TETHER", "REVEALED"],
    E: ["E_FLASH", "SHIELD", "MS_UP"],
    R: [],
    ETC: [],
  },

  alt: {
      
      P: [],
      Q: ["Q_FLASH", "SLOW"],
      W: ["W_FLASH", "ROOT", "TETHER", "REVEALED", "HEAL"],
      E: ["E_FLASH", "SHIELD", "MS_UP"],
      R: [],
      ETC: [],
    },
  },

  notes: {
    ko: [
    "만트라 W는 발동할 때 [[HEAL]]\n[[TETHER]]효과 발동 해서 [[ROOT]]되면 한번 더 [[HEAL]]",
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
    6: 38,
    11: 36,
    16: 34,
  },

};

export default karma;

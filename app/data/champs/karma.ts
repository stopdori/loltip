import type { ChampSkill } from "../types";

const karma: ChampSkill = {
  id: "karma",
  skills: {
    base : {
    P: [],
    Q: ["Q_FLASH", "SLOW"],
    W: ["W_FLASH", "ROOT", "REVEALED"],
    E: ["E_FLASH", "SHIELD", "MS_UP"],
    R: [],
    ETC: [],
  },

  alt: {
      
      P: [],
      Q: ["Q_FLASH", "SLOW"],
      W: ["W_FLASH", "ROOT", "REVEALED", "HEAL"],
      E: ["E_FLASH", "SHIELD", "MS_UP"],
      R: [],
      ETC: [],
    },
  },

  notes: [
    "만트라 W는 발동할 때 한번\n[[ROOT]]되면 한번 더 [[HEAL]]을 함",
  ],

  ultCooldown: {
    6: 38,
    11: 36,
    16: 34,
  },

};

export default karma;

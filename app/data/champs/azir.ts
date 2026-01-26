import type { ChampSkill } from "../types";

const azir: ChampSkill = {
  id: "azir",
  skills: {
    P: [],
    Q: ["SLOW"],
    W: [],
    E: ["E_FLASH", "SHIELD", "WALL_HOP"],
    R: ["WALL", "AIRBORNE"],
    ETC: [],
  },

  notes: [
    "[[Q_FLASH]] 안됨, [[R_FLASH]] 안됨, 병사에 텔 안됨",
  ],

  ultCooldown: {
    6: 120,
    11: 105,
    16: 90,
  },

};

export default azir;

import type { ChampSkill } from "../types";

const gangplank: ChampSkill = {
  id: "gangplank",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH"],
    W: ["HEAL", "CC_CLEANSE"],
    E: ["E_FLASH", "SLOW", ],
    R: ["SLOW"],
    ETC: [],
  },

  notes: [
    ""
  ],

  ultCooldown: {
    6: 160,
    11: 140,
    16: 120,
  },

};

export default gangplank;

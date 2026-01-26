import type { ChampSkill } from "../types";

const aurora: ChampSkill = {
  id: "aurora",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH"],
    W: ["MS_UP", "INVISIBILITY", "WALL_HOP"],
    E: ["E_FLASH", "SLOW", "WALL_HOP"],
    R: ["SLOW", "WALL_HOP", "UNSTOPPABLE"],
    ETC: [],
  },

  notes: [
    "[[R_FLASH]] 안됨",
  ],

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default aurora;

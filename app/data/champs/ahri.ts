import type { ChampSkill } from "../types";

const ahri: ChampSkill = {
  id: "ahri",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH"],
    W: ["MS_UP"],
    E: ["E_FLASH", "CHARM"],
    R: ["R_FLASH", "WALL_HOP"],
    ETC: [],
  },
  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default ahri;

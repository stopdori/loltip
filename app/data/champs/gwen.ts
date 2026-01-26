import type { ChampSkill } from "../types";

const gwen: ChampSkill = {
  id: "gwen",
  skills: {
    P: ["LIFESTEAL"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "UNTARGETABLE"],
    E: ["E_FLASH", "AA_RESET", "WALL_HOP"],
    R: ["R_FLASH", "SLOW"],
    ETC: [],
  },

  notes: [
    "Q는 중앙에 명중해야 좋음",
  ],


  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default gwen;

import type { ChampSkill } from "../types";

const lissandra: ChampSkill = {
  id: "lissandra",
  skills: {
    base: {
    P: ["SLOW"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["ROOT"],
    E: ["WALL_HOP"],
    R: ["R_FLASH", "STUN", "SLOW"],
    ETC: [],

  },

  alt: {
      // 🔨 변신폼 (근접)
      P: ["SLOW"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["ROOT"],
    E: ["WALL_HOP"],
    R: ["SLOW", "HEAL", "UNTARGETABLE", "TOWER_DODGE"],
    ETC: [],


  },
  },

    notes: [
    "[[W_FLASH]] 안됨", "R은 자신에게 쓸 때 회복함",
  ],

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default lissandra;

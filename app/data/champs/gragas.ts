import type { ChampSkill } from "../types";

const gragas: ChampSkill = {
  id: "gragas",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["DMG_REDUCE"],
    E: ["E_FLASH", "KNOCKBACK", "WALL_HOP"],
    R: ["R_FLASH", "KNOCKBACK"],
    ETC: [],
  },

  notes: [
    "E(배치기) 날아가는 도중에 Q R 다 가능",
  ],

  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

};

export default gragas;

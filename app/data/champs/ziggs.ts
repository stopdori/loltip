import type { ChampSkill } from "../types";

const ziggs: ChampSkill = {
  id: "ziggs",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "AIRBORNE", "WALL_HOP"],
    E: ["E_FLASH", "SLOW"],
    R: ["R_FLASH"],
    ETC: [],
  },

  notes: [
    "[[W_FLASH]], [[E_FLASH]] 안됨", "W로 타워[[EXECUTE]] 가능", "R은 중앙이 효과가 큼"
  ],

  ultCooldown: {
    6: 120,
    11: 95,
    16: 70,
  },

};

export default ziggs;

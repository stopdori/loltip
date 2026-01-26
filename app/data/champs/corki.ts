import type { ChampSkill } from "../types";

const corki: ChampSkill = {
  id: "corki",
  skills: {
    P: [],
    Q: ["Q_FLASH", "REVEALED"],
    W: ["W_FLASH", "WALL_HOP"],
    E: ["E_FLASH", "AR_MR_SHRED"],
    R: ["R_FLASH"],
    ETC: [],
  },

  notes: [
    "[[R_FLASH]]은 R누르고 바로 점멸하면 안됨 \nR누르고 점멸을 약간 천천히 써야 함",
  ],

  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },

};

export default corki;

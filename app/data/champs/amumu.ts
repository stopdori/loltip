import type { ChampSkill } from "../types";

const amumu: ChampSkill = {
  id: "amumu",
  skills: {
    P: [],
    Q: ["Q_FLASH", "STUN", "WALL_HOP", "VISION"],
    W: [],
    E: ["E_FLASH"],
    R: ["R_FLASH", "STUN"],
    ETC: [],
  },

   notes: [
    "Q로 날아가면서 R 안써짐"
  ],

  ultCooldown: {
    6: 150,
    11: 125,
    16: 100,
  },

};

export default amumu;

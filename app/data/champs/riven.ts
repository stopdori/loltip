import type { ChampSkill } from "../types";

const riven: ChampSkill = {
  id: "riven",
  skills: {
    P: [],
    Q: ["AA_RESET", "AIRBORNE", "WALL_HOP"],
    W: ["STUN"],
    E: ["E_FLASH", "SHIELD"],
    R: ["R_FLASH", "AD_UP"],
    ETC: [],
  },

  notes: [
    "[[Q_FLASH]], [[W_FLASH]] 안됨", "Q 3타만 [[WALL_HOP]] 가능", "R을 처음 쓸때 모션이 있음\n근데 ER하면 R모션 캔슬 됨",
  ],

  ultCooldown: {
    6: 120,
    11: 90,
    16: 60,
  },

};

export default riven;

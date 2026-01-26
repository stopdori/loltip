import type { ChampSkill } from "../types";

const thresh: ChampSkill = {
  id: "thresh",
  skills: {
    P: [],
    Q: ["STUN", "GRAB", "TRUE_SIGHT", "WALL_HOP"],
    W: ["W_FLASH", "SHIELD", "ALLY_TP_OK"],
    E: ["AIRBORNE", "SLOW"],
    R: ["SLOW"],
    ETC: [],
  },

  notes: [
    "[[Q_FLASH]], [[E_FLASH]], [[R_FLASH]] 안됨\nQ 맞추고 날아갈 때 점멸은 되긴 함", "W(랜턴)은 아군의 진행방향에 깔아주면 좋음"
  ],

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default thresh;

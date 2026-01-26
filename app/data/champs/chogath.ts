import type { ChampSkill } from "../types";

const chogath: ChampSkill = {
  id: "chogath",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH", "AIRBORNE", "SLOW"],
    W: ["W_FLASH", "SILENCE"],
    E: ["AA_RESET", "SLOW"],
    R: ["R_FLASH", "HEAL", "EXECUTE"],
    ETC: [],
  },

  notes: [
    "R(포식)은 대상을 처치하면 최대체력이 증가한다는 관점에서 [[HEAL]]이라고 적음 \n다만 [[GW]]은 적용안됨"
  ],


  ultCooldown: {
    6: 80,
    11: 70,
    16: 60,
  },

};

export default chogath;

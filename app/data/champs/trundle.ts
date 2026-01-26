import type { ChampSkill } from "../types";

const trundle: ChampSkill = {
  id: "trundle",
  skills: {
    P: ["HEAL"],
    Q: ["AA_RESET", "AD_UP", "AD_DOWN", "SLOW"],
    W: ["W_FLASH", "MS_UP"],
    E: ["E_FLASH", "AIRBORNE"],
    R: ["R_FLASH", "HEAL", "AR_MR_SHRED"],
    ETC: [],
  },

  notes: [
    "P에 [[HEAL]]은 트런들 주변에 적이 죽으면 발동", "W의 [[MS_UP]], [[HEAL]]량 증가는 얼음지대 유효\n[[HEAL]]량 증가 있는데 P에는 적용 안되는거같음. 되면 누가 제보좀 해주셈", "E [[WALL]]에 텔 안됨", "R은 대상의 방마저를 훔치는것\n(대상은 감소 트런들은 증가)"
  ],

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default trundle;

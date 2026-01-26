import type { ChampSkill } from "../types";

const sion: ChampSkill = {
  id: "sion",
  skills: {
    P: ["REVIVE"],
    Q: ["SLOW", "AIRBORNE", "STUN"],
    W: ["HEAL", "SHIELD"],
    E: ["E_FLASH", "SLOW", "AR_SHRED"],
    R: ["R_FLASH", "UNSTOPPABLE", "AIRBORNE", "STUN", "SLOW"],
    ETC: [],
  },

  notes: [
    "[[Q_FLASH]], [[W_FLASH]] 안됨", "Q는 치징을 길게하면\n[[AIRBORNE]] 이후 [[STUN]]도 걸림", "W는 최대체력 증가여서 [[GW]]효과 안받음", "R은 이동거리 비례해서 데미지, [[STUN]]이 증가\n상대와 부딪히면 [[AIRBORNE]], 이후 착지하고 [[STUN]]"
  ],

  ultCooldown: {
    6: 140,
    11: 100,
    16: 60,
  },

};

export default sion;

import type { ChampSkill } from "../types";

const garen: ChampSkill = {
  id: "garen",
  skills: {
    P: ["HEAL"],
    Q: ["AA_RESET", "MS_UP", "SILENCE"],
    W: ["SHIELD", "DMG_REDUCE", "TENACITY"],
    E: ["E_FLASH", "AR_SHRED"],
    R: ["R_FLASH"],
    ETC: [],
  },

  notes: [
    "가렌 Q는 얇은 벽 넘어를 공격하면\n벽 넘어짐", "W를 CC기를 맞기 전에 쓰면 CC기가 금방 해제됨", "E는 공격속도에 따라 횟수 증가\n[[AR_SHRED]]은 6회이상 맞혀야 적용 됨"
  ],

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default garen;

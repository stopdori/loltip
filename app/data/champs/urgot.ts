import type { ChampSkill } from "../types";

const urgot: ChampSkill = {
  id: "urgot",
  skills: {
    P: [],
    Q: ["Q_FLASH", "SLOW"],
    W: ["W_FLASH", "AA_RESET", "SLOW_RESIST"],
    E: ["E_FLASH", "SHIELD", "GRAB", "STUN"],
    R: ["SLOW", "EXECUTE", "FEAR"],
    ETC: [],
  },

  notes: [
    "[[R_FLASH]] 안됨", "다리방향마다 추뎀과 쿨타임이 있음", "R [[EXECUTE]]은 대상의 체력 25% 이하일 때\n재사용을 눌러야 발동"
  ],

  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

};

export default urgot;

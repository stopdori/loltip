import type { ChampSkill } from "../types";

const nasus: ChampSkill = {
  id: "nasus",
  skills: {
    P: ["LIFESTEAL"],
    Q: ["AA_RESET"],
    W: ["W_FLASH", "AS_DOWN", "SLOW"],
    E: ["E_FLASH", "AR_SHRED"],
    R: ["MAX_HP_UP"],
    ETC: [],
  },

  notes: [
    "R은 [[MAX_HP_UP]]여서 풀피에도 유효함\n[[GW]]영향도 안받음"
  ],

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default nasus;

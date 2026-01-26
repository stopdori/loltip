import type { ChampSkill } from "../types";

const kogmaw: ChampSkill = {
  id: "kogmaw",
  skills: {
    P: [],
    Q: ["AS_UP", "AR_MR_SHRED"],
    W: ["RANGE_UP"],
    E: ["SLOW"],
    R: ["R_FLASH", "REVEALED"],
    ETC: [],
  },

  notes: [
    "[[Q_FLASH]], [[E_FLASH]] 안됨", "Q의 [[AS_UP]]은 기본지속"
  ],

  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },

};

export default kogmaw;

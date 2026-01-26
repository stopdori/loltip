import type { ChampSkill } from "../types";

const olaf: ChampSkill = {
  id: "olaf",
  skills: {
    P: ["AS_UP", "LIFESTEAL"],
    Q: ["SLOW", "AR_SHRED"],
    W: ["AA_RESET", "AS_UP", "SHIELD"],
    E: ["E_FLASH"],
    R: ["AD_UP", "MS_UP", "CC_CLEANSE", "CC_IMMUNE"],
    ETC: [],
  },

  notes: [
    "[[Q_FLASH]] 안됨\nQ(도끼)에 텔 안타짐", "E를 맞히면 R의 [[MS_UP]]와 지속시간 증가"
  ],

  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

};

export default olaf;

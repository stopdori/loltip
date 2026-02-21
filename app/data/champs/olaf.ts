import type { ChampData } from "../interactions/types";

const olaf: ChampData = {
  id: "olaf",
  skills: {
    P: ["AS_UP", "LIFESTEAL"],
    Q: ["SLOW", "AR_SHRED"],
    W: ["AA_RESET", "AS_UP", "SHIELD"],
    E: ["E_FLASH"],
    R: ["AD_UP", "MS_UP", "CC_CLEANSE", "CC_IMMUNE"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]] 안됨\nQ(도끼)에 텔 안타짐", "E를 맞히면 R의 [[MS_UP]]와 지속시간 증가"
  ],
    en: []
  },

vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
    ETC: [],
  },


  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

};

export default olaf;

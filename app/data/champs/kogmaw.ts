import type { ChampData } from "../interactions/types";

const kogmaw: ChampData = {
  id: "kogmaw",
  skills: {
    P: [],
    Q: ["AS_UP", "AR_MR_SHRED"],
    W: ["RANGE_UP"],
    E: ["SLOW"],
    R: ["R_FLASH", "REVEALED"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]], [[E_FLASH]] 안됨", "Q의 [[AS_UP]]은 기본지속", "E의 [[SLOW]]는 범위 위의 대상에게 지속 적용"
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
    6: 0,
    11: 0,
    16: 0,
  },

};

export default kogmaw;

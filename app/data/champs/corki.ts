import type { ChampData } from "../interactions/types";

const corki: ChampData = {
  id: "corki",
  skills: {
    P: [],
    Q: ["Q_FLASH", "REVEALED"],
    W: ["W_FLASH", "WALL_HOP"],
    E: ["E_FLASH", "AR_MR_SHRED"],
    R: ["R_FLASH"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[R_FLASH]]은 R누르고 바로 점멸하면 안됨 \nR누르고 점멸을 약간 천천히 써야 함", "W는 [[AIRBORNE]]류에 끊김\n(다른종류로도 끊긴다면 알려주세요)"
  ],
    en: ["[[R_FLASH]] requires a slight delay after pressing R — using flash immediately cancels it", "W is interrupted by [[AIRBORNE]] (please report if other CC types also interrupt it)"]
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

export default corki;

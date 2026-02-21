import type { ChampData } from "../interactions/types";

const lulu: ChampData = {
  id: "lulu",
  skills: {
    base: {
      // 아군
    P: [],
    Q: [],
    W: ["W_FLASH", "AS_UP", "MS_UP"],
    E: ["E_FLASH", "SHIELD"],
    R: ["R_FLASH", "MAX_HP_UP", "AIRBORNE", "SLOW"],
    ETC: [],
  },

  alt: {
      // 상대
    P: [],
    Q: ["Q_FLASH", "SLOW"],
    W: ["W_FLASH", "POLYMORPH"],
    E: ["E_FLASH", "REVEALED"],
    R: [],
    ETC: [],

  },
  },

  notes: {
    ko: [
    "[[Q_FLASH]]이 가능은 하지만, 픽스는 점멸로 따라오지 않아 데미지가 덜 들어감", "R이 [[MAX_HP_UP]]여서 풀피에 써도 유효하고\n[[GW]]효과도 안받음\n부담없이 써서 [[AIRBORNE]], [[SLOW]]를 활용해야 좋음",
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
    6: 120,
    11: 100,
    16: 80,
  },

};

export default lulu;

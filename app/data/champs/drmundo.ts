import type { ChampData } from "../interactions/types";

const drmundo: ChampData = {
  id: "drmundo",
  skills: {
    P: ["HEAL", "CC_IMMUNE"],
    Q: ["HEAL", "SLOW"],
    W: ["HEAL"],
    E: ["AA_RESET"],
    R: ["HEAL", "MS_UP"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]] 안됨\nQ(뼈톱)는 맞혀야 체력 50[[HEAL]] 합니다", "W를 사용하고 맞다가 상대 챔피언에게 터뜨려야 회색체력 100%를 [[HEAL]]함\n요약) 대충 W키고 상대에게 비벼라",
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
    11: 120,
    16: 120,
  },

};

export default drmundo;

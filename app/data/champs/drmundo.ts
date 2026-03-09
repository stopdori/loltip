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
    en: ["[[Q_FLASH]] not possible.\nQ (Infected Bonesaw) heals 50 HP when it lands", "Using W and taking damage, then letting it detonate on an enemy champion heals 100% of grey health.\nSummary: activate W and get in their face"]
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

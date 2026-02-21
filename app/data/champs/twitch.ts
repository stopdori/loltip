import type { ChampData } from "../interactions/types";

const twitch: ChampData = {
  id: "twitch",
  skills: {
    P: [],
    Q: ["Q_FLASH", "CAMOUFLAGE", "AS_UP", "MS_UP"],
    W: ["W_FLASH", "SLOW"],
    E: [],
    R: ["RANGE_UP", "AD_UP", "PIERCE"],
    ETC: [],
  },

  notes: {
    ko: [
    "Q [[CAMOUFLAGE]]중 점멸써도 안풀림\nQ의 [[AS_UP]]는 [[CAMOUFLAGE]] 종료 후 적용\nQ는 중독된 챔피언이 죽으면 쿨타임 초기화", "W의 [[SLOW]]는 범위 안에 있는 대상에게 지속 적용"
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
    6: 90,
    11: 90,
    16: 90,
  },

};

export default twitch;

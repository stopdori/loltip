import type { ChampSkill } from "../types";

const twitch: ChampSkill = {
  id: "twitch",
  skills: {
    P: [],
    Q: ["Q_FLASH", "STEALTH", "AS_UP", "MS_UP"],
    W: ["W_FLASH", "SLOW"],
    E: [],
    R: ["RANGE_UP", "AD_UP", "PIERCE"],
    ETC: [],
  },

  notes: [
    "Q [[STEALTH]]중 점멸써도 안풀림\nQ의 [[AS_UP]]는 [[STEALTH]] 종료 후 적용\nQ는 중독된 챔피언이 죽으면 쿨타임 초기화"
  ],

  ultCooldown: {
    6: 90,
    11: 90,
    16: 90,
  },

};

export default twitch;

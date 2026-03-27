import type { ChampData } from "../interactions/types";

const rammus: ChampData = {
  id: "rammus",
  skills: {
    P: ["AD_UP"],
    Q: ["Q_FLASH", "AIRBORNE", "SLOW", "BUFF_FORM"],
    W: ["UNINTERRUPTIBLE_CHANNEL"],
    E: ["E_FLASH", "TAUNT", "UNINTERRUPTIBLE_CAST"],
    R: ["WALL_HOP", "AIRBORNE", "SLOW", "CC_IMMUNE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  notes: {
    ko: [
    "P [[AD_UP]]은 방마저 비례", "Q로 변신했을 때 CC에 맞으면 풀림.", "R은 설명에 [[CC_IMMUNE]]이 없지만, 점프해서 날아갈 때 람머스 체력바 위에 [[CC_IMMUNE]]이 생김. 도착하면 끝.", "R의 점프 거리가 이속 비례임\n[[AIRBORNE]]은 Q상태일 때만 가능함\n[[SLOW]]도 지역에 3회 추가 적용임",
  ],
    en: ["P [[AD_UP]] scales with armor and MR", "R jump distance scales with movement speed.\n[[AIRBORNE]] is only possible while in Q (Powerball).\n[[SLOW]] applies 3 additional times in the area"]
  },

  ultCooldown: {
    6: 120,
    11: 105,
    16: 90,
  },

};

export default rammus;

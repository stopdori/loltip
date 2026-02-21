import type { ChampData } from "../interactions/types";

const lillia: ChampData = {
  id: "lillia",
  skills: {
    P: ["LIFESTEAL"],
    Q: ["Q_FLASH", "MS_UP"],
    W: [],
    E: ["E_FLASH", "SLOW"],
    R: ["SLEEP"],
    ETC: [],
  },

  notes: {
    ko: [
    "Q에 [[MS_UP]]는 기본지속 효과여서\n사실상 모든스킬에 스택이 쌓임\n스택은 최대 4스택", "W로 [[WALL_HOP]] 불가", "W는 CC에 끊기지만, 모션에 따라 데미지가 들어가는 경우와 들어가지 않는 경우가 있음\n1. 릴리아가 지팡이를 회전할 때 CC를 맞으면\n데미지가 들어가지 않고\n2. 지팡이를 내려칠 때 CC를 맞으면\n이동은 끊기지만 데미지는 들어감"
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
    6: 140,
    11: 120,
    16: 100,
  },

};

export default lillia;

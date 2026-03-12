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
    "Q에 [[MS_UP]]는 기본지속 효과여서\n사실상 모든스킬에 스택이 쌓임\n스택은 최대 4스택", "Q는 지팡이에 닿으면 피해\n가장자리에 닿으면 고정피해 추가.", "W로 [[WALL_HOP]] 불가", "W는 CC에 끊기지만, 모션에 따라 데미지가 들어가는 경우와 들어가지 않는 경우가 있음\n1. 릴리아가 지팡이를 회전할 때 CC를 맞으면\n데미지가 들어가지 않고\n2. 지팡이를 내려칠 때 CC를 맞으면\n이동은 끊기지만 데미지는 들어감"
  ],
    en: ["Q's [[MS_UP]] is a passive effect so all skills build stacks.\nMax 4 stacks", "Q deals damage upon contact with the staff\n and additional true damage if hit by the edge.", "[[WALL_HOP]] is not possible with W", "W is interrupted by CC but damage behavior varies:\n1. If CC lands while Lillia is spinning her staff, no damage is dealt\n2. If CC lands while she swings down, movement is interrupted but damage is dealt"]
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

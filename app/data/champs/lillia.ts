import type { ChampSkill } from "../types";

const lillia: ChampSkill = {
  id: "lillia",
  skills: {
    P: ["LIFESTEAL"],
    Q: ["Q_FLASH", "MS_UP"],
    W: [],
    E: ["E_FLASH", "SLOW"],
    R: ["SLEEP"],
    ETC: [],
  },

  notes: [
    "Q에 [[MS_UP]]는 기본지속 효과여서 모든스킬에 스택이 쌓임", "W는 벽 못 넘음"
  ],

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default lillia;

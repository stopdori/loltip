import type { ChampSkill } from "../types";

const missfortune: ChampSkill = {
  id: "missfortune",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["AS_UP", "MS_UP"],
    E: ["E_FLASH", "SLOW", "VISION"],
    R: [],
    ETC: [],
  },

  notes: [
    "R은 E로 [[SLOW]]를 걸고 그 다음 쓰는 게 좋음\nR을 시전중에 움직이면 풀림"
  ],

  ultCooldown: {
    6: 120,
    11: 110,
    16: 100,
  },

};

export default missfortune;

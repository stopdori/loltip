import type { ChampSkill } from "../types";

const wukong: ChampSkill = {
  id: "wukong",
  skills: {
    P: [],
    Q: ["AR_SHRED", "AA_RESET"],
    W: ["W_FLASH", "WALL_HOP", "INVISIBILITY"],
    E: ["E_FLASH", "WALL_HOP", "AS_UP"],
    R: ["R_FLASH", "MS_UP", "AIRBORNE"],
    ETC: [],
  },

  notes: [
    "W에 [[INVISIBILITY]] 중에 점멸 써도 안풀림", "E의 [[MS_UP]]는 분신도 같이 증가함"
  ],

  ultCooldown: {
    6: 130,
    11: 110,
    16: 90,
  },

};

export default wukong;

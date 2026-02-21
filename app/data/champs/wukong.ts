import type { ChampData } from "../interactions/types";

const wukong: ChampData = {
  id: "wukong",
  skills: {
    P: [],
    Q: ["AR_SHRED", "AA_RESET"],
    W: ["W_FLASH", "WALL_HOP", "INVISIBILITY"],
    E: ["E_FLASH", "WALL_HOP", "AS_UP"],
    R: ["R_FLASH", "MS_UP", "AIRBORNE"],
    ETC: [],
  },

  notes: {
    ko: [
    "W에 [[INVISIBILITY]] 중에 점멸 써도 안풀림", "E의 [[MS_UP]]는 분신도 같이 증가함", "R은 CC를 맞아도 시전을 멈추지 않음"
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
    6: 130,
    11: 110,
    16: 90,
  },

};

export default wukong;

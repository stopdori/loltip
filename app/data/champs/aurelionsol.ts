import type { ChampData } from "../interactions/types";

const aurelionsol: ChampData = {
  id: "aurelionsol",
  skills: {
    base: {
    P: [],
    Q: [],
    W: ["MS_UP", "GHOSTING", "WALL_HOP"],
    E: ["SLOW", "EXECUTE"],
    R: ["R_FLASH", "STUN"],
    ETC: [],
  },

  alt: {
      // 🔨 변신폼 (근접)
    P: [],
    Q: [],
    W: ["MS_UP", "GHOSTING", "WALL_HOP"],
    E: ["SLOW", "EXECUTE"],
    R: ["R_FLASH", "STUN", "AIRBORNE", "SLOW"],
    ETC: [],
    },
  },

  notes: {
    ko: [
    "[[R_FLASH]] 사거리 밖에 사용하고 점멸 쓰면 발동 됨",
  ],
    en: ["[[R_FLASH]] works by using R outside range then flashing"]
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
    11: 110,
    16: 100,
  },

};

export default aurelionsol;

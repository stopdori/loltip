import type { ChampSkill } from "../types";

const aurelionsol: ChampSkill = {
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

  notes: [
    "[[R_FLASH]] 사거리 밖에 사용하고 점멸 쓰면 발동 됨",
  ],

  ultCooldown: {
    6: 120,
    11: 110,
    16: 100,
  },

};

export default aurelionsol;

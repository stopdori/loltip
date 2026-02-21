import type { ChampData } from "../interactions/types";

const lissandra: ChampData = {
  id: "lissandra",
  skills: {
    base: {
    P: ["SLOW"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["ROOT"],
    E: ["WALL_HOP"],
    R: ["R_FLASH", "STUN", "SLOW"],
    ETC: [],

  },

  alt: {
      // 🔨 변신폼 (근접)
      P: ["SLOW"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["ROOT"],
    E: ["WALL_HOP"],
    R: ["SLOW", "HEAL", "UNTARGETABLE", "TOWER_DODGE"],
    ETC: [],


  },
  },

  notes: {
    ko: [
    "[[W_FLASH]] 안됨", "P의 [[SLOW]]는 범위 안에 있는 대상에게 지속 적용", "R은 자신에게 쓸 때 회복함",
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
    6: 120,
    11: 100,
    16: 80,
  },

};

export default lissandra;

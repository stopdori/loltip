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
    "[[W_FLASH]] 안됨", "P는 리산드라 주변에서 적 챔피언이 죽으면 발동.\n 범위는 미드 일자부쉬 정도", "P의 [[SLOW]]는 범위 안에 있는 대상에게 지속 적용", "R은 자신에게 쓸 때 회복함",
  ],
    en: ["[[W_FLASH]] not possible", "P activates when an enemy champion dies near Lissandra. The range is approximately the length of the mid lane side brush.", "P's [[SLOW]] continuously applies to targets inside the area", "R heals Lissandra when cast on herself"]
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

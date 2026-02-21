import type { ChampData } from "../interactions/types";

const velkoz: ChampData = {
  id: "velkoz",
  skills: {
    P: [],
    Q: ["Q_FLASH", "SLOW"],
    W: [],
    E: ["E_FLASH", "AIRBORNE"],
    R: ["R_FLASH"],
    ETC: [],
  },

  notes: {
    ko: [
    "Q는 표시된 최대 사거리보다 조금 더 멀리 날아감", "E는 벨코즈와 가까우면 [[KNOCKBACK]] 멀면 [[AIRBORNE]]"
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
    6: 100,
    11: 90,
    16: 80,
  },

};

export default velkoz;

import type { ChampData } from "../interactions/types";

const xinzhao: ChampData = {
  id: "xinzhao",
  skills: {
    P: ["HEAL"],
    Q: ["AA_RESET", "AIRBORNE"],
    W: ["W_FLASH", "SLOW"],
    E: ["E_FLASH", "AS_UP", "SLOW", "WALL_HOP"],
    R: ["R_FLASH", "KNOCKBACK", "INVULNERABLE"],
    ETC: [],
  },

  notes: {
    ko: [
    "Q에 [[AIRBORNE]]은 Q3타에 발동", "W를 맞혀야 E사거리가 늘어남", "R은 범위 밖 공격에 [[INVULNERABLE]]\n단)타워, 중립, 에픽몬스터 공격은 [[INVULNERABLE]] 불가"
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
    11: 110,
    16: 100,
  },

};

export default xinzhao;

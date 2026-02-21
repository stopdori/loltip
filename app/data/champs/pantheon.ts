import type { ChampData } from "../interactions/types";

const pantheon: ChampData = {
  id: "pantheon",
  skills: {
    base : {
    P: [],
    Q: ["Q_FLASH", "CRIT"],
    W: ["W_FLASH", "STUN", "WALL_HOP"],
    E: ["INVULNERABLE"],
    R: ["AR_PEN", "WALL_HOP"],
    ETC: [],
  },

  alt: {
      // 🔨 변신폼 (근접)
      P: [],
    Q: ["Q_FLASH", "CRIT"],
    W: ["W_FLASH", "STUN", "WALL_HOP"],
    E: ["INVULNERABLE", "MS_UP"],
    R: ["AR_PEN", "WALL_HOP"],
    ETC: [],
    },
  },

  notes: {
    ko: [
    "Q의 [[CRIT]]는 체력20% 이하인 적에게 적용", "E의 [[INVULNERABLE]]은 바라보는 방향만 적용\n단, 타워 데미지는 막을 수 없음", "R 기본효과에 [[AR_PEN]]이 있음"
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
    6: 180,
    11: 165,
    16: 150,
  },

};

export default pantheon;

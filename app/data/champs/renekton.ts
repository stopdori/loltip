import type { ChampSkill } from "../types";

const renekton: ChampSkill = {
  id: "renekton",

  skills: {
    base: {
      // 🔫 인간폼 (원거리)
      P: [],
      Q: ["LIFESTEAL"],                // 인간 Q는 Q플 X
      W: ["W_FLASH", "AA_RESET", "STUN"],
      E: ["WALL_HOP"],
      R: ["R_FLASH", "MAX_HP_UP"],
      ETC: [],
    },

    alt: {
      // 🔨 변신폼 (근접)
      P: [],
      Q: ["LIFESTEAL"],      // 변신 Q는 Q플 가능
      W: ["W_FLASH", "AA_RESET", "STUN", "SHIELD_BREAK"],
      E: ["WALL_HOP", "AR_SHRED"],
      R: ["R_FLASH", "MAX_HP_UP"],
      ETC: [],
    },
  },

  notes: [
    "[[Q_FLASH]] 안됨", "[[W_FLASH]]은 챔피언을 우클릭 해놓고 [[W_FLASH]] 하면 됨\nW에 [[STUN]]은 강화일 때 지속시간 2배", "E는 적에게 피해를 주면 한번 더 사용 가능", "R은 [[MAX_HP_UP]]여서 풀피에 써도 유효하고\n[[GW]]효과도 안받음",
  ],

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default renekton;

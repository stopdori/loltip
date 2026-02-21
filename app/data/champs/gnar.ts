import type { ChampData } from "../interactions/types";

const gnar: ChampData = {
  id: "gnar",

  skills: {
    base: {
      // 🔫 인간폼 (원거리)
      P: ["AS_UP", "MS_UP"],
      Q: ["SLOW"],                // 인간 Q는 Q플 X
      W: ["MS_UP"],
      E: ["E_FLASH", "AS_UP", "SLOW", "WALL_HOP"],
      R: ["MS_UP"],
      ETC: [],
    },

    alt: {
      // 🔨 변신폼 (근접)
      P: ["MAX_HP_UP"],
      Q: ["Q_FLASH", "SLOW"],      // 변신 Q는 Q플 가능
      W: ["STUN"],
      E: ["SLOW", "WALL_HOP"],
      R: ["KNOCKBACK", "SLOW", "STUN"],
      ETC: [],
    },
  },

  notes: {
    ko: [
    "나르 변신은 분노가 100이 되고\n스킬을 사용하면 발동\n미니 E(점프)로 대상을 밟으면 2단점프 하면서 변신", "미니폼\nP의 [[MS_UP]]는 미니폼일 때 항시 적용\n[[Q_FLASH]] 안됨\nE는 대상을 맞혀야 [[SLOW]]. 미니언도 밟아짐\nR은 W의 [[MS_UP]]효과를 증가시킴", "메가폼\nP는 [[MAX_HP_UP]]여서 [[GW]]효과 안받음\n[[W_FLASH]] 안됨\nR은 벽에 부딪혀야 [[STUN]]"
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


  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 90,
    11: 60,
    16: 30,
  },
};

export default gnar;

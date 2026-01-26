import type { ChampSkill } from "../types";

const rengar: ChampSkill = {
  id: "rengar",

  skills: {
    base: {
      // 🔫 인간폼 (원거리)
      P: ["AD_UP", "WALL_HOP"],
      Q: ["AS_UP", "AA_RESET"],                // 인간 Q는 Q플 X
      W: ["HEAL"],
      E: ["E_FLASH", "REVEALED", "SLOW"],
      R: ["R_FLASH", "MS_UP", "TRUE_SIGHT", "AR_SHRED", "WALL_HOP"],
      ETC: [],
    },

    alt: {
      // 🔨 변신폼 (근접)
      P: ["AD_UP", "WALL_HOP", "MS_UP"],
      Q: ["AS_UP", "AA_RESET"],      // 변신 Q는 Q플 가능
      W: ["HEAL", "CC_CLEANSE"],
      E: ["E_FLASH", "REVEALED","ROOT"],
      R: ["R_FLASH", "MS_UP", "TRUE_SIGHT", "AR_SHRED", "WALL_HOP"],
      ETC: [],
    },
  },

  notes: [
    "[[W_FLASH]] 안됨", "P에 [[AD_UP]]은 킬당 1, 4, 9, 16, 25 %\n(5킬 최대)", "부쉬 안에서 밖으로 점멸 쓰면서 점프 안됨", "R [[STEALTH]] 중 점멸 써도 안풀림. 그래서 [[R_FLASH]] 됨\nR은 가장 가까운 상대 챔피언과 그 주변을 [[TRUE_SIGHT]]로 보여 줌\nR [[AR_SHRED]]은 도약피해를 준 대상만 해당"
  ],

  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

};

export default rengar;

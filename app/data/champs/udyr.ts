import type { ChampSkill } from "../types";

const udyr: ChampSkill = {
  id: "udyr",

  skills: {
    base: {
      // 🔫 인간폼 (원거리)
      P: ["AS_UP"],
      Q: ["RANGE_UP", "AS_UP"],                // 인간 Q는 Q플 X
      W: ["SHIELD", "LIFESTEAL", "HEAL"],
      E: ["MS_UP", "STUN"],
      R: ["SLOW"],
      ETC: [],
    },

    alt: {
      // 🔨 변신폼 (근접)
      P: [],
      Q: ["RANGE_UP", "AS_UP"],      // 변신 Q는 Q플 가능
      W: ["SHIELD", "LIFESTEAL", "HEAL"],
      E: ["MS_UP", "CC_IMMUNE"],
      R: ["SLOW"],
      ETC: [],
    },
  },

  notes: [
    "우디르는 P효과로 스킬 재사용이 궁임\nP쿨은 50~20s 이고\n태세변환하고 평타를 치면 P 쿨타임 감소"
  ],

  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },
};

export default udyr;

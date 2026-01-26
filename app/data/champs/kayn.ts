import type { ChampSkill } from "../types";

const kayn: ChampSkill = {
  id: "kayn",

  skills: {
    base: {
      // 🔫 인간폼 (원거리)
      P: [],
      Q: ["WALL_HOP"],                // 인간 Q는 Q플 X
      W: ["SLOW"],
      E: ["WALL_HOP", "HEAL", "MS_UP"],
      R: ["R_FLASH", "WALL_HOP", "UNTARGETABLE", "TOWER_DODGE"],
      ETC: [],
    },

    alt: {
      // 다르킨
      P: ["LIFESTEAL"],
      Q: ["WALL_HOP"],      // 변신 Q는 Q플 가능
      W: ["AIRBORNE"],
      E: ["WALL_HOP", "HEAL", "MS_UP"],
      R: ["R_FLASH", "WALL_HOP", "HEAL", "UNTARGETABLE", "TOWER_DODGE"],
      ETC: [],
    },

    alt2: {
      // 그림자 암살자
      P: [],
      Q: ["WALL_HOP"],      // 변신 Q는 Q플 가능
      W: ["SLOW"],
      E: ["WALL_HOP", "HEAL", "MS_UP"],
      R: ["R_FLASH", "WALL_HOP", "UNTARGETABLE", "TOWER_DODGE"],
      ETC: [],
    },
  },

  notes: [
    "진화 전 케인은 정말 약함", "다르킨 P(패시브)에 [[LIFESTEAL]]이있어서 모든스킬이 [[LIFESTEAL]]이 가능함",
  ],


  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },
};

export default kayn;
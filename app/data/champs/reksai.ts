import type { ChampSkill } from "../types";

const elise: ChampSkill = {
  id: "elise",

  skills: {
    base: {
      // 돌출
      P: [],
      Q: ["AS_UP", "AA_RESET"],                // 인간 Q는 Q플 X
      W: ["MS_UP", "GHOSTING"],
      E: ["E_FLASH"],
      R: ["R_FLASH", "UNTARGETABLE", "TOWER_DODGE", "UNSTOPPABLE"],
      ETC: [],
    },

    alt: {
      // 매복
      P: ["HEAL"],
      Q: ["Q_FLASH", "REVEALED"],      // 변신 Q는 Q플 가능
      W: ["AIRBORNE"],
      E: [],
      R: ["R_FLASH", "UNTARGETABLE", "TOWER_DODGE", "UNSTOPPABLE"],
      ETC: [],
    },
  },

  notes: [
    "매복 상태에서는 렉사이의 시야가 줄어듦\n대신 상대 움직임을 감지할 수 있음 ", "매복에서 평타를 치면 W로 인해 대상이 [[AIRBORNE]]이 됨. W를 눌러서 하는게 아님", "렉사이 R 점멸로 못피함",
  ],
  
  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },
};

export default elise;
import type { ChampSkill } from "../types";

const velkoz: ChampSkill = {
  id: "velkoz",
  skills: {
    P: [],
    Q: ["Q_FLASH", "SLOW"],
    W: [],
    E: ["E_FLASH", "AIRBORNE"],
    R: ["R_FLASH"],
    ETC: [],
  },

  notes: [
    "Q는 표시된 최대 사거리보다 조금 더 멀리 날아감", "E는 벨코즈와 가까우면 [[KNOCKBACK]] 멀면 [[AIRBORNE]]"
  ],

  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

};

export default velkoz;

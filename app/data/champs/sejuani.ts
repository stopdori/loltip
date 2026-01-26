import type { ChampSkill } from "../types";

const sejuani: ChampSkill = {
  id: "sejuani",
  skills: {
    P: [],
    Q: ["Q_FLASH", "AIRBORNE", "WALL_HOP"],
    W: ["W_FLASH", "SLOW"],
    E: ["E_FLASH", "STUN", "AA_RESET"],
    R: ["R_FLASH", "STUN", "SLOW", "REVEALED"],
    ETC: [],
  },

  notes: ["P는 [[SLOW]]만 면역임", "W에 [[SLOW]]는 2타만 적용", "R은 사거리 1/4 보다 먼 대상에게 적중 할 때 여러가지 효과가 추가 되거나 증가함\n[[SLOW]]와 광역피해는 1/4이상일때만"
  ],

  ultCooldown: {
    6: 120,
    11: 105,
    16: 90,
  },

};

export default sejuani;

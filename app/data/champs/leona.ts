import type { ChampSkill } from "../types";

const leona: ChampSkill = {
  id: "leona",
  skills: {
    P: [],
    Q: ["AA_RESET", "STUN"],
    W: ["DMG_REDUCE"],
    E: ["E_FLASH", "ROOT", "WALL_HOP"],
    R: ["R_FLASH", "SLOW", "STUN"],
    ETC: [],
  },

  notes: [
    "W를 상대 챔피언에게 적중시키면 지속시간이 늘어남", "R은 중앙에 맞혀야 [[SLOW]]대신 [[STUN]]이 걸림"
  ],

  ultCooldown: {
    6: 90,
    11: 75,
    16: 60,
  },

};

export default leona;

import type { ChampSkill } from "../types";

const masteryi: ChampSkill = {
  id: "masteryi",
  skills: {
    P: [],
    Q: ["Q_FLASH", "WALL_HOP"],
    W: ["DMG_REDUCE", "HEAL", "AA_RESET"],
    E: [],
    R: ["AS_UP", "MS_UP", "SLOW_IMMUNE"],
    ETC: [],
  },

  notes: [
    "선진입 절대 하지마셈", "R은 킬관여 하면\n쿨타임 70%감소, 지속시간 7초 증가"
  ],

  ultCooldown: {
    6: 85,
    11: 85,
    16: 85,
  },

};

export default masteryi;

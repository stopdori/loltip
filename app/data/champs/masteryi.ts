import type { ChampData } from "../interactions/types";

const masteryi: ChampData = {
  id: "masteryi",
  skills: {
    P: [],
    Q: ["Q_FLASH", "WALL_HOP", "UNTARGETABLE", "TOWER_DODGE"],
    W: ["DMG_REDUCE", "HEAL", "AA_RESET"],
    E: [],
    R: ["AS_UP", "MS_UP", "SLOW_IMMUNE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  notes: {
    ko: [
    "R은 킬관여 하면\n쿨타임 70%감소, 지속시간 7초 증가."
  ],
    en: ["Kill participation with R reduces its cooldown by 70% and extends its duration by 7s."]
  },

  ultCooldown: {
    6: 85,
    11: 85,
    16: 85,
  },

};

export default masteryi;

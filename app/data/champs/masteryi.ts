import type { ChampData } from "../interactions/types";

const masteryi: ChampData = {
  id: "masteryi",
  skills: {
    P: [],
    Q: ["Q_FLASH", "WALL_HOP"],
    W: ["DMG_REDUCE", "HEAL", "AA_RESET"],
    E: [],
    R: ["AS_UP", "MS_UP", "SLOW_IMMUNE"],
    ETC: [],
  },

  notes: {
    ko: [
    "선진입 절대 하지마셈", "R은 킬관여 하면\n쿨타임 70%감소, 지속시간 7초 증가"
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


  ultCooldown: {
    6: 85,
    11: 85,
    16: 85,
  },

};

export default masteryi;

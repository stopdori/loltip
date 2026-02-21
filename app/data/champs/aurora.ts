import type { ChampData } from "../interactions/types";

const aurora: ChampData = {
  id: "aurora",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH"],
    W: ["MS_UP", "INVISIBILITY", "WALL_HOP"],
    E: ["E_FLASH", "SLOW", "WALL_HOP"],
    R: ["SLOW", "WALL_HOP", "UNSTOPPABLE"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[R_FLASH]] 안됨", "E는 스킬이 2단계로 나뉨 1.준비단계, 2.후진단계\n 1.준비단계에서 CC를 맞으면 CC를 무시하고 후진이 발동함"
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
    6: 140,
    11: 120,
    16: 100,
  },

};

export default aurora;

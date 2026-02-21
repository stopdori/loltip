import type { ChampData } from "../interactions/types";

const garen: ChampData = {
  id: "garen",
  skills: {
    P: ["HEAL"],
    Q: ["AA_RESET", "MS_UP", "SILENCE"],
    W: ["SHIELD", "DMG_REDUCE", "TENACITY"],
    E: ["E_FLASH", "AR_SHRED", "UNSTOPPABLE"],
    R: ["R_FLASH"],
    ETC: [],
  },

  notes: {
    ko: [
    "W를 CC기를 맞기 전에 쓰면 CC기가 금방 해제됨", "E는 공격속도에 따라 횟수 증가\n[[AR_SHRED]]은 6회이상 맞혀야 적용 됨", "E는 어떤 CC를 맞아도 해제되지 않음"
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
    6: 120,
    11: 100,
    16: 80,
  },

};

export default garen;

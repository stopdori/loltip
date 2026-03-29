import type { ChampData } from "../interactions/types";

const garen: ChampData = {
  id: "garen",
  skills: {
    P: ["HEAL"],
    Q: ["AA_RESET", "MS_UP", "SILENCE"],
    W: ["SHIELD", "DMG_REDUCE", "TENACITY"],
    E: ["E_FLASH", "AR_SHRED", "BUFF_FORM"],
    R: ["R_FLASH"],
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
    Q: ["DMG_PHYSICAL", "ON_HIT"],
    W: ["PASSIVE_BONUS", "STACKING"],
    E: ["DMG_PHYSICAL", "SKILL_TOGGLE", "AOE"],
    R: ["DMG_TRUE", "TIMING_CAST"],
  },

  notes: {
    ko: [
    "W를 CC기를 맞기 전에 쓰면, CC기가 금방 해제됨", "E는 공격속도에 따라 횟수 증가\n[[AR_SHRED]]은 6회이상 맞혀야 적용 됨\n가장 가까운 대상에게 추가 피해.", "E는 어떤 CC를 맞아도 해제되지 않음"
  ],
    en: ["Using W before a CC hits reduces the CC duration significantly", "E hit count increases with attack speed.\n[[AR_SHRED]] applies after hitting 6 or more times.\nDeals bonus damage to the nearest target.", "E cannot be cancelled by any CC"]
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default garen;

import type { ChampData } from "../interactions/types";

const jayce: ChampData = {
  id: "jayce",

  skills: {
    base: {
      // 🔫 인간폼 (원거리)
      P: ["MS_UP"],
      Q: ["Q_FLASH"],                // 인간 Q는 Q플 X
      W: ["AA_RESET", "AS_UP"],
      E: ["MS_UP"],
      R: ["BUFF_FORM", "AR_MR_SHRED"],
    },

    alt: {
      // 🔨 변신폼 (근접)
      P: ["MS_UP"],
      Q: ["Q_FLASH", "SLOW", "WALL_HOP"],      // 변신 Q는 Q플 가능
      W: ["BUFF_FORM"],
      E: ["E_FLASH", "AIRBORNE"],
      R: ["BUFF_FORM"],
    },
  },

  vision: {
    base: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: [],
      Q:    { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "AOE"] },
      { label: { ko: "QE", en: "QE" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "AOE"] },
    ] },
      W: ["DMG_PHYSICAL", "PROJECTILE", "ON_HIT"],
      E: ["ZONE"],
      R:    { phases: [
      { label: { ko: "해머폼", en: "Hammer Form" }, tags: ["BUFF_STACK"] },
      { label: { ko: "해머폼 버프", en: "Hammer Buff" }, tags: ["ON_HIT"] },
    ] },
    },

    
    alt: {
      P: [],
      Q: ["DMG_PHYSICAL", "TARGETED", "AOE"],
      W: ["BUFF_FORM", "DMG_MAGIC", "AOE"],
      E: ["DMG_MAGIC", "TIMING_CAST", "TARGETED"],
      R:    { phases: [
      { label: { ko: "캐논폼", en: "Cannon Form" }, tags: ["BUFF_STACK"] },
      { label: { ko: "캐논폼 버프", en: "Cannon Buff" }, tags: ["DMG_MAGIC", "ON_HIT"] },
    ] },
    },
  },

  notes: {
    ko: [
    "해머폼 평타는 [[MANA_RESTORE]]", "P의 [[MS_UP]]는 폼 변환할 때마다 생김", "캐논폼으로 변환 후 평타를 치면 상대 [[AR_MR_SHRED]]", "해머폼 E는 [[INSEC_KICK]] 됨",
  ],
    en: ["Hammer form basic attacks restore mana", "P's [[MS_UP]] activates on every form swap", "Swapping to cannon form then auto-attacking applies [[AR_MR_SHRED]] to the target", "Hammer form E is [[INSEC_KICK]] capable"]
  },

  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },
};

export default jayce;

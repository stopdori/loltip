import type { ChampData } from "../interactions/types"; 
const rengar: ChampData = {
  id: "rengar",

  skills: {
     P: ["AD_UP", "MS_UP", "WALL_HOP"],
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["AS_UP", "AA_RESET"] },
      { label: { ko: "Q 강화", en: "Q Improved" }, tags: ["AS_UP", "AA_RESET", "MS_UP"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["HEAL"] },
      { label: { ko: "W 강화", en: "W Improved" }, tags: ["HEAL", "CC_CLEANSE", "MS_UP"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["E_FLASH", "REVEALED", "SLOW"] },
      { label: { ko: "E 강화", en: "E Improved" }, tags: ["E_FLASH", "REVEALED", "ROOT", "MS_UP"] },
    ] },

    R: ["R_FLASH", "CAMOUFLAGE", "MS_UP", "TRUE_SIGHT", "AR_SHRED", "WALL_HOP"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: ["REVEALED"],
    R: ["TRUE_SIGHT", "VISION"],
  },

  gimmick: {
    P: ["DASH"],

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "ON_HIT"] },
      { label: { ko: "Q 강화", en: "Q Improved" }, tags: ["DMG_PHYSICAL", "ON_HIT"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_MAGIC", "AOE"] },
      { label: { ko: "W 강화", en: "W Improved" }, tags: ["DMG_MAGIC", "AOE"] },
    ] },

    E: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE"] },
      { label: { ko: "E 강화", en: "E Improved" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE"] },
    ] },

    R: ["BUFF_FORM", "DASH"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
          "[[W_FLASH]] 안됨",
          "P에 [[AD_UP]]은 킬당 1, 4, 9, 16, 25 %\n(5킬 최대)",
          "P의 [[MS_UP]]는 강화스킬 사용 시 발동",
          "야성이 0 스택 일때, P로 도약하면 1스택.\n 1스택이라도 있으면 더 이상 주지 않음.",
          "부쉬 안에서 밖으로 점멸 쓰면서 점프 안됨",
          "R [[CAMOUFLAGE]] 중 점멸 써도 안풀림.\nR은 가장 가까운 상대 챔피언과 그 주변을 [[TRUE_SIGHT]]로 보여 줌\nR [[AR_SHRED]]은 가장 가까운 대상에게 도약을 해야 적용.",
        ],
        en: [
          "[[W_FLASH]] not possible",
          "P [[AD_UP]]: 1, 4, 9, 16, 25% per kill (max 5 kills)",
          "P's [[MS_UP]] activates on using an empowered skill",
          "Cannot leap out of a bush by flashing first",
          "R [[CAMOUFLAGE]] does not break on flash, enabling [[R_FLASH]].\nR reveals the nearest enemy champion and nearby enemies with [[TRUE_SIGHT]].\nR [[AR_SHRED]] only applies to the target leaped on",
        ],
       },
    },
  },

  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

};

export default rengar;
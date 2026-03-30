import type { ChampData } from "../interactions/types";

const renekton: ChampData = {
  id: "renekton",

  skills: {
    P: [],
    Q: ["LIFESTEAL"],

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["W_FLASH", "AA_RESET", "STUN"] },
      { label: { ko: "W 강화", en: "W Improved" }, tags: ["W_FLASH", "AA_RESET", "STUN", "SHIELD_BREAK"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["WALL_HOP"] },
      { label: { ko: "E 강화", en: "E Improved" }, tags: ["WALL_HOP", "AR_SHRED"] },
    ] },

    R: ["R_FLASH", "MAX_HP_UP", "BUFF_FORM"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: ["FEEDBACK_INDICATOR"],
    R: [],
  },

  gimmick: {
    P: [],
    Q: ["DMG_PHYSICAL", "AOE"],

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_PHYSICAL", "TARGETED"] },
      { label: { ko: "W 강화", en: "W Improved" }, tags: ["DMG_PHYSICAL", "TARGETED"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_PHYSICAL", "AOE", "DASH", "SKILL_RECAST"] },
      { label: { ko: "E 강화", en: "E Improved" }, tags: ["DMG_PHYSICAL", "AOE", "DASH", "SKILL_RECAST"] },
    ] },

    R: ["BUFF_FORM", "DMG_MAGIC", "TIMING_CAST", "AOE"],
  },

  notes: {
    ko: [
      "[[Q_FLASH]] 안됨",
      "[[W_FLASH]]은 챔피언을 우클릭 해놓고 [[W_FLASH]] 하면 됨\nW에 [[STUN]]은 강화일 때 지속시간 2배", "분노 50 이상일때\n분노 50을 소모해 다음 스킬이 강화됨.\n 체력이 50% 미만이면 분노 획득율 50% 증가.", 
      "E는 적에게 피해를 주면 한번 더 사용 가능",
      "R은 [[MAX_HP_UP]]여서 풀피에 써도 유효하고\n[[GW]]효과도 안받음",
    ],
    en: [
      "[[Q_FLASH]] not possible",
      "[[W_FLASH]] works by right-clicking a champion then flashing.\nW [[STUN]] lasts twice as long when empowered",
      "E can be recast once after dealing damage to an enemy",
      "R is [[MAX_HP_UP]] so it's effective even at full HP and ignores [[GW]]",
    ],
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default renekton;

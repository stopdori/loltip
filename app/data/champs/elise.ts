import type { ChampData } from "../interactions/types";

const elise: ChampData = {
  id: "elise",

  skills: {
    base: {
      // 🔫 인간폼 (원거리)
      P: [],
      Q: ["Q_FLASH"],                // 인간 Q는 Q플 X
      W: ["VISION"],
      E: ["E_FLASH", "STUN", "VISION"],
      R: [],
    },

    alt: {
      // 🔨 변신폼 (근접)
      P: ["MS_UP", "LIFESTEAL", "ALLY_TP_OK"],
      Q: ["Q_FLASH"],      // 변신 Q는 Q플 가능
      W: ["AS_UP", "AA_RESET"],
      E: ["E_FLASH", "VISION", "LIFESTEAL", "WALL_HOP", "UNTARGETABLE", "TOWER_DODGE"],
      R: [],
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
      P: ["BUFF_STACK"],
      Q: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE"],
      W: ["DMG_MAGIC", "TIMING_CAST", "NON_PROJECTILE", "HOMING", "AOE"],
      E: ["TIMING_CAST", "PROJECTILE"],
      R: ["BUFF_FORM", "SUMMON"],
    },
    alt: {
      P: ["DMG_MAGIC", "SUMMON"],
      Q: ["DMG_MAGIC", "TIMING_CAST", "DASH"],
      W: [],
      E: ["SKILL_RECAST"],
      R: ["BUFF_FORM"],
    },
  },

  notes: {
    ko: [
    "거미폼 Q는 벽을 못넘음", "거미폼 E는 줄을 타고 올라갔을 때, 부쉬 안에도 시야가 보임."
  ],
    en: ["Spider form Q cannot hop walls", "Spider form E reveals vision inside brushes when Elise is hanging on the line."]
  },

  
  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },
};

export default elise;

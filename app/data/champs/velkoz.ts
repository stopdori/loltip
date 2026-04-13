import type { ChampData } from "../interactions/types";

const velkoz: ChampData = {
  id: "velkoz",
  skills: {
    P: [],
    Q: ["Q_FLASH", "SLOW"],
    W: [],
    E: ["E_FLASH", "AIRBORNE"],
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
    P: ["DEBUFF_INTERACT", "Q", "W", "E", "R", "DMG_TRUE", "PROC"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "SKILL_RECAST", "DEBUFF_STACK"],

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_MAGIC", "PROJECTILE", "PIERCE", "RECHARGE", "DEBUFF_STACK"] },
      { label: { ko: "W 장판", en: "W Zone" }, tags: ["DMG_MAGIC", "ZONE", "DEBUFF_STACK"] },
    ] },
    
    E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "ZONE", "DEBUFF_STACK"],
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["DMG_MAGIC", "SKILL_CHANNEL", "TIMING_CAST", "NON_PROJECTILE", "AOE", "DEBUFF_STACK"] },
      { label: { ko: "P의 디버프가 발동된 대상", en: "P Researched Targets" }, tags: ["ST_CONDITIONAL", "DMG_TRUE"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "",
        ], en: [] },
      note1: {

        ko: [
          "P",
          "Q",
          "W",
          "E",
          "R",
        ],

        en: []

      },

      note2: {
        ko: [
        "Q는 표시된 최대 사거리보다 조금 더 멀리 날아감", "Q 시전중에 CC에 걸리면 Q2를 사용 할 수 없음.", "E는 벨코즈와 가까우면 [[KNOCKBACK]] 멀면 [[AIRBORNE]]"
      ],
        en: ["Q flies slightly farther than the indicated max range", "E applies [[KNOCKBACK]] to nearby targets and [[AIRBORNE]] to distant ones"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

};

export default velkoz;

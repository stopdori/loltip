import type { ChampData } from "../interactions/types";

const swain: ChampData = {
  id: "swain",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH", "CAST_COMMIT"],
    W: ["W_FLASH", "SLOW", "REVEALED"],
    E: ["ROOT", "GRAB"],
    R: ["R_FLASH", "LIFESTEAL", "SLOW", "BUFF_FORM"],
  },

  vision: {
    P: [],
    Q: ["HIT_EFFECT", "POSITION_REVEAL"],
    W: ["VISION", "REVEALED"],
    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["VISION"] },
      { label: { ko: "E2", en: "E2" }, tags: ["REVEALED"] },
    ] },
    R: ["HIT_INDICATOR"],
  },

  gimmick: {
    P: ["STACKING"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "VOLLEY_OVERLAP", "PIERCE"],
    W: ["DMG_MAGIC", "TIMING_CAST", "ZONE"],

    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PIERCE", "AOE"] },
      { label: { ko: "E2", en: "E2" }, tags: ["ST_CONDITIONAL", "SKILL_RECAST"] },      
    ] },

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["BUFF_FORM", "DMG_MAGIC", "TIMING_CAST", "AURA", "DOT", "LOCKED"] },
      { label: { ko: "R 재사용", en: "R Recast" }, tags: ["SKILL_RECAST", "DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE"] },
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
        "[[E_FLASH]] 안됨", "P는 W, E, 킬관여로 획득\n체력회복은 [[GW]] 적용\n최대체력 증가는 [[GW]] 안됨", "E1은 적중하면 [[ROOT]]\nE2는 [[GRAB]]", "E1이 적중했을때 스웨인이 [[HARD_CC]]에 걸리면 E2를 사용 할 수 없음.", "R에 [[SLOW]]는 재사용 했을 때 나오는 파동에만"
      ],
        en: ["[[E_FLASH]] not possible", "P is gained from W, E, and kill participation.\nHP recovery is affected by [[GW]].\nMax HP increase is not affected by [[GW]]", "E1 applies [[ROOT]] on hit.\nE2 is [[GRAB]]", "R's [[SLOW]] only applies to the wave released on recast"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 120,
    16: 120,
  },

};

export default swain;

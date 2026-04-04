import type { ChampData } from "../interactions/types";

const thresh: ChampData = {
  id: "thresh",
  skills: {
    P: [],
    Q: ["STUN", "GRAB", "TRUE_SIGHT", "WALL_HOP"],
    W: ["W_FLASH", "SHIELD", "ALLY_TP_OK"],
    E: ["AIRBORNE", "SLOW"],
    R: ["SLOW"],
  },

  vision: {
    P: [],
    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["TRUE_SIGHT"] },
      { label: { ko: "Q2", en: "Q2" }, tags: [] },
    ] },
    W: ["VISION"],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "STACKING"],

    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE"] },
      { label: { ko: "Q2", en: "Q2" }, tags: ["HOMING", "DASH"] },
    ] },

    W: { phases: [
      { label: { ko: "W 랜턴", en: "W Lantern" }, tags: ["PROJECTILE", "SUMMON", "ZONE"] },
      { label: { ko: "W 랜턴 이동", en: "W Lantern Dash" }, tags: ["ST_CONDITIONAL", "HOMING", "DASH"] },
    ] },

    E: { phases: [
      { label: { ko: "E 패시브", en: "E Passive" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ON_HIT"] },
      { label: { ko: "E 액티브", en: "E Active" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE"] },
    ] },
    
    R: ["DMG_MAGIC", "TIMING_CAST", "TRAP"],
  },

  notes: {
    skill: {
      note3: { ko: [], en: [] },
      note1: {

        ko: [],

        en: []

      },

      note2: {
        ko: [
        "[[Q_FLASH]], [[E_FLASH]], [[R_FLASH]] 안됨\nQ 돌진단계에 점멸은 되긴 함", "Q는 두단계로 나뉨 투척/돌진단계\n투척단계에 CC를 맞아도 대부분 유효\n돌진단계에 [[HARD_CC]]를 맞으면 끊길 수 있음", "W(랜턴)은 아군의 진행방향에 깔아주면 좋음"
      ],
        en: ["[[Q_FLASH]], [[E_FLASH]], [[R_FLASH]] not possible.\nFlash during Q dash phase technically works", "Q has two phases: throw / dash.\nCC during the throw phase is mostly valid.\nHard CC during the dash can interrupt it", "W (lantern) is best placed in the ally's direction of movement"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default thresh;

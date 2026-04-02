import type { ChampData } from "../interactions/types";

const syndra: ChampData = {
  id: "syndra",
  skills: {
    P: [],
    Q: [],
    W: ["W_FLASH", "SLOW"],
    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["E_FLASH", "KNOCKBACK", "STUN"] },
      { label: { ko: "E 진화", en: "E Transcendent" }, tags: ["E_FLASH", "KNOCKBACK", "STUN", "SLOW"] },
    ] },
    
    R: ["R_FLASH"],
  },

  vision: {
    P: ["HIT_INDICATOR"],
    Q: [],

    W: { phases: [
      { label: { ko: "W1", en: "W1" }, tags: ["POSITION_REVEAL"] },
      { label: { ko: "W2", en: "W2" }, tags: ["VISION"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["POSITION_REVEAL"] },
      { label: { ko: "QE 적중", en: "QE 적중" }, tags: ["POSITION_REVEAL", "VISION"] },
    ] },
    
    R: ["POSITION_REVEAL"],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "STACKING"],

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["ST_DELAYED", "DMG_MAGIC", "SUMMON", "ZONE"] },
      { label: { ko: "Q 진화", en: "Q Transcendent" }, tags: ["ST_DELAYED", "DMG_MAGIC", "SUMMON", "ZONE", "RECHARGE"] },
    ] },

    W: { phases: [
      { label: { ko: "W 픽업", en: "W Pick-Up" }, tags: ["NON_TARGETED", "SKILL_RECAST"] },
      { label: { ko: "W 구체 투척", en: "W Dark Spheres" }, tags: ["DMG_MAGIC", "ST_DELAYED", "NON_PROJECTILE", "ZONE"] },
      { label: { ko: "W 진화", en: "W Transcendent" }, tags: ["DMG_MAGIC", "DMG_TRUE", "ST_DELAYED", "NON_PROJECTILE", "ZONE"] },
    ] },

    E: { phases: [
      { label: { ko: "E, E 진화", en: "E, E Transcendent" }, tags: ["TIMING_CAST"] },
      { label: { ko: "E 구체 적중", en: "E Dark Sphere Hit" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "PROJECTILE", "PIERCE"] },
    ] },

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE"] },
      { label: { ko: "R 진화", en: "R Transcendent" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "EXECUTE"] },
    ] },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "구체에 텔 안됨", "P는 40 Q강화(2스택), 60 W강화(고정피해 추가),80개 E강화([[SLOW]])", "W로 집을 때, 던질 때 다 [[W_FLASH]] 됨", "E는 밀려난 구체에 적이 맞으면 [[STUN]]", "E는 구체에 맞아야 데미지가 들어감.", "EQ 콤보 가능한데, EQ를 엄청 빠르게 눌러야 하고, 구체가 반응을 느리게 해서 효율이 좋지 않음. \n QE 히면 매끄러움 \n WE 콤보 아직 가능"
      ],
        en: ["Cannot TP onto orbs", "P upgrades: 40 orbs empower Q (2 stacks), 60 empower W (add true damage), 80 empower E ([[SLOW]])", "[[W_FLASH]] works both when picking up and throwing", "E stuns enemies hit by flying orbs", "EQ combo doesn't work; use QE.\nWE combo still works"]
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

export default syndra;

import type { ChampData } from "../interactions/types";

const syndra: ChampData = {
  id: "syndra",
  skills: {
    P: [],
    Q: [],
    W: ["W_FLASH", "SLOW"],
    E: ["E_FLASH", "KNOCKBACK", "STUN"],
    R: ["R_FLASH"],
  },

  vision: {
    P: ["FEEDBACK_INDICATOR"],
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
    P: [],

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["ST_DELAYED", "DMG_MAGIC"] },
      { label: { ko: "Q 진화", en: "Q Transcendent" }, tags: [] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "" }, tags: [] },
      { label: { ko: "W 진화", en: "W Transcendent" }, tags: [] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["TIMING_CAST"] },
      { label: { ko: "E 진화", en: "E Transcendent" }, tags: [] },
    ] },

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["TIMING_CAST"] },
      { label: { ko: "R 진화", en: "R Transcendent" }, tags: [] },
    ] },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "구체에 텔 안됨", "P는 40 Q강화(2스택), 60 W강화(고정피해 추가),80개 E강화([[SLOW]])", "W로 집을 때, 던질 때 다 [[W_FLASH]] 됨", "E는 밀려난 구체에 적이 맞으면 [[STUN]]", "EQ 콤보 가능한데, EQ를 엄청 빠르게 눌러야 하고, 구체가 반응을 느리게 해서 효율이 좋지 않음. \n QE 히면 매끄러움 \n WE 콤보 아직 가능"
      ],
        en: ["Cannot TP onto orbs", "P upgrades: 40 orbs empower Q (2 stacks), 60 empower W (add true damage), 80 empower E ([[SLOW]])", "[[W_FLASH]] works both when picking up and throwing", "E stuns enemies hit by flying orbs", "EQ combo doesn't work; use QE.\nWE combo still works"]
        },
    },
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default syndra;

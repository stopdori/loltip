import type { ChampData } from "../interactions/types";

const viktor: ChampData = {
  id: "viktor",
  skills: {
    P: ["STACKING"],
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["Q_FLASH", "SHIELD"] },
      { label: { ko: "Q 강화", en: "Q Agumented" }, tags: ["Q_FLASH", "SHIELD", "MS_UP"] },
      { label: { ko: "Q, W 강화", en: "Q, W Agumented" }, tags: ["Q_FLASH", "SHIELD", "MS_UP", "SLOW"] },
    ] },
    
    W: ["W_FLASH", "SLOW", "STUN"],
    E: [],
    R: ["R_FLASH", "CANCEL"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["STACKING"],

    Q: { phases: [
      { label: { ko: "Q, Q 강화, QW 강화", en: "Q, Q Augmented, QW Augmented" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE"] },
      { label: { ko: "Q, Q 강화, QW 강화 평타", en: "Q, Q Augmented, QW Augmented On-hit" }, tags: ["DMG_MAGIC", "ON_HIT"] },
      
    ] },
    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["TIMING_CAST", "ZONE"] },
      { label: { ko: "W 스턴", en: "W Stun" }, tags: ["ST_CONDITIONAL", "STUN"] },
    ] },

    E: { phases: [
      { label: { ko: "E, E, EW 강화 ", en: "E, E, EW Augmented" }, tags: ["DMG_MAGIC", "SKILL_VECTOR", "PROJECTILE", "PIERCE"] },
      { label: { ko: "E, EW 강화 여진", en: "E, EW Augmented Aftershock" }, tags: ["ST_DELAYED", "DMG_MAGIC", "PROJECTILE", "PIERCE"] },
    ] },
    
    R: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "HOMING", "DOT"],
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
        "Q강화는 Q스킬에 [[MS_UP]]", "W강화는 모든스킬에 [[SLOW]] 추가", "E강화는 레이저 2차 폭발", "R강화는 R속도 증가\n처치 관여시 스킬반경 증가", "W의 [[SLOW]]는 범위 안에 있는 대상에게 지속 적용", "W 강화시 W자체의 [[SLOW]]가 늘어나지는 않음."
      ],
        en: ["Q upgrade adds [[MS_UP]] to Q", "W upgrade adds [[SLOW]] to all skills", "E upgrade adds a second laser explosion", "R upgrade increases R speed and expands radius on kill participation", "W's [[SLOW]] continuously applies to targets inside the area"]
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

export default viktor;

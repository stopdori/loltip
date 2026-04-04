import type { ChampData } from "../interactions/types";

const soraka: ChampData = {
  id: "soraka",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH", "HEAL", "SLOW"],
    W: ["W_FLASH", "HEAL"],
    E: ["E_FLASH", "SILENCE", "ROOT"],
    R: ["HEAL"],
  },

  vision: {
    P: [],
    Q: ["VISION"],
    W: [],
    E: ["HIT_SOUND"],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "BUFF_FORM"],
    Q: { phases: [
      { label: { ko: "Q 투사체", en: "Q Projectile" }, tags: ["TIMING_CAST", "PROJECTILE"] },
      { label: { ko: "Q 장판 피해", en: "Q Zone" }, tags: ["DMG_MAGIC", "ZONE", "BUFF_STACK"] },
    ] },
    
    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["TIMING_CAST", "TARGETED"] },
      { label: { ko: "W 강화", en: "W Improved" }, tags: ["ST_CONDITIONAL", "TIMING_CAST", "TARGETED"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_MAGIC", "TIMING_CAST", "ZONE"] },
      { label: { ko: "E", en: "E" }, tags: ["ST_DELAYED", "DMG_MAGIC", "ZONE"] },
    ] },
    
    R: ["GLOBAL"],
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
        "Q로 상대를 맞추면 W의 [[HEAL]]이 강화.", "E의 [[SILENCE]]은 범위 안에 있는 대상에게 지속 적용\nE 위에 상대가 계속 서있으면 [[ROOT]]", "R은 체력 40% 이하 대상에게 효과 증가"
      ],
        en: ["Hit Q on enemies, then use W for maximum efficiency", "E's [[SILENCE]] continuously applies to targets inside the area.\nTargets standing in E long enough are [[ROOT]]ed", "R's effect is amplified on targets below 40% HP"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 150,
    11: 135,
    16: 120,
  },

};

export default soraka;

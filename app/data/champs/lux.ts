import type { ChampData } from "../interactions/types";

const lux: ChampData = {
  id: "lux",
  skills: {
    P: [],
    Q: ["Q_FLASH", "PIERCE", "ROOT"],
    W: ["SHIELD"],
    E: ["E_FLASH", "SLOW", "VISION"],
    R: ["VISION"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: ["VISION"],
    R: ["VISION"],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "DMG_MAGIC"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE_ONCE", "MARK"],
    W: ["PROJECTILE"],
    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["TIMING_CAST", "PROJECTILE", "SKILL_RECAST"] },
      { label: { ko: "E 발동", en: "E Active" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ZONE", "MARK"] },
    ] },
    
    R: ["DMG_MAGIC", "SKILL_CHANNEL", "NON_PROJECTILE", "MARK"],
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
        "[[W_FLASH]], [[R_FLASH]] 안됨", "럭스의 공격 스킬들은 표식을 남기는데, 표식을 평타로 치면 추가 데미지가 있음.", "Q에 [[PIERCE]]은 1번만", "E의 [[SLOW]]는 범위 안에 있는 대상에게 지속 적용", "E에 텔 안타짐", "R은 P(표식)를 한번 적용 하고 다시 표식을 남겨놓음."
      ],
        en: ["[[W_FLASH]] and [[R_FLASH]] not possible", "Q [[PIERCE]]s once only", "E's [[SLOW]] continuously applies to targets inside the area", "Cannot TP onto E"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 60,
    11: 50,
    16: 40,
  },

};

export default lux;

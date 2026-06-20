import type { ChampData } from "../interactions/types";

const kogmaw: ChampData = {
  id: "kogmaw",
  skills: {
    P: ["ST_CONDITIONAL", "GHOSTING", "MS_UP"],

    Q: { phases: [
      { label: { ko: "Q 패시브", en: "Q Passive" }, tags: ["AS_UP"] },
      { label: { ko: "Q", en: "Q" }, tags: ["AR_MR_SHRED"] },
    ] },
    
    W: ["BUFF_FORM", "RANGE_UP", "BA",],
    E: ["SLOW"],
    R: ["R_FLASH", "REVEALED"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: ["REVEALED"],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "DMG_TRUE", "AOE"],

    Q: { phases: [
      { label: { ko: "Q 패시브", en: "Q Passive" }, tags: ["PASSIVE_BONUS", "AS_UP"] },
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AR_MR_SHRED"] },
    ] },
    
    W: ["BUFF_FORM", "RANGE_UP", "BA", "DMG_MAGIC", "ON_HIT"],
    E: { phases: [
      { label: { ko: "E 투사체", en: "E Projectile" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE"] },
      { label: { ko: "E 장판", en: "E Zone" }, tags: ["ZONE", "SLOW"] },
    ] },
    
    R: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "BUFF_STACK"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "",
        ], en: [] },
      note1: {

        ko: [
          "P는 코그모가 죽었을 때 \n [[GHOSTING]], [[MS_UP]] \n 잠시 뒤 폭발하여 코그모 레벨 비례 [[AOE]] [[DMG_TRUE]].",

          "Q의 [[PASSIVE_BONUS]]는 [[AS_UP]]. \n Q는 적중하면 [[AR_MR_SHRED]].",

          "W는 [[BA]] [[RANGE_UP]]. \n [[ON_HIT]] 최대 체력 비례 [[DMG_MAGIC]].",

          "E는 [[ZONE]] [[DMG_MAGIC]]와 [[SLOW]].",

          "R은 잃은 체력 비례 [[ZONE]] [[DMG_MAGIC]]와 [[REVEALED]]. \n 체력이 40% 미만인 적은 2배 피해. \n 사용하면 [[BUFF_STACK]]이 쌓이는데 쌓일 수록 마나소모량 증가.",
        ],

        en: []

      },

      note2: {
        ko: [
        "[[Q_FLASH]], [[E_FLASH]] 안됨", 
        "W [[AA_RESET]] 안됨.", 
        "E의 [[SLOW]]는 범위 위의 대상에게 지속 적용", 
        "R은 사용하면 [[BUFF_STACK]]. \n 스택이 쌓일수록 마나소모량이 40씩 증가함. \n 최대 소모량 400."
      ],
        en: []
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },

};

export default kogmaw;

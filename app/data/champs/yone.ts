import type { ChampData } from "../interactions/types";

const yone: ChampData = {
  id: "yone",
  skills: {
    P: ["AD_UP"],
    Q: ["Q_FLASH", "AIRBORNE", "WALL_HOP"],
    W: ["W_FLASH", "SHIELD"],
    E: ["E_FLASH", "MS_UP", "WALL_HOP"],
    R: ["AIRBORNE", "WALL_HOP"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "강철과 영혼", en: "Steel And Spirit" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "DMG_MAGIC", "ON_HIT"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q1, Q2", en: "Q1, Q2" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "BUFF_STACK"] },
      { label: { ko: "Q3", en: "Q3" }, tags: ["STACK_CONSUME", "DMG_PHYSICAL", "TIMING_CAST", "AOE", "DASH", "AIRBORNE"] },
    ] },
    
    W: ["DMG_PHYSICAL", "DMG_MAGIC", "TIMING_CAST", "AOE"],

    E: { phases: [
      { label: { ko: "영혼 해방", en: "Spirit Form" }, tags: ["BUFF_FORM", "DASH", "CANCELLABLE", "SKILL_RECAST"] },
      { label: { ko: "복귀", en: "Recast" }, tags: ["ST_CONDITIONAL", "DMG_TRUE", "TIMING_CAST", "DASH" , "UNSTOPPABLE"] },
    ] },
    
    R: ["DMG_PHYSICAL", "DMG_MAGIC", "TIMING_CAST", "AOE", "AIRBORNE"],
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
        "[[R_FLASH]] 안됨", "P의 [[AD_UP]]는 치명타 초과분이 변환", "Q의 [[TIMING_CAST]]에 CC에 맞으면 모션만 발동하고 공격이 들어가지 않음. \n Q3는 무시하고 발동.", "Q [[AIRBORNE]]은 Q3타에 발동", "W에 [[SHIELD]]는 적중한 적 챔피언 수에 따라 증가", "E 발동 시에는 벽 못넘음\n돌아오는 E는 벽 넘음", "R을 시전할때 [[GRAB]], [[KNOCKBACK]]류에 영향을 받아서 궤적이 틀어질 수 있음."
      ],
        en: ["[[R_FLASH]] not possible", "P [[AD_UP]] converts excess crit chance", "Q [[AIRBORNE]] triggers on the 3rd cast", "W shield scales with the number of enemy champions hit", "E [[CAST_COMMIT]] only applies on the return", "E cannot wall-hop on cast.\nThe returning E can wall-hop"]
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

export default yone;

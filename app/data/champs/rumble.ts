import type { ChampData } from "../interactions/types";
 

 
const rumble: ChampData = {
 
  id: "rumble",
 
  skills: {
 
    P: ["AS_UP"],
 
    Q: ["Q_FLASH"],
 
    W: ["MS_UP", "SHIELD"],
 
    E: ["E_FLASH", "SLOW", "MR_SHRED"],
 
    R: ["SLOW"],
 
  },
 

 
  vision: {
 
    P: [],
 
    Q: [],
 
    W: [],
 
    E: ["HIT_INDICATOR"],
 
    R: [],
 
  },
 

 
  gimmick: {
 
    P: { phases: [
      { label: { ko: "열기", en: "Heat" }, tags: [] },
      { label: { ko: "과열", en: "Over Heated" }, tags: ["DMG_MAGIC", "ON_HIT"] },
    ] },
 
    Q: ["BUFF_FORM", "DMG_MAGIC", "AOE"],
 
    W: [],
 
    E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SKILL_RECAST", "DEBUFF_STACK"],
 
    R: ["DMG_MAGIC", "SKILL_VECTOR", "TIMING_CAST", "ZONE", "DOT"],
 
  },
 

 
  notes: {
    skill: {
      note2: {
 
        ko: [
 
        "열은 150이 최대\n50이상에서 스킬들이 강화.", "150이 되면 과열.\n 럼블이 [[SILENCE]] 되면서 \n [[AS_UP]]에 추뎀있음", "럼블 E의 [[MR_SHRED]]은 [[SLOW]] 대상에게 적중하면 2배, \n 강화 E는 효과가 50% 증가.\n한마디로 맞지마라.",
 
      ],
 
        en: ["Overheating causes [[SILENCE]] on Rumble\nbut grants [[AS_UP]] with bonus damage", "Rumble's E [[MR_SHRED]] doubles when hitting a [[SLOW]]ed target, and overheat E increases the effect by 50%.\nIn short: don't get hit"]
 
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },
 

 
  ultCooldown: {
 
    6: 130,
 
    11: 105,
 
    16: 80,
 
  },
 

 
};
 

 
export default rumble;
 


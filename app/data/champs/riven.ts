import type { ChampData } from "../interactions/types";
 

 
const riven: ChampData = {
 
  id: "riven",
 
  skills: {
 
    P: [],
 
    Q: { phases: [
      { label: { ko: "Q1, Q2", en: "Q3" }, tags: ["AA_RESET"] },
      { label: { ko: "Q3", en: "Q3" }, tags: ["AA_RESET", "AIRBORNE", "WALL_HOP"] },
    ] },
 
    W: ["STUN"],
 
    E: ["E_FLASH", "SHIELD"],
 
    R: ["R_FLASH", "AD_UP", "BUFF_FORM"],
 
  },
 

 
  vision: {
 
    P: [],
 
    Q: [],
 
    W: [],
 
    E: [],
 
    R: [],
 
  },
 

 
  gimmick: {
 
    P: ["BUFF_INTERACT", "P", "Q", "W", "E", "R"],
 
    Q: { phases: [
      { label: { ko: "Q1, Q2", en: "Q1, Q2" }, tags: ["DMG_PHYSICAL", "AOE", "BUFF_STACK"] },
      { label: { ko: "Q3", en: "Q3" }, tags: ["DMG_PHYSICAL", "AOE", "BUFF_STACK"] },
    ] },
 
    W: ["DMG_PHYSICAL", "TIMING_AFTERCAST", "AOE", "BUFF_STACK"],
 
    E: ["DASH", "BUFF_STACK"],
 
    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["BUFF_FORM", "TIMING_CAST", "BUFF_STACK"] },
      { label: { ko: "R2", en: "R2" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "BUFF_STACK"] },
    ] },
 
  },
 

 
  notes: {
    skill: {
      note2: {
 
        ko: [
 
        "[[Q_FLASH]], [[W_FLASH]] 안됨", "Q 3타만 [[WALL_HOP]] 가능", "R을 처음 쓸때 [[TIMING_CAST]]모션이 있음\n근데 ER하면 R [[TIMING_CAST]]이 없음."
 
      ],
 
        en: ["[[Q_FLASH]] and [[W_FLASH]] not possible", "Only Q third cast allows [[WALL_HOP]]", "R has a wind-up animation on first use.\nUsing E then R cancels the animation"]
 
        },
    },
  },
 

 
  ultCooldown: {
 
    6: 120,
 
    11: 90,
 
    16: 60,
 
  },
 

 
};
 

 
export default riven;
 


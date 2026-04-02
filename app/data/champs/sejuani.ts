import type { ChampData } from "../interactions/types";
 

 
const sejuani: ChampData = {
 
  id: "sejuani",
 
  skills: {
 
    P: [],
 
    Q: ["Q_FLASH", "AIRBORNE", "WALL_HOP"],
 
    W: ["W_FLASH", "SLOW"],
 
    E: ["E_FLASH", "STUN", "AA_RESET"],
 
    R: ["R_FLASH", "STUN", "SLOW", "REVEALED"],
 
  },
 

 
  vision: {
 
    P: [],
 
    Q: ["HIT_INDICATOR"],
 
    W: ["HIT_SOUND"],
 
    E: ["POSITION_REVEAL"],
 
    R: { phases: [
      { label: { ko: "R 투사체", en: "R Projectile" }, tags: ["VISION"] },
      { label: { ko: "R 장판", en: "R Zone" }, tags: ["VISION"] },
    ] },
 
  },
 

 
  gimmick: {
 
    P: [],
 
    Q: ["DMG_MAGIC", "PIERCE_MINION", "SINGLE", "DASH"],
 
    W: { phases: [
      { label: { ko: "W 1타 부채꼴", en: "W" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "DEBUFF_STACK"] },
      { label: { ko: "W 2타 직선", en: "W " }, tags: ["DMG_PHYSICAL", "ST_DELAYED", "AOE", "DEBUFF_STACK"] },
    ] },
 
    E: ["STACK_CONSUME", "DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "HOMING"],
 
    R: { phases: [
      { label: { ko: "R 투사체", en: "R Projectile" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SINGLE"] },
      { label: { ko: "R 장판", en: "R Zone" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ZONE"] },
    ] },
 
  },
 

 
  notes: {
    skill: {
      note2: {
 
        ko: [
 
        "P는 [[SLOW]]만 면역임", "세주아니에게 [[STUN]] 당한 대상을 처음 평타로 떄리면 [[DMG_MAGIC]] 추가.", "W에 [[SLOW]]는 2타만 적용", "R은 사거리 1/4 보다 먼 대상에게 적중 할 때 여러가지 효과가 추가 되거나 증가함\n[[SLOW]]와 광역피해는 1/4이상일때만", "R은 적중피해를 입었다면 장판피해는 입지 않음."
 
      ],
 
        en: ["P only immunizes against [[SLOW]]", "W's [[SLOW]] only applies on the second hit", "R effects and bonus are only applied when hitting a target farther than 1/4 of the range.\n[[SLOW]] and AoE damage only apply beyond 1/4 range"]
 
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },
 

 
  ultCooldown: {
 
    6: 120,
 
    11: 105,
 
    16: 90,
 
  },
 

 
};
 

 
export default sejuani;
 

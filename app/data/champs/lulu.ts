import type { ChampData } from "../interactions/types";

const lulu: ChampData = {
  id: "lulu",
  skills: {
    P: [],
    Q: ["Q_FLASH", "SLOW"],
    W: { phases: [
      { label: { ko: "W 아군", en: "W Ally" }, tags: ["W_FLASH", "AS_UP", "MS_UP"] },
      { label: { ko: "W 상대", en: "W Enemy" }, tags: ["W_FLASH", "POLYMORPH"] },
    ] },
    E: { phases: [
      { label: { ko: "E 아군", en: "E Ally" }, tags: ["E_FLASH", "SHIELD"] },
      { label: { ko: "E 상대", en: "E Enemy" }, tags: ["E_FLASH", "REVEALED"] },
    ] },
    R: ["R_FLASH", "MAX_HP_UP", "AIRBORNE", "SLOW", "BUFF_FORM"],
  },

  vision: {
      P: [],
      Q: ["FEEDBACK_SOUND"],
      W: { phases: [
      { label: { ko: "W 아군", en: "W Ally" }, tags: [] },
      { label: { ko: "W 상대", en: "W Enemy" }, tags: ["POSITION_REVEAL"] },
    ] },
      E: { phases: [
      { label: { ko: "E 아군", en: "E Ally" }, tags: [] },
      { label: { ko: "W 상대", en: "W Enemy" }, tags: ["POSITION_REVEAL", "TRUE_SIGHT"] },
    ] },
      R: [],
  },

  gimmick: {
      P: ["DMG_MAGIC", "PROJECTILE", "ON_HIT"],
      Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE"],

      W: { phases: [
      { label: { ko: "W 아군", en: "W Ally" }, tags: ["TIMING_INSTANT", "TARGETED"] },
      { label: { ko: "W 상대", en: "W Enemy" }, tags: ["TIMING_CAST"] },
    ] },

    E: { phases: [
      { label: { ko: "E 아군", en: "E Ally" }, tags: ["TIMING_INSTANT", "TARGETED"] },
      { label: { ko: "E 상대", en: "E Enemy" }, tags: ["DMG_MAGIC", "TARGETED", "NON_PROJECTILE", "MARK"] },
    ] },

      R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["BUFF_FORM", "TIMING_INSTANT", "TARGETED"] },
      { label: { ko: "R 주변효과", en: "R Slowing Aura" }, tags: ["AOE"] },
    ] },
      
     
   },


  notes: {
    ko: [
    "[[Q_FLASH]]이 가능은 하지만\n픽스는 점멸로 따라오지 않아 데미지가 덜 들어감", "룰루 평타는 룰루가 1개를 날리고\n픽스가 3개를 추가로 날림", "R이 [[MAX_HP_UP]]여서 풀피에 써도 유효하고\n[[GW]]효과도 안받음\nR의 [[SLOW]]는 주변에 지속.\n부담없이 써서 [[AIRBORNE]], [[SLOW]]를 활용해야 좋음",
  ],
    en: ["[[Q_FLASH]] technically works \nbut the polymorph doesn't follow the flash, so damage is reduced", "Lulu fires 1 basic attack while Pix fires 3 additional ones", "R is [[MAX_HP_UP]] so it's effective even at full HP and ignores [[GW]].\nR [[SLOW]] persists in the surrounding area.\nUse it freely for [[AIRBORNE]] and [[SLOW]] utility"]
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default lulu;

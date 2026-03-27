import type { ChampData } from "../interactions/types";

const janna: ChampData = {
  id: "janna",
  skills: {
    P: ["MS_UP"],
    Q: ["AIRBORNE"],
    W: ["W_FLASH", "MS_UP", "SLOW", "GHOSTING"],
    E: ["E_FLASH", "SHIELD"],
    R: ["HEAL", "KNOCKBACK"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  notes: {
    ko: [
    "P에 [[MS_UP]]는 아군에게 적용되는것", "[[Q_FLASH]], [[R_FLASH]] 안됨", "Q1을 사용했을 때 CC에 걸리면 Q2를 사용할 수 없음.", "W에 [[GHOSTING]]는 쿨타임일 때 사라짐"
  ],
    en: ["P's [[MS_UP]] applies to nearby allies", "[[Q_FLASH]] and [[R_FLASH]] not possible", "If Janna is hit by CC after casting Q1, Q2 cannot be activated.", "W's [[GHOSTING]] disappears when on cooldown"]
  },

  ultCooldown: {
    6: 130,
    11: 115,
    16: 100,
  },

};

export default janna;

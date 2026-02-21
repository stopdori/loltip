import type { ChampData } from "../interactions/types";

const janna: ChampData = {
  id: "janna",
  skills: {
    P: ["MS_UP"],
    Q: ["AIRBORNE"],
    W: ["W_FLASH", "MS_UP", "SLOW", "GHOSTING"],
    E: ["E_FLASH", "SHIELD"],
    R: ["HEAL", "AIRBORNE"],
    ETC: [],
  },

  notes: {
    ko: [
    "P에 [[MS_UP]]는 아군에게 적용되는것", "[[Q_FLASH]], [[R_FLASH]] 안됨", "W에 [[GHOSTING]]는 쿨타임일 때 사라짐"
  ],
    en: []
  },

vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
    ETC: [],
  },



  ultCooldown: {
    6: 130,
    11: 115,
    16: 100,
  },

};

export default janna;

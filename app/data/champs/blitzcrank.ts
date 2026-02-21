import type { ChampData } from "../interactions/types";

const blitzcrank: ChampData = {
  id: "blitzcrank",
  skills: {
    P: ["SHIELD"],
    Q: ["GRAB"],
    W: ["AS_UP", "MS_UP"],
    E: ["AIRBORNE"],
    R: ["R_FLASH", "SHIELD_BREAK", "SILENCE"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]] 안됨", "W는 지속시간이 종료되면 자체 [[SLOW]]가 걸림"
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
    6: 60,
    11: 40,
    16: 20,
  },

};

export default blitzcrank;

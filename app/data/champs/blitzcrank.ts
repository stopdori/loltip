import type { ChampSkill } from "../types";

const blitzcrank: ChampSkill = {
  id: "blitzcrank",
  skills: {
    P: ["SHIELD"],
    Q: ["GRAB"],
    W: ["AS_UP", "MS_UP"],
    E: ["AIRBORNE"],
    R: ["R_FLASH", "SHIELD_BREAK", "SILENCE"],
    ETC: [],
  },

  notes: [
    "[[Q_FLASH]] 안됨", "W는 지속시간이 종료되면 자체 [[SLOW]]가 걸림"
  ],

  ultCooldown: {
    6: 60,
    11: 40,
    16: 20,
  },

};

export default blitzcrank;

import type { ChampSkill } from "../types";

const milio: ChampSkill = {
  id: "milio",
  skills: {
    P: [],
    Q: ["AIRBORNE", "SLOW"],
    W: ["W_FLASH", "HEAL"],
    E: ["E_FLASH", "SHIELD", "MS_UP"],
    R: ["HEAL", "CC_CLEANSE", "TENACITY"],
    ETC: [],
  },

  notes: [
    "[[Q_FLASH]], [[R_FLASH]] 안됨", "W에 텔 안됨", "R은 자신이 CC걸리면 사용이 안됨"
  ],

  ultCooldown: {
    6: 160,
    11: 145,
    16: 130,
  },

};

export default milio;

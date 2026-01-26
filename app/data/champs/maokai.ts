import type { ChampSkill } from "../types";

const maokai: ChampSkill = {
  id: "maokai",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH", "SLOW", "AIRBORNE"],
    W: ["W_FLASH", "ROOT", "WALL_HOP", "UNTARGETABLE", "TOWER_DODGE"],
    E: ["E_FLASH", "SLOW", "VISION"],
    R: ["ROOT", "MS_UP"],
    ETC: [],
  },

  notes: [
    "[[R_FLASH]] 안됨", "묘목에 텔 안됨", "R의 [[MS_UP]]는 상대에게 적중하면 적용됨"
  ],


  ultCooldown: {
    6: 130,
    11: 110,
    16: 90,
  },

};

export default maokai;

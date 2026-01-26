import type { ChampSkill } from "../types";

const malphite: ChampSkill = {
  id: "malphite",
  skills: {
    P: ["SHIELD"],
    Q: ["Q_FLASH", "SLOW", "MS_UP"],
    W: ["AA_RESET"],
    E: ["E_FLASH", "AS_DOWN"],
    R: ["UNSTOPPABLE", "WALL_HOP"],
    ETC: [],
  },

  notes: [
    "[[R_FLASH]] 안됨", "E에는 상대 공속감소가 있음"
  ],


  ultCooldown: {
    6: 130,
    11: 115,
    16: 100,
  },

};

export default malphite;

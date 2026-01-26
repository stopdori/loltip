import type { ChampSkill } from "../types";

const leblanc: ChampSkill = {
  id: "leblanc",
  skills: {
    P: ["INVISIBILITY"],
    Q: ["Q_FLASH"],
    W: ["WALL_HOP"],
    E: ["E_FLASH", "REVEALED", "ROOT"],
    R: [],
    ETC: [],
  },

  notes: [
    "[[W_FLASH]] 안됨", "분신 컨트롤은 alt 우클릭으로 가능"
  ],

  ultCooldown: {
    6: 45,
    11: 35,
    16: 25,
  },

};

export default leblanc;

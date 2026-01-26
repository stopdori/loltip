import type { ChampSkill } from "../types";

const kaisa: ChampSkill = {
  id: "kaisa",
  skills: {
    base : {
    P: [],
    Q: [],
    W: ["W_FLASH", "REVEALED"],
    E: ["AS_UP", "MS_UP", "GHOSTING"],
    R: ["R_FLASH", "SHIELD", "WALL_HOP"],
    ETC: [],
  },

  alt: {
      
      P: [],
      Q: [],
      W: ["W_FLASH", "REVEALED"],
      E: ["AS_UP", "MS_UP", "GHOSTING", "INVISIBILITY"],
      R: ["R_FLASH", "SHIELD", "WALL_HOP"],
      ETC: [],
    },
  },

  notes: [
    "진화\nQ 추가 공격력100\nW 주문력 100\nE 공격속도 100%"  ],

  ultCooldown: {
    6: 130,
    11: 100,
    16: 70,
  },

};

export default kaisa;

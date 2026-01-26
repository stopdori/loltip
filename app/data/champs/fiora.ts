import type { ChampSkill } from "../types";

const fiora: ChampSkill = {
  id: "fiora",
  skills: {
    P: ["MS_UP", "HEAL"],
    Q: ["WALL_HOP"],
    W: ["AS_UP", "MS_UP", "SLOW", "STUN"],
    E: ["AS_UP", "SLOW", "AA_RESET"],
    R: ["R_FLASH", "HEAL", "MS_UP"],
    ETC: [],
  },

  notes: [
   "P는 ''급소''를 찔러야 발동함", "[[Q_FLASH]](찌르기) 안됨", "[[W_FLASH]](응수) 안됨", "W는 [[SLOW]](CC기를 막아내면 [[STUN]])를 검", "R에 [[MS_UP]]는 P효과 증가임\nR을 걸고 급소를 한번이라도 찌르면 장판 생김"
  ],

  ultCooldown: {
    6: 110,
    11: 90,
    16: 70,
  },

};

export default fiora;

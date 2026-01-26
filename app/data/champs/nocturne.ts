import type { ChampSkill } from "../types";

const nocturne: ChampSkill = {
  id: "nocturne",
  skills: {
    P: ["HEAL"],
    Q: ["GHOSTING", "MS_UP", "AD_UP"],
    W: ["AS_UP", "SPELL_SHIELD"],
    E: ["E_FLASH", "FEAR"],
    R: ["R_FLASH", "WALL_HOP", "NEARSIGHT"],
    ETC: [],
  },

  notes: [
    "[[Q_FLASH]] 안됨", "Q의 버프는 Q장판 위에서만 발동", "W의 [[AS_UP]]는 방어해내면 효과 2배 ", "E가 끊기지 않아야 [[FEAR]]를 검", "R의 [[NEARSIGHT]]는 자기 시야만 보임"
  ],

  ultCooldown: {
    6: 140,
    11: 115,
    16: 90,
  },

};

export default nocturne;

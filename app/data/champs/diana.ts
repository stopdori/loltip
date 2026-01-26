import type { ChampSkill } from "../types";

const diana: ChampSkill = {
  id: "diana",
  skills: {
    P: ["AS_UP"],
    Q: ["Q_FLASH", "VISION"],
    W: ["W_FLASH", "SHIELD"],
    E: ["E_FLASH", "WALL_HOP"],
    R: ["R_FLASH", "GRAB"],
    ETC: [],
  },

  notes: [
    "P는 레벨별 [[AS_UP]]이 있고\n스킬 사용시 [[AS_UP]] 추가로 있음", "W 구체를 다 터뜨리면 추가 [[SHIELD]] 얻음", "EQ로 E 초기화 안됨",
  ],



  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

};

export default diana;

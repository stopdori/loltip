import type { ChampSkill } from "../types";

const kindred: ChampSkill = {
  id: "kindred",
  skills: {
    P: [],
    Q: ["AS_UP", "WALL_HOP", "AA_RESET"],
    W: ["W_FLASH", "HEAL"],
    E: ["E_FLASH", "SLOW"],
    R: ["HEAL", "INVULNERABLE"],
    ETC: [],
  },

  notes: [
    "R플 안됨", "표식당 Q의 [[AS_UP]] 5% 증가\nW, E 데미지증가\n4표식당 사거리 75증가", "정글표식은 랜덤으로 뜨는듯?", "R은 체력 10% 밑으로 [[INVULNERABLE]]임"
  ],

  ultCooldown: {
    6: 160,
    11: 140,
    16: 120,
  },

};

export default kindred;

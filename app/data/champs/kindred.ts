import type { ChampData } from "../interactions/types";

const kindred: ChampData = {
  id: "kindred",
  skills: {
    P: [],
    Q: ["AS_UP", "WALL_HOP", "AA_RESET"],
    W: ["W_FLASH", "HEAL"],
    E: ["E_FLASH", "SLOW"],
    R: ["HEAL", "INVULNERABLE"],
    ETC: [],
  },

  notes: {
    ko: [
    "R플 안됨", "표식당 Q의 [[AS_UP]] 5% 증가\nW, E 데미지증가\n4표식당 사거리 75증가", "정글표식은 랜덤으로 뜨는듯?", "R은 체력 10% 밑으로 [[INVULNERABLE]]임"
  ],
    en: ["R flash not possible", "Each mark increases Q [[AS_UP]] by 5%, W and E damage, and range by 75 every 4 marks", "Jungle marks appear to be random", "R grants [[INVULNERABLE]] below 10% HP"]
  },

vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
    ETC: [],
  },


  ultCooldown: {
    6: 160,
    11: 140,
    16: 120,
  },

};

export default kindred;

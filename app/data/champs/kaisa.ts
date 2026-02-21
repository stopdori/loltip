import type { ChampData } from "../interactions/types";

const kaisa: ChampData = {
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

  notes: {
    ko: [
    "진화\nQ 추가 공격력100\nW 주문력 100\nE 공격속도 100%", "진화 W는 상대 챔피언을 맞히면\n쿨타임 감소"
  ],
    en: []
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
    6: 130,
    11: 100,
    16: 70,
  },

};

export default kaisa;

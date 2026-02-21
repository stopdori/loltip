import type { ChampData } from "../interactions/types";

const sett: ChampData = {
  id: "sett",
  skills: {
    P: ["HEAL"],
    Q: ["MS_UP", "AA_RESET"],
    W: ["W_FLASH", "SHIELD"],
    E: ["GRAB", "SLOW", "STUN"],
    R: ["R_FLASH", "SUPPRESS", "SLOW", "WALL_HOP"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[E_FLASH]] 안됨", "W는 중심에 맞히면 고정 데미지\nW는 신중하게 쓰는게 좋음", "E [[STUN]]은 조건부로, 양쪽을 박치기 해야함\n미니언이랑 부딪혀도 [[STUN]]이 걸림", "R은 탱커에게 쓰면 착지 데미지가 쌔짐 "
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
    6: 120,
    11: 100,
    16: 80,
  },

};

export default sett;

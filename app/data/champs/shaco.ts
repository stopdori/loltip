import type { ChampData } from "../interactions/types";

const shaco: ChampData = {
  id: "shaco",
  skills: {
    P: [],
    Q: ["Q_FLASH", "INVISIBILITY", "CRIT", "WALL_HOP"],
    W: ["W_FLASH", "ALLY_TP_OK", "FEAR"],
    E: ["E_FLASH", "SLOW"],
    R: ["R_FLASH", "FEAR", "WALL_HOP", "TOWER_DODGE", "ALLY_TP_OK"],
    ETC: [],
  },

  notes: {
    ko: [
    "샤코는 뒤에서 공격하면 추뎀이 있음", "Q를 쓰고 상대 뒤에서 공격하면 [[CRIT]]\nQ [[INVISIBILITY]]중에 점멸, W, R을 써도 풀리지 않음\n (E는 풀림)", "R(분신)이 죽을 때 주변에 광역[[FEAR]] 발동", "분신에는 텔이 안타지지만\n분신 죽고 나오는 박스에는 [[ALLY_TP_OK]]",
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
    6: 100,
    11: 90,
    16: 80,
  },

};

export default shaco;

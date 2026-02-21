import type { ChampData } from "../interactions/types";

const swain: ChampData = {
  id: "swain",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "SLOW", "REVEALED"],
    E: ["ROOT", "GRAB"],
    R: ["R_FLASH", "LIFESTEAL", "SLOW"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[E_FLASH]] 안됨", "P는 W, E, 킬관여로 획득\n체력회복은 [[GW]] 적용\n최대체력 증가는 [[GW]] 안됨", "E1은 적중하면 [[ROOT]]\nE2는 [[GRAB]]", "R에 [[SLOW]]는 재사용 했을 때 나오는 파동에만"
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
    11: 120,
    16: 120,
  },

};

export default swain;

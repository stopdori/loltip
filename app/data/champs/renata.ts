import type { ChampData } from "../interactions/types";

const renata: ChampData = {
  id: "renata",
  skills: {
    P: [],
    Q: ["ROOT", "STUN"],
    W: ["W_FLASH", "MS_UP"],
    E: ["SHIELD", "SLOW"],
    R: ["R_FLASH", "BERSERK"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]], [[E_FLASH]] 안됨", "Q는 상대 A챔피언에 적중하면 [[ROOT]]\n다시 사용해서 상대 B챔피언에 부딪히면 B챔피언만 [[STUN]] ", "W는 대상이 죽음극복하면 최대체력 20%가 됨. 회복이 아니라서 치감 안받음", "E는 아군은 [[SHIELD]], 적군은 [[SLOW]]"
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
    6: 150,
    11: 130,
    16: 110,
  },

};

export default renata;

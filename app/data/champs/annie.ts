import type { ChampData } from "../interactions/types";

const annie: ChampData = {
  id: "annie",
  skills: {
    P: ["STUN"],
    Q: [],
    W: ["W_FLASH",],
    E: ["SHIELD", "MS_UP"],
    R: ["MR_PEN", "ALLY_TP_OK"],
    ETC: [],
  },

  notes: {
    ko: [
    "P의 [[STUN]]은 4스택 일 때 Q, W, R에 적용", "R의 기본지속 효과로 [[MR_PEN]]있음",
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
    11: 115,
    16: 100,
  },

};

export default annie;

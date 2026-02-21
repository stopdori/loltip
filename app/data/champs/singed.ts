import type { ChampData } from "../interactions/types";

const singed: ChampData = {
  id: "singed",
  skills: {
    P: ["MS_UP" ],
    Q: [],
    W: ["W_FLASH", "GROUNDED", "SLOW"],
    E: ["E_FLASH", "GRAB", "ROOT"],
    R: ["HEAL", "MS_UP", "GW"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[E_FLASH]] 되는데, [[INSEC_KICK]]은 불가능\nE에 [[ROOT]]은 W 위에 던져야 발동", "E는 던지는 모션이 발동하면 웬만해서 스킬이 유효함\n대상이 날아가는 위치는 E를 사용한 곳 기준", "R에 [[GW]]은 Q에만 적용"
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
    11: 100,
    16: 100,
  },

};

export default singed;

import type { ChampData } from "../interactions/types";

const kennen: ChampData = {
  id: "kennen",
  skills: {
    P: ["STUN"],
    Q: [],
    W: [],
    E: ["AS_UP", "MS_UP", "GHOSTING"],
    R: ["R_FLASH"],
    ETC: [],
  },

  notes: {
    ko: [
    "Q플 안됨", "P가 3스택되면 스턴걸림", "E에 [[AS_UP]]은 종료하고 발동", "R은 어떤 CC를 맞아도 해제되지 않음"
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

export default kennen;

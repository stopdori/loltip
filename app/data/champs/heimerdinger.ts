import type { ChampData } from "../interactions/types";

const heimerdinger: ChampData = {
  id: "heimerdinger",
  skills: {
    base: {
    P: ["MS_UP"],
    Q: ["ALLY_TP_OK"],
    W: [],
    E: ["SLOW", "STUN"],
    R: [],
    ETC: [],
  },

  alt: {
      
      P: ["MS_UP"],
      Q: ["SLOW", "ALLY_TP_OK"],
      W: [],
      E: ["SLOW", "STUN"],
      R: [],
      ETC: [],
    },
  },


  notes: {
    ko: [
    "P의 [[MS_UP]]는 Q, 아군타워 근처에서만 발동", "[[W_FLASH]], [[E_FLASH]] 안됨", "E는 중심에 맞혀야 [[STUN]]"
  ],
    en: ["P's [[MS_UP]] only activates near Q (turrets) or allied towers", "[[W_FLASH]] and [[E_FLASH]] not possible", "E must hit the center to apply [[STUN]]"]
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
    11: 85,
    16: 70,
  },

};

export default heimerdinger;

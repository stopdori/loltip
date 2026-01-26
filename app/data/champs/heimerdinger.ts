import type { ChampSkill } from "../types";

const heimerdinger: ChampSkill = {
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


  notes: [
    "P의 [[MS_UP]]는 타워 근처에서만 발동", "[[W_FLASH]], [[E_FLASH]] 안됨", "E는 중앙에 맞혀야 [[STUN]]"
  ],

  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

};

export default heimerdinger;

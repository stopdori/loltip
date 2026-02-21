import type { ChampData } from "../interactions/types";

const rumble: ChampData = {
  id: "rumble",
  skills: {
    P: ["AS_UP"],
    Q: ["Q_FLASH"],
    W: ["MS_UP", "SHIELD"],
    E: ["E_FLASH", "SLOW", "MR_SHRED"],
    R: ["SLOW"],
    ETC: [],
  },

  notes: {
    ko: [
    "과열되면 럼블이 [[SILENCE]] 되면서\n[[AS_UP]]에 추뎀있음", "럼블 E의 [[MR_SHRED]]은 [[SLOW]] 대상에게 적중하면 2배이고, 과열 E는 효과가 50% 증가함\n한마디로 맞지마라",
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
    11: 105,
    16: 80,
  },

};

export default rumble;

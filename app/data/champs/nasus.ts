import type { ChampData } from "../interactions/types";

const nasus: ChampData = {
  id: "nasus",
  skills: {
    P: ["LIFESTEAL"],
    Q: ["AA_RESET"],
    W: ["W_FLASH", "AS_DOWN", "SLOW"],
    E: ["E_FLASH", "AR_SHRED"],
    R: ["MAX_HP_UP", "BUFF_FORM"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  notes: {
    ko: [
    "R은 [[MAX_HP_UP]]여서 풀피에도 유효함\n[[GW]]영향도 안받음"
  ],
    en: ["R is [[MAX_HP_UP]] so it's effective even at full HP and ignores [[GW]]"]
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default nasus;

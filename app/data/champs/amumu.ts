import type { ChampData } from "../interactions/types";

const amumu: ChampData = {
  id: "amumu",
  skills: {
    P: [],
    Q: ["Q_FLASH", "STUN", "WALL_HOP", "VISION"],
    W: [],
    E: ["E_FLASH"],
    R: ["R_FLASH", "STUN"],
    ETC: [],
  },

   notes: {
    ko: [
    "Q로 날아가면서 R 안써짐"
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
    11: 125,
    16: 100,
  },

};

export default amumu;

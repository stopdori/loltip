import type { ChampData } from "../interactions/types";

const kassadin: ChampData = {
  id: "kassadin",
  skills: {
    P: ["DMG_REDUCE", "GHOSTING"],
    Q: ["Q_FLASH", "SHIELD"],
    W: ["AA_RESET"],
    E: ["E_FLASH", "SLOW"],
    R: ["R_FLASH", "WALL_HOP"],
    ETC: [],
  },

  notes: {
    ko: [
    "P의 [[DMG_REDUCE]]는 마법피해만 해당됨","Q에 채널링 캔슬 있음. 침묵 아님",
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
    6: 0,
    11: 0,
    16: 0,
  },

};

export default kassadin;
